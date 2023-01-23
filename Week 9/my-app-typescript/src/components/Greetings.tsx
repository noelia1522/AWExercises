import React from 'react'
type GreetingsProps = {
  firstname: string,
  lastname: string,
  city: string,
  isLoggedIn?: boolean,
  messageCount?: number
}

export const Greetings = ({firstname, lastname, city, isLoggedIn, messageCount = 0}: GreetingsProps) => {
  return (
    // <div>Hello {props.firstname} {props.lastname} from {props.city}</div>
    <div> {isLoggedIn ? `Welcome ${firstname} ${lastname}! You have ${messageCount} unread message` : "Welcome Guest!"} </div>
  )
}
