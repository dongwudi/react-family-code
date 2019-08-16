import React,{useContext} from 'react';
import ThemeContext from '../ContextCom/ThemeContext';

const ConChild = props => {
 let con =  useContext(ThemeContext);

 return (<div>{con.theme}</div>)
}

export default ConChild;