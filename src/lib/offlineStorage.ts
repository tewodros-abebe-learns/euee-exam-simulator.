/**
 * Offline Storage Engine for EUEE Exam Simulator
 * Powered by IndexedDB for zero-latency, full-fidelity offline test taking & caching.
 */

import { allOfficialExams, default2017Exams, default2016Exams } from '../data/sampleExams';
import { type Question } from '../services/geminiService';

const DB_NAME = 'EUEE_Exam_Offline_DB';
const DB_VERSION = 1;

export interface OfflineExam {
  id: string;
  title: string;
  subject: string;
  grade: string;
  questions: Question[];
  createdBy?: string;
  createdAt: number;
  isSample?: boolean;
  isOfflineReady?: boolean;
  source?: 'sample' | 'custom' | 'cloud';
}

export interface OfflineSession {
  id: string;
  examId: string;
  userId?: string;
  status: 'IN_PROGRESS' | 'COMPLETED';
  answers: Record<string, string>;
  score?: number;
  total?: number;
  percentage?: number;
  startTime: number;
  timeLimit: number;
  timeSpent?: number;
  lastUpdated: number;
  syncedWithCloud: boolean;
}

export interface SyncQueueItem {
  id?: number;
  type: 'SAVE_SESSION' | 'CREATE_EXAM';
  payload: any;
  timestamp: number;
}

class OfflineStorageManager {
  private dbPromise: Promise<IDBDatabase> | null = null;

  private getDB(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      if (typeof window === 'undefined' || !window.indexedDB) {
        reject(new Error('IndexedDB is not supported in this browser environment.'));
        return;
      }

      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Store 1: Exams
        if (!db.objectStoreNames.contains('exams')) {
          const examStore = db.createObjectStore('exams', { keyPath: 'id' });
          examStore.createIndex('subject', 'subject', { unique: false });
          examStore.createIndex('createdBy', 'createdBy', { unique: false });
        }

        // Store 2: User Sessions / Results
        if (!db.objectStoreNames.contains('sessions')) {
          const sessionStore = db.createObjectStore('sessions', { keyPath: 'id' });
          sessionStore.createIndex('examId', 'examId', { unique: false });
          sessionStore.createIndex('userId', 'userId', { unique: false });
          sessionStore.createIndex('syncedWithCloud', 'syncedWithCloud', { unique: false });
        }

        // Store 3: Sync Queue
        if (!db.objectStoreNames.contains('sync_queue')) {
          db.createObjectStore('sync_queue', { keyPath: 'id', autoIncrement: true });
        }
      };

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        this.dbPromise = null;
        reject(request.error);
      };
    });

    return this.dbPromise;
  }

  /**
   * Initialize offline store and seed built-in national exams if not yet cached
   */
  async init(): Promise<void> {
    try {
      const db = await this.getDB();
      
      // Pre-populate national past papers (2017 & 2016 E.C.) so students have complete offline test bank immediately
      for (const sample of allOfficialExams) {
        await this.saveExam({
          id: sample.id,
          title: sample.title,
          subject: sample.subject,
          grade: sample.grade || 'Grade 12',
          questions: sample.questions,
          createdAt: Date.now(),
          isSample: true,
          isOfflineReady: true,
          source: 'sample'
        });
      }
    } catch (e) {
      console.warn('Could not initialize offline IndexedDB storage:', e);
    }
  }

  private async getExamsCount(): Promise<number> {
    const db = await this.getDB();
    return new Promise((resolve) => {
      const tx = db.transaction('exams', 'readonly');
      const store = tx.objectStore('exams');
      const countReq = store.count();
      countReq.onsuccess = () => resolve(countReq.result);
      countReq.onerror = () => resolve(0);
    });
  }

  // ==========================================
  // EXAM OPERATIONS
  // ==========================================
  async saveExam(exam: OfflineExam): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('exams', 'readwrite');
      const store = tx.objectStore('exams');
      const req = store.put({
        ...exam,
        isOfflineReady: true,
        lastCachedAt: Date.now()
      });
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  async getExamById(id: string): Promise<OfflineExam | null> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('exams', 'readonly');
      const store = tx.objectStore('exams');
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }

  async getAllExams(subject?: string): Promise<OfflineExam[]> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('exams', 'readonly');
      const store = tx.objectStore('exams');
      const req = store.getAll();
      req.onsuccess = () => {
        let results: OfflineExam[] = req.result || [];
        if (subject && subject !== 'All') {
          results = results.filter(e => e.subject.toLowerCase() === subject.toLowerCase());
        }
        results.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        resolve(results);
      };
      req.onerror = () => reject(req.error);
    });
  }

  async deleteExam(id: string): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('exams', 'readwrite');
      const store = tx.objectStore('exams');
      const req = store.delete(id);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  // ==========================================
  // SESSION & PROGRESS OPERATIONS
  // ==========================================
  async saveSession(session: OfflineSession): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('sessions', 'readwrite');
      const store = tx.objectStore('sessions');
      const req = store.put(session);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  async getSession(id: string): Promise<OfflineSession | null> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('sessions', 'readonly');
      const store = tx.objectStore('sessions');
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }

  async getAllSessions(userId?: string): Promise<OfflineSession[]> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('sessions', 'readonly');
      const store = tx.objectStore('sessions');
      const req = store.getAll();
      req.onsuccess = () => {
        let results: OfflineSession[] = req.result || [];
        if (userId) {
          results = results.filter(s => s.userId === userId || !s.userId);
        }
        results.sort((a, b) => (b.lastUpdated || 0) - (a.lastUpdated || 0));
        resolve(results);
      };
      req.onerror = () => reject(req.error);
    });
  }

  async deleteSession(id: string): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('sessions', 'readwrite');
      const store = tx.objectStore('sessions');
      const req = store.delete(id);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  // ==========================================
  // SYNC QUEUE OPERATIONS
  // ==========================================
  async addToSyncQueue(item: Omit<SyncQueueItem, 'id'>): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('sync_queue', 'readwrite');
      const store = tx.objectStore('sync_queue');
      const req = store.add(item);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  async getSyncQueue(): Promise<SyncQueueItem[]> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('sync_queue', 'readonly');
      const store = tx.objectStore('sync_queue');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  async clearSyncQueueItem(id: number): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('sync_queue', 'readwrite');
      const store = tx.objectStore('sync_queue');
      const req = store.delete(id);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  async getStats(): Promise<{ cachedExamsCount: number; offlineSessionsCount: number; pendingSyncCount: number }> {
    try {
      const db = await this.getDB();
      const [exams, sessions, queue] = await Promise.all([
        this.getAllExams(),
        this.getAllSessions(),
        this.getSyncQueue()
      ]);
      return {
        cachedExamsCount: exams.length,
        offlineSessionsCount: sessions.length,
        pendingSyncCount: queue.length
      };
    } catch {
      return { cachedExamsCount: 0, offlineSessionsCount: 0, pendingSyncCount: 0 };
    }
  }
}

export const offlineStorage = new OfflineStorageManager();
