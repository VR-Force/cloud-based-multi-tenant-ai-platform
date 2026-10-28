import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/auth/AuthProvider';
import { Loading } from '@/components/feedback/Loading';
export function Callback() {
    const { handleCallback } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        handleCallback()
            .then(() => navigate('/', { replace: true }))
            .catch(() => navigate('/login', { replace: true }));
    }, [handleCallback, navigate]);
    return _jsx(Loading, {});
}
