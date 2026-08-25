import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] py-8 px-6 md:px-12 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-lg font-bold text-[var(--text-primary)]">EUEE Exam Simulator</span>
          <p className="text-xs text-[var(--text-secondary)] mt-1">© 2026 EUEE. The Digital Curator.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)]">
            <span>Developed By <strong className="text-[var(--text-primary)] font-bold">Mr. Tewodros Abebe</strong></span>
          </div>

          <a
            href="https://t.me/hahu_Ai"
            target="_blank"
            rel="noopener noreferrer"
            title="Contact Mr. Tewodros Abebe on Telegram (@hahu_Ai)"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#229ED9]/15 hover:bg-[#229ED9]/25 text-[#229ED9] border border-[#229ED9]/30 transition-all font-bold hover:scale-105 active:scale-95 shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Telegram: @hahu_Ai</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

