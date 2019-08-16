import React, { useReducer } from "react";

// useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法
// 你可以选择惰性地创建初始 state。为此，需要将 init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 init(initialArg)

// const initialState = { count: 0 };

function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
		case "reset":
			return init(action.payload);
		default:
			throw new Error();
	}
}

function Counter({initialCount}) {
	// const [state, dispatch] = useReducer(reducer, initialState);
	const [state, dispatch] = useReducer(reducer, initialCount, init);
	return (
		<>
			Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
			<button onClick={() => dispatch({ type: "increment" })}>+</button>
			<button onClick={() => dispatch({ type: "decrement" })}>-</button>
		</>
	);
}

export default Counter;
