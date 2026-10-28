import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn('rounded-2xl border border-slate-800 bg-slate-900/70 shadow-glow backdrop-blur-sm', className)}>
      {children}
    </div>
  );
}
