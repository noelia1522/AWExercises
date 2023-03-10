import React, { Component } from "react";

type ErrorBoundryProps = { children: any };
type ErrorBoundryState = { hasError: boolean };
export default class ErrorBoundry extends Component<
  ErrorBoundryProps,
  ErrorBoundryState
> {
  constructor(props: ErrorBoundryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <img
            alt="error"
            src="/error.png"
            style={{ width: "400px", height: "auto" }}
          ></img>
          <h1>Oops! Something went wrong!</h1>
        </>
      );
    }
    return this.props.children;
  }
}
