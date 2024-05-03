import { useEffect } from "react";
import api from "../utils/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Tasklist from "../components/Tasklist";

function DashboardPage() {
  


  return (
    <>
      <Navbar />

      <main className="bg-base-300 max-w-lg mx-auto shadow-lg rounded-lg mt-16 select-none">
        <form className="w-full px-4 pt-2 flex flex-col items-center sm:flex-row sm:items-end sm:justify-center sm:gap-4">
          
          <label className="form-control w-full sm:w-32">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              type="text"
              placeholder="title"
              className="input input-bordered input-sm"
            />
          </label>

          <label className="form-control w-full sm:w-44">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <input
              type="text"
              placeholder="description"
              className="input input-bordered input-sm"
            />
          </label>

          <button className="btn btn-accent btn-sm w-full mt-4 sm:w-32" type="button">
            Add
          </button>
        </form>

        <Tasklist />
      </main>
    </>
  );
}

export default DashboardPage;
