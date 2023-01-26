import React, { Component } from 'react'
import { LifecycleB } from './LifecycleB'

type LifecycleAProps = {

}
type LifecycleAState = {
  name: string,
}
class LifecycleA extends Component<LifecycleAProps, LifecycleAState> {

  constructor(props:LifecycleAProps) {
    super(props)

    this.state = {
       name: "Rana"
    }
    console.log("LifecyleA constructor");
  }
  componentDidMount(): void {
  console.log("LifecycleA componentDidMount");

  }
  shouldComponentUpdate(nextProps: Readonly<LifecycleAProps>, nextState: Readonly<LifecycleAState>, nextContext: any): boolean {
    console.log("lifecycleA shouldComponentUpdate");
    return true;

  }
  componentDidUpdate(prevProps: Readonly<LifecycleAProps>, prevState: Readonly<LifecycleAState>, snapshot?: any): void {
      console.log("lifecycleA componentDidUpdate");

  }
  changeState = ()=>{
    this.setState({
      name: "Helen!"
    })

  }

  render() {
    console.log("LifecycleA render");

    return (
      <>
      <div>LifecycleA</div>
      <LifecycleB></LifecycleB>
      <button onClick = {this.changeState}>Change State</button>
      </>
    )
  }
}

export default LifecycleA;
