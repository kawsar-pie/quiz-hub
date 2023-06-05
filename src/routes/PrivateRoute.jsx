import React, { useContext } from 'react';
import { AuthContext } from '../components/UserContext/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        console.log("Yes Loading...");
        return <span className="loading loading-bars loading-lg text-primary"></span>

    }
    else if (user && user.uid) {
        return children;
    }
    else return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;