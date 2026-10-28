import { useAuth } from '@/auth/AuthProvider';
import { Button } from '@/components/ui/Button';
import { Bell, LogOut, Menu, User, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function TopNav({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-slate-800 bg-navy-900/80 backdrop-blur">
      <div className="flex h-full items-center justify-between gap-4 px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="lg:hidden" onClick={onToggleSidebar} aria-label="Toggle sidebar">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex flex-col">
            <span className="text-sm font-medium">VRForce</span>
            <span className="text-xs text-slate-400 hidden sm:block">Intelligent Support. Secure by Design.</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="relative">
            <Button variant="ghost" onClick={() => setOpen((v) => !v)} className="gap-2">
              <User className="h-5 w-5" />
              <span className="hidden sm:block max-w-[160px] truncate">{user?.email || user?.username || 'User'}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            {open && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-slate-800 bg-slate-900 shadow-glow">
                <div className="p-4 border-b border-slate-800">
                  <p className="text-sm font-medium">{user?.tenantName || 'No tenant'}</p>
                  <p className="text-xs text-slate-400 truncate">{user?.email}</p>
                  <p className="text-xs text-slate-500 mt-1">Groups: {user?.groups.join(', ') || 'None'}</p>
                </div>
                <div className="p-2">
                  <Button variant="ghost" className="w-full justify-start" onClick={signOut}>
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
