import React, { Component } from 'react'

type ButtonProps = {
  color?: string,
  text?: string,
  //1. no parameter, no return value
  // handleClick: () => void
  //2. params: event
  // handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  //3. params: event, id
  handleClick: (event:React.MouseEvent, id: number) => void

}

export default function Button({color, text, handleClick}: ButtonProps) {
  return (
    <button onClick = {(event)=> handleClick(event, 1)}>
      {text}
    </button>
  )
}
