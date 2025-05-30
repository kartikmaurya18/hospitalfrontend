import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password,
      });

      // Store token/role/user
      const { role } = res.data;

      if (role === "DOCTOR") {
        navigate("/doctor/dashboard");
      } else if (role === "PATIENT") {
        navigate("/patient/dashboard");
      } else {
        alert("Access denied");
      }
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <input
        className="form-control my-2"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="form-control my-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
