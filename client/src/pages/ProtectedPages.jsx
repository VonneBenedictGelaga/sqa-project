import { Outlet, Navigate } from "react-router-dom";

function ProtectedPages() {
    const loggedIn = false;

    if (loggedIn) {
        return <Outlet />;  
    }
    return <Navigate to="/login" />;
}

export default ProtectedPages;
