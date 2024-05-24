import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../utils/axiosInstance";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", {
        username,
        password,
      });
      navigate("/");
    } catch (error) {
      setErrorMsg(error?.response?.data?.message ?? "something went wrong");
    }
  };

  return (
    <div className="h-screen grid place-items-center">
      <div className="bg-base-300 w-4/5 mx-auto p-4 mb-40 shadow-lg rounded md:w-96 gap-5 text-center">
        <form action="#" onSubmit={handleSubmit} autoComplete="off">
          <h1 className="text-center text-xl mb-5">LOGIN</h1>

          <div className="flex flex-col mb-4">
            <label className="input input-bordered flex items-center gap-2 border-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength="3"
              />
            </label>
          </div>

          <div className="flex flex-col mb-4">
            <label className="input input-bordered flex items-center gap-2 border-none focus:ring-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="6"
              />
            </label>
          </div>
          <div className="error">{errorMsg}</div>

          <button className="btn btn-primary mt-2 text-white" type="submit">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 opacity-70"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke-width="1.5" stroke-linecap="round"></path></g>
            </svg>
            Login
          </button>
        </form>
        <div className="mt-4 text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blue-500  hover:underline">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
