import React from 'react';
import './Container.css'


type ContainerProps = {
  // styles: React.CSSProperties,
  children: React.ReactNode,
}
export const Container = (props: ContainerProps) => {

  return (
    // <div className= {props.className}>
    <div className= "container">
        {props.children}
    </div>
  )
}
