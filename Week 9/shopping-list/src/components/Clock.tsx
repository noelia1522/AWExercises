import React, { Component } from 'react'

type ClockProps = {


}
type ClockState = {
  date: string,
  isMounted: boolean
}
export class Clock extends React.Component<ClockProps, ClockState> {

  private timerId: NodeJS.Timeout | undefined;
  constructor (props:ClockProps) {
    super(props)
    this.state = {
      date: new Date().toLocaleTimeString(),
      isMounted: true
    }

  }
  componentDidMount = () => {
    this.timerId =
     setInterval(()=>{
      console.log("time is updated!");
      this.tick();
     }, 1000)
    }

    componentWillUnmount= () => {
      console.log("clock is deleted");
      clearInterval(this.timerId);
  }
   tick = () =>{
     this.setState({ date: new Date().toLocaleTimeString() });
  }

  mountClock = () =>{
    this.setState({isMounted: true});
    this.componentDidMount();
  }

  unmountClock= () => {
    this.setState({isMounted: false})
    this.componentWillUnmount()

  }

  render () {

    return (
      <div>
        <h1>Hello, world!</h1>
        {(this.state.isMounted) ?
        <>
        <div>It is {this.state.date}</div>
        <button onClick={this.unmountClock}>Unmount Clock</button>

        </>
        : <button onClick={this.mountClock}>Mount Clock!</button>
        }
      </div>
    )
  }

}
