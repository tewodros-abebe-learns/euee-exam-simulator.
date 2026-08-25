/**
 * Safe client-side file reading and text extraction utilities
 */

export function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Remove data URL prefix (e.g. data:application/pdf;base64,)
      const base64 = result.includes(',') ? result.split(',')[1] : result;
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export async function extractTextFromFile(file: File): Promise<string> {
  const fileName = file.name.toLowerCase();

  // Plain text / Markdown / CSV / JSON
  if (
    fileName.endsWith('.txt') ||
    fileName.endsWith('.md') ||
    fileName.endsWith('.csv') ||
    fileName.endsWith('.json') ||
    fileName.endsWith('.rtf') ||
    file.type.startsWith('text/')
  ) {
    try {
      return await file.text();
    } catch {
      return '';
    }
  }

  // For PDF files, attempt quick client text extraction if pdfjs is available
  if (fileName.endsWith('.pdf') || file.type === 'application/pdf') {
    try {
      const pdfjsLib = await import('pdfjs-dist');
      // Set worker if needed or disable worker in modern Vite
      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
      const pdfDoc = await loadingTask.promise;
      const textPieces: string[] = [];

      const maxPages = Math.min(pdfDoc.numPages, 40); // Read up to 40 pages
      for (let pageNum = 1; pageNum <= maxPages; pageNum++) {
        const page = await pdfDoc.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((item: any) => item.str || '')
          .join(' ');
        if (pageText.trim()) {
          textPieces.push(pageText);
        }
      }

      return textPieces.join('\n\n');
    } catch (e) {
      console.warn('PDF client-side text pre-extraction skipped:', e);
      return '';
    }
  }

  return '';
}
