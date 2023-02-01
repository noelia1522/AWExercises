import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/shoppinglist");
  }
  return (
    <div>
      <button onClick={handleClick}>Go back to home page</button>
    </div>
  );
}
