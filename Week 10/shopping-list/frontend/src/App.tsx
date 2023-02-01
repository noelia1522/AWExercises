import React from "react";
import { ShoppingList } from "./pages/ShppingList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ShoppingListc from "./components/ShoppingListc";
import { Clock } from "./components/Clock";
import { Container } from "./components/Container";
import LifecycleA from "./components/LifeCycleA";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import "./App.css";

function App() {
  const itemsList = [
    {
      id: 0,
      title: "milk",
      count: 3,
    },
    {
      id: 1,
      title: "egg",
      count: 1,
    },
    {
      id: 2,
      title: "rice",
      count: 3,
    },
  ];

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Container>
          <Routes>
            <Route
              path="/"
              element={<ShoppingList items={itemsList} />}
            ></Route>
            <Route
              path="/shoppinglist"
              element={<ShoppingList items={itemsList} />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
