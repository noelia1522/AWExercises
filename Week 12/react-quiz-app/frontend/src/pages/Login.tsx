import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../context/AuthenticationProvider";
import { useLoader } from "../context/LoadContext";
import Button from "@mui/material/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authResult = useAuthentication();
  const navigate = useNavigate();
  const generalContext = useLoader();

  function submitHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    fetch("/users/login", requestOption)
      .then((response) => {
        // console.log(response);

        // if (response.status !== 200) {
        //   // throw new Error(response.statusText);
        // }
        return response.json();
      })
      .then((data) => {
        if (data.status === "Error") generalContext?.setError(data.message);
        else {
          authResult?.onLogin({ email: data.email, name: data.name });
          navigate("/quiz", { replace: true });
        }
      });
  }

  return (
    <>
      <form className="form-control">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button variant="contained" onClick={submitHandler}>
          Login
        </Button>
      </form>
    </>
  );
}
