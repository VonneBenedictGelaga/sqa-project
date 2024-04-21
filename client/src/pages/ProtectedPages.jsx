import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import api from "../utils/axiosInstance";

function ProtectedPages() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Send a request to the server to verify the user's authentication status
    const checkAuthentication = async () => {
      try {
        const response = await api.get("/verify");
        setLoggedIn(response.status === 200);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setLoggedIn(false);
      }
      setLoading(false);
    };
    checkAuthentication();
  }, []);

  if (loading) {
    // While loading, render a loading indicator or placeholder
    return <div>Loading...</div>;
  }

  // Once loading is complete, determine whether to render the protected pages or redirect to login
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedPages;
