import React, { Component } from 'react'


type LifecycleBProps = {

}
type LifecycleBState = {
  name: string,
}
export class LifecycleB extends Component<LifecycleBProps, LifecycleBState> {

  constructor(props:LifecycleBProps) {
    super(props)

    this.state = {
       name: "Rana"
    }
    console.log("LifecyleB constructor");
  }
  componentDidMount(): void {

  console.log("LifecycleB componentDidMount");

  }
  shouldComponentUpdate(nextProps: Readonly<LifecycleBProps>, nextState: Readonly<LifecycleBState>, nextContext: any): boolean {
    console.log("lifecycleB shouldComponentUpdate");
    return true;

  }
  componentDidUpdate(prevProps: Readonly<LifecycleBProps>, prevState: Readonly<LifecycleBState>, snapshot?: any): void {
      console.log("lifecycleB componentDidUpdate");
  }
  render() {
    console.log("LifecycleB render");

    return (
      <div>LifecycleB</div>
    )
  }
}
