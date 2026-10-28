import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { useState } from 'react';
export function AppLayout() {
    const [open, setOpen] = useState(false);
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx(Sidebar, { open: open, onClose: () => setOpen(false) }), _jsxs("div", { className: "lg:pl-72", children: [_jsx(TopNav, { onToggleSidebar: () => setOpen(true) }), _jsx("main", { className: "p-4 lg:p-6 space-y-6", children: _jsx(Outlet, {}) })] })] }));
}
