import { Link, useNavigate } from "react-router-dom";

function Register() {
  return (
    <div className="h-screen bg-sky-200 grid place-items-center ">
      <div className="bg-white w-4/5 mx-auto p-4 mb-40 shadow-lg rounded md:w-96">
        <form action="#">
          <h1 className="text-center text-xl">Register</h1>

          <div className="flex flex-col mb-4">
            <label htmlFor="username">Username</label>
            <input
              className="border-solid border-[1px] border-gray-400 rounded focus:outline-blue-400 p-1"
              type="text"
              id="username"
              required
            />
            {/* <p className="error">{errors.name?.message}</p> */}
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="password">Password</label>
            <input
              className="border-solid border-[1px] border-gray-400 rounded focus:outline-blue-400 p-1"
              type="password"
              id="password"
              required
            />
            {/* <p className="error">{errors.password?.message}</p> */}
          </div>

          {/* <div className="error">{errorMsg}</div> */}

          <button className="bg-green-400 btn py-1 px-3 rounded-sm" type="submit">
            Submit
          </button>
          {/* loading icon */}
          {/* {isLoading && (
            <ArrowPathIcon className="w-5 h-5 inline-block ml-1 animate-spin" />
          )} */}
        </form>
        <div className="mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500  hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
