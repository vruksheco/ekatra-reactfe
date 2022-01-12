import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/Auth.context";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const AllRoutes = () => {
  const loginData = useContext(AuthContext);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="/forgetpassword" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={loginData.loggedIn ? <Dashboard /> : <h1> Yooo! Login First</h1>}
          />
        </Routes>
      </Router>
    </>
  );
};

export default AllRoutes;
