import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import { Building2, Bot, Package, BookOpen, MessageCircle, BarChart3, Shield, Settings } from 'lucide-react';
import { cn } from '@/utils/cn';
const navItems = [
    { to: '/', label: 'Overview', icon: Building2 },
    { to: '/assistant', label: 'AI Assistant', icon: Bot },
    { to: '/orders', label: 'Orders', icon: Package },
    { to: '/knowledge', label: 'Knowledge Base', icon: BookOpen },
    { to: '/conversations', label: 'Conversations', icon: MessageCircle },
    { to: '/analytics', label: 'Analytics', icon: BarChart3 },
    { to: '/security', label: 'Security & Audit', icon: Shield },
    { to: '/settings', label: 'Settings', icon: Settings },
];
export function Sidebar({ open, onClose }) {
    return (_jsxs(_Fragment, { children: [open && _jsx("div", { className: "fixed inset-0 bg-black/50 lg:hidden", onClick: onClose }), _jsxs("aside", { className: cn('fixed left-0 top-0 z-40 h-screen w-72 border-r border-slate-800 bg-navy-800/95 backdrop-blur transition-transform lg:translate-x-0', open ? 'translate-x-0' : '-translate-x-full'), children: [_jsx("div", { className: "flex h-16 items-center px-6 border-b border-slate-800", children: _jsx("span", { className: "text-lg font-semibold", children: "VRForce" }) }), _jsx("nav", { className: "p-4 space-y-1", children: navItems.map((item) => {
                            const Icon = item.icon;
                            return (_jsxs(NavLink, { to: item.to, onClick: onClose, className: ({ isActive }) => cn('flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition', isActive ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-100'), children: [_jsx(Icon, { className: "h-5 w-5" }), item.label] }, item.to));
                        }) }), _jsx("div", { className: "absolute bottom-0 w-full p-4 border-t border-slate-800 text-xs text-slate-500", children: _jsx("p", { children: "Tenant-scoped \u2022 Cognito \u2022 API Gateway" }) })] })] }));
}
