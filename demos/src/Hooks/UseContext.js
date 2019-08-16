import React from 'react';
import ThemeContext from '../ContextCom/ThemeContext';
import ConChild from './ConChild';

const UseContextCom = props => {
  return (
    <ThemeContext.Provider value={{theme: 'pink__'}}>
      <ConChild />
    </ThemeContext.Provider>
  )
}

export default UseContextCom;