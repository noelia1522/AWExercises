import React, { useEffect } from "react";
import Quiz from "./pages/Quiz";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import AuthenticationProvider from "./context/AuthenticationProvider";
import RequiredAuth from "./RequiredAuth";
import Alert from "@mui/material/Alert";
import { useLoader } from "./context/LoadContext";
// import AutoComplete from "./components/AutoComplete";
import Search from "./pages/Search";
import Posts from "./pages/BlogPosts";

export default function App() {
  // throw new Error();
  const generalContext = useLoader();
  const isLoading = generalContext?.isLoading;

  useEffect(() => {
    const errorTimeOut = setTimeout(() => {
      generalContext?.setError(null);
    }, 3000);
    const messageTimeOut = setTimeout(() => {
      generalContext?.setMessage(null);
    }, 3000);
    return () => {
      clearTimeout(errorTimeOut);
      clearTimeout(messageTimeOut);
    };
  }, [generalContext]);
  return (
    <div className="container">
      <AuthenticationProvider>
        {!generalContext?.error && isLoading ? (
          <div>Loading Data...</div>
        ) : (
          <Router>
            <Header />
            <Routes>
              <Route
                path="/quiz"
                element={
                  <RequiredAuth>
                    <Quiz />
                  </RequiredAuth>
                }
              />
              <Route path="/search" element={<Search />}></Route>
              <Route path="/posts" element={<Posts />}></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Router>
        )}
      </AuthenticationProvider>
      {generalContext?.error && (
        <Alert severity="error">{generalContext?.error}</Alert>
      )}
      {generalContext?.message && (
        <Alert severity="success">{generalContext?.message}</Alert>
      )}
    </div>
  );
}
