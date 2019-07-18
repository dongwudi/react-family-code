import React, { Component } from 'react';
import { render } from 'react-dom';

class OtherCom extends Component {
  render() {
    return (
      <div> this is OtherCom</div>
    )
  }

  componentDidMount() {
    console.log('OtherCom -- componentDidMount')
  }

  componentWillUnmount() {
    console.log('OtherCom -- componentWillUnmount')
  }
}

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'hello world',
      show: true
    }
    console.log('constructor')
  }

  changeOth = () => {
    this.setState(state => ({
      show: !state.show
    }))
  }

  render() {
    let { msg, show } = this.state;
    console.log('render')
    return (
      <div>
        {msg}
        <div onClick={this.changeOth} >show or hide</div>
        {
          show ? <OtherCom /> : null
        }
      </div>
    )
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

}

export default () => render(
  <Welcome />,
  document.getElementById('root')
)