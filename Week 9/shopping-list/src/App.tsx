import React from 'react';
import { ShoppingList } from './components/ShppingList';
import ShoppingListc from './components/ShoppingListc';
import {Clock} from './components/Clock'
import { Container } from './components/Container';
import LifecycleA from './components/LifeCycleA'
import './App.css';

function App() {

  const itemsList = [
    {
      id:0,
      title: "milk",
      count: 3
    },
     {
      id:1,
      title: "egg",
      count: 1

    },
     {
      id:2,
      title: "rice",
      count: 3
    }
  ]

  return (
    // <Container className="styles.App">
    //   <Clock></Clock>
    //   <ShoppingListc items = {itemsList}></ShoppingListc>
    // </Container>
    // <LifecycleA></LifecycleA>
    // <Clock></Clock>
    <div className='App'>
      <Container >
    <ShoppingList items= {itemsList}></ShoppingList>
    </Container>
    </div>
  );
}

export default App;
