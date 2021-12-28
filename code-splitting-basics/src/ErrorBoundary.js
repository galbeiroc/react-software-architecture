import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    }
  }

  componentDidCatch(err, errInfo) {
    console.log({ err, errInfo });
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) return <h1>Ooops!, Something went wrong!</h1>;
    return this.props.children;
  }
}