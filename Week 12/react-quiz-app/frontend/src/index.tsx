import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoadContext from "./context/LoadContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <LoadContext>
      <App />
    </LoadContext>
  </>
);
