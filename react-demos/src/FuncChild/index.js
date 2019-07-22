import React from 'react';
import { render } from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.children('this is name string')}
      </div>
    )
  }
}

export default () => render(
  <MyComponent>
    {
      name => (
        <div>
          {name}
        </div>
      )
    }
  </MyComponent>, document.getElementById('root'))