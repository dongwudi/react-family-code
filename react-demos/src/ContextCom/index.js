import React, { Component } from 'react';
import { render } from 'react-dom';

const ThemeContext = React.createContext('dark');

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value="light">
        <ThemeButton></ThemeButton>
      </ThemeContext.Provider>
    )
  }
}

function ThemeButton(props) {
  return (
    <ThemeContext.Consumer>
      {theme => <button {...props} theme={theme}>button</button>}
    </ThemeContext.Consumer>
  )
}

export default () => render(<App />,document.getElementById('root'))