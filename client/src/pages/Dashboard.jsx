import { useEffect } from "react";
import api from "../utils/axiosInstance";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.delete("/logout");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h1>welcome to the dashboard!</h1>

      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Dashboard;
