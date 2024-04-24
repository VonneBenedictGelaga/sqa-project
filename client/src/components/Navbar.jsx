import { Link, useNavigate } from "react-router-dom";
import {
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import api from "../utils/axiosInstance";
import Swal from "sweetalert2";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure, You want to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      });
      if (result.isConfirmed) {
        await api.delete("/logout");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="bg-cyan-400 py-2 px-4">
      <div className="container flex justify-between items-center relative mx-auto">
        <Link to="/">App Name</Link>
        <div className="flex gap-4">
          <div className="flex gap-1 hover:scale-110 transition-transform">
            {/* Profile Icon */}
            <UserCircleIcon className="w-6 h-6 " />
            Miguel
          </div>

          {/* Logout Icon */}
          <ArrowRightStartOnRectangleIcon
            className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer"
            onClick={handleLogout}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
