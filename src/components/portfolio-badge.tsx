import { useState } from "react";
import { ArrowUpRight, X, Sparkles } from "lucide-react";

export function PortfolioBadge() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside
      aria-label="Creator portfolio credit"
      className="fixed bottom-4 right-4 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <div className="flex items-center rounded-full border border-white/15 bg-neutral-950/90 py-1.5 pl-3 pr-1.5 text-xs text-neutral-300 shadow-2xl backdrop-blur-md transition-all hover:border-white/30 hover:bg-neutral-900 hover:text-white">
        <a
          href="https://mahmoud-tahrawi.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 font-medium"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
            <Sparkles className="h-3 w-3" />
          </span>
          <span>
            Demo built by{" "}
            <strong className="font-semibold text-white transition-colors group-hover:text-primary">
              Mahmoud Tahrawi
            </strong>
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </a>

        <div className="mx-2 h-3.5 w-px bg-white/15" aria-hidden="true" />

        <button
          type="button"
          onClick={() => setVisible(false)}
          className="flex h-5 w-5 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none"
          title="Dismiss badge"
          aria-label="Dismiss badge"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </aside>
  );
}
