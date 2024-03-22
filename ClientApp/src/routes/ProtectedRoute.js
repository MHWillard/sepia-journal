import { Routes, Route, NavLink, Navigate, useNavigate, } from 'react-router-dom';
import { TokenContext } from '../contexts/TokenContext.js'
import { useContext } from 'react';

export default function ProtectedRoute({ token, children }) {

    if (!token) {
        return <Navigate to="/home" replace />;
    }

    return children;
};