import { Routes, Route, NavLink, Navigate, useNavigate, } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const { token } = "token";

    if (!token) {
        return <Navigate to="/home" replace />;
    }

    return children;
};