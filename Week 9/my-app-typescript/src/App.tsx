import React from 'react';
import './App.css';
import {Greetings} from './components/Greetings'
import { Heading } from './components/Heading';
import { Welcome } from './components/Welcome';
import { Status } from './components/Status';
import { PersonList } from './components/PersonList';
import { Container } from './components/Container';

function App() {

  fetch("/tasks")
  .then(res => res.json())
  .then(text =>{
    console.log(text);
  });


  const nameList = [
    {
      first: "Sarah",
      last: "Jackson"
    },
    {
      first: "Mar",
      last: "Rodriguez"
    },
    {
      first: "Sana",
      last: "Shain"
    },
    {
      first: "Lisa",
      last: "amsk"
    }
  ];

  return (
    <Container styles = {{border: '3px solid black', margin: "2rem", textAlign: "center"}}>
      <Welcome>
        <Heading>Welcome!</Heading>
      </Welcome>
      <Heading>Welcome to Web Development with React!</Heading>
      <Greetings
          firstname= "Sarah"
          lastname= "Jackson"
          city="Barcelona"
          isLoggedIn={true}
          ></Greetings>
      <Status status="success"></Status>
      <PersonList names = {nameList}></PersonList>

    </Container>
  );
}

export default App;
