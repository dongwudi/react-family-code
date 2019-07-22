import React, { Component } from 'react';

export default function WithTimer(WrapedCom) {
  return class Timer extends Component {
    state = {
      date: new Date()
    }

    componentDidMount() {
      this.timerId = setInterval(() => {
        this.tick()
      }, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.timerId)
    }

    tick() {
      this.setState({
        date: new Date()
      })
    }

    render() {
      return (
        <WrapedCom time={this.state.date} {...this.props} />
      )
    }
  }

}