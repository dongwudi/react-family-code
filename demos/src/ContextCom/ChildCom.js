import React, { Component } from 'react'
import ThemeContext from "./ThemeContext";

let arr = ['red_','pink_','green_'];

class ChildCom extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {
          ({theme, toggleTheme}) => (
            <div onClick={() => {toggleTheme(arr[Math.floor(Math.random() * 3)])}}>this.theme: {theme}</div>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}

export default ChildCom;