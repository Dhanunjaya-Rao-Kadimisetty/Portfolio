export default function LoadingSpinner() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-5 text-center px-4"
      role="status"
      aria-label="Loading interactive canvas"
    >
      <div className="relative flex items-center justify-center h-20 w-20">
        <div className="absolute inset-0 rounded-full border-2 border-blue-500/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-400 border-r-cyan-400 animate-spin" />
        <div className="h-10 w-10 rounded-full bg-blue-500/15 blur-[4px] animate-pulse" />
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-base font-semibold tracking-wider text-blue-100 uppercase">
          Dhanunjaya Rao
        </span>
        <span className="text-xs tracking-[0.25em] text-slate-400 uppercase">
          Loading Experience...
        </span>
      </div>
    </div>
  );
}
