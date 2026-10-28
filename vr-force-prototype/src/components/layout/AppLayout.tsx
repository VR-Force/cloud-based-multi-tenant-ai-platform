import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { useState } from 'react';

export function AppLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="lg:pl-72">
        <TopNav onToggleSidebar={() => setOpen(true)} />
        <main className="p-4 lg:p-6 space-y-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
