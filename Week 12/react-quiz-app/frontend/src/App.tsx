import React from "react";
import Quiz from "./Quiz";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthenticationProvider from "./context/AuthenticationProvider";
import RequiredAuth from "./RequiredAuth";
import { useLoader } from "./context/LoadContext";

export default function App() {
  const result = useLoader();
  const isLoading = result?.isLoading;
  return (
    <AuthenticationProvider>
      {isLoading ? (
        <div>Loading Data...</div>
      ) : (
        <Router>
          <Routes>
            <Route
              path="/quiz"
              element={
                <RequiredAuth>
                  <Quiz />
                </RequiredAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      )}
    </AuthenticationProvider>
  );
}
