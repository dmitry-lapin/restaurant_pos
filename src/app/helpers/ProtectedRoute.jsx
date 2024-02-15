// ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const ProtectedRoute = ({ children }) => {
    let { currentUser } = useAuth();
    const location = useLocation();

    if (!currentUser) {
        return <Navigate to="/" replace state={{ from: location }} />;
    }

    return children;
};