import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
import { signIn } from "../data";

const SignIn = () => {
  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState(null);

  const loginInfo = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const loginData = await signIn(formdata);
    if (loginData.message !== "success") setErrorMsg(loginData.message);
    else {
      console.log(loginInfo);
      console.log(loginData);
      loginInfo.getLoggedIn(true, loginData.token);
      navigate("/", { replace: true });
    }
  };

  return (
    <React.Fragment>
      <div className="w-full h-screen bg-gray-100">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-xs">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <form>
                <h1 className="text-2xl font-bold text-center uppercase">Sign In</h1>
                <div className="my-8">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Email
                  </label>
                  <input
                    type={`email`}
                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                    value={formdata.email}
                    autoComplete="off"
                  />

                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Password
                  </label>
                  <input
                    type={`password`}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setFormdata({ ...formdata, password: e.target.value })}
                    value={formdata.password}
                    autoComplete="off"
                  />

                  <div className="flex items-center justify-between">
                    <div className="text-sm my-1 text-gray-600 hover:underline hover:underline-offset-2 cursor-pointer">
                      <Link to="/forgetpassword">Forget Password</Link>
                    </div>
                    <div className="text-sm my-1 text-gray-600 hover:underline hover:underline-offset-2 cursor-pointer">
                      <Link to="/signup">Sign Up</Link>
                    </div>
                  </div>
                </div>
                {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleFormSubmit}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
