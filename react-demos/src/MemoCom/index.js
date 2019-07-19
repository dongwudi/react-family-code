import React from 'react';
import { render } from 'react-dom';

// const MySnowyComponent = React.memo(function MyComponent(props) {
//   return (
//     <div>this is {props.name}</div>
//   )
// });

const MySnowyComponent = React.memo(props =>
  <div>this is {props.name}</div>
);

export default () => render(
  <MySnowyComponent name="hello" />,
  document.getElementById('root')
)