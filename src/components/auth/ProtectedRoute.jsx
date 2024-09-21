import { useAuth } from '../../contexts/AuthContext.jsx'
import {Navigate, Outlet} from "react-router-dom";


/**
 * Ensure only authenticated user access the protected routes otherwise
 * redirect to login page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth();
    // AuthProvider is still checking if user is authenticated
    if (isLoading) {
        return <div>Loading...</div>
    }
    // user is not authenticated, redirect to login page
    if (!isAuthenticated) {
        return <Navigate to={'/login'} replace/>
    }
    // user is authenticated, render children
    return <Outlet />  // render children
}

export default ProtectedRoute;