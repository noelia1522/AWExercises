import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoadContext from "./context/LoadContext";
import ErrorBoundry from "./components/ErrorBoundry";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ErrorBoundry>
      <LoadContext>
        <App />
      </LoadContext>
    </ErrorBoundry>
  </>
);
