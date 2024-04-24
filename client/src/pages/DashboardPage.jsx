import { useEffect } from "react";
import api from "../utils/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function DashboardPage() {
  return (
    <>
      <Navbar />

      <main>
        <h1>welcome to the dashboard!</h1>
      </main>
    </>
  );
}

export default DashboardPage;
