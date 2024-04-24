import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../utils/axiosInstance";

function Login() {
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
      setErrorMsg(error?.response?.data?.message ?? "something wen't wrong");
    }
  };

  return (
    <div className="h-screen bg-sky-200 grid place-items-center">
      <div className="bg-white w-4/5 mx-auto p-4 mb-40 shadow-lg rounded md:w-96">
        <form action="#" onSubmit={handleSubmit}>
          <h1 className="text-center text-xl">Login</h1>

          <div className="flex flex-col mb-4">
            <label htmlFor="username">Username</label>
            <input
              className="border-solid border-[1px] border-gray-400 rounded focus:outline-blue-400 p-2 text-sm font-mono"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength="3"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="password">Password</label>
            <input
              className="border-solid border-[1px] border-gray-400 rounded focus:outline-blue-400 p-2"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>
          <div className="error">{errorMsg}</div>

          <button
            className="bg-green-400 btn py-1 px-3 rounded-sm uppercase font-medium"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="mt-4 text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blue-500  hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
