import React, { useState } from "react";

const UseStateCom = () => {
  // 声明一个叫 "count" 的 state 变量
  // 可以使用多次，声明多个
  const [count, setCount] = useState(0);
  const [age, segAge] = useState(23);
  const [name,setName] = useState('xiaoming')

  function changeNameAge() {
    segAge(22);
    setName('xiaoli');
  } 

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>

      <hr/>
      <p>this is {name} ,age: {age}</p>
      <button onClick={changeNameAge}>change people</button>
		</div>
	);
};

export default UseStateCom;
