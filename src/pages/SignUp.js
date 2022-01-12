import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../data";

const SignUp = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const loginData = await signUp(formdata);
    if (loginData.message.toLowerCase() !== "success") setErrorMsg(loginData.message);
    else {
      console.log(loginData);
      navigate("/signin", { replace: true });
    }
  };

  return (
    <React.Fragment>
      <div className="w-full h-screen bg-gray-100">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-xs">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <form>
                <h1 className="text-2xl font-bold text-center uppercase">Sign Up</h1>
                <div className="my-10">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Name
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    placeholder="Name"
                    onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
                    value={formdata.name}
                    autoComplete="off"
                  />

                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Email
                  </label>
                  <input
                    type="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                    value={formdata.email}
                    autoComplete="off"
                  />

                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Contact
                  </label>
                  <input
                    type="contact"
                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="contact"
                    placeholder="Contact"
                    onChange={(e) => setFormdata({ ...formdata, contact: e.target.value })}
                    value={formdata.contact}
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
                    <div className="text-sm my-1 text-gray-600 hover:underline hover:underline-offset-2 cursor-pointer"></div>
                    <div className="text-sm my-1 text-gray-600 hover:underline hover:underline-offset-2 cursor-pointer">
                      <Link to="/signup">Sign In</Link>
                    </div>
                  </div>
                </div>

                {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleFormSubmit}
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

export default SignUp;
