import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../css/Login.css";
import { loginGuest } from "../services/api";

export const Login = () => {
  const [guestSessionId, setGuestSessionId] = useState("");
  const navigate = useNavigate();

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const loginUser = await loginGuest();
      setGuestSessionId(loginUser.guest_session_id);
      localStorage.setItem("guest_session_id", loginUser.guest_session_id);
      console.log("Guest User Logged");
      navigate("/");
    } catch (error) {
      console.log("Failed to Login", error);
    }
  };

  return (
    <div>
      <div className="main-container">
        <h2 className="heading">Welcome ! Login as being a Guest</h2>
        <form className="form-submit" onSubmit={onLogin}>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
