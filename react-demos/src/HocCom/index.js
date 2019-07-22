import React, { Component } from 'react';
import { render } from 'react-dom';

import WithTimer from './Timer';

class App extends Component {
  render() {
    return (
      <div>
        this is app <br />
        {this.props.time.toString()}
      </div>
    )
  }
}

const AppCom = WithTimer(App);

export default () => render( <AppCom /> ,document.getElementById('root'))