import React from 'react';
import { ShoppingList } from './components/ShppingList';
import { Container } from './components/Container';
import './App.css';



function App() {

  const itemsList = [
    {
      item: "milk",
      count: 2
    },
     {
      item: "egg",

    },
     {
      item: "rice",
      count: 3
    }
  ]
  return (
    <Container className="container">
      <ShoppingList items = {itemsList}></ShoppingList>
    </Container>
  );
}

export default App;
