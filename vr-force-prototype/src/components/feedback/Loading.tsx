import { Spinner } from './Spinner';

export function Loading({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3 text-slate-400">
      <Spinner />
      <span className="text-sm">{text}</span>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="h-4 w-1/3 bg-slate-800 rounded" />
      <div className="mt-4 space-y-2">
        <div className="h-3 bg-slate-800 rounded" />
        <div className="h-3 bg-slate-800 rounded w-5/6" />
        <div className="h-3 bg-slate-800 rounded w-4/6" />
      </div>
    </div>
  );
}
