## 基础

1. action  
   action 本质是 js 对象。其中必须有一个 type 字段表示执行的动作类型。
   Action 创建函数 就是生成 action 的方法。

   ```
   const ADD_TODO = 'ADD_TODO'
   {
     type: ADD_TODO,
     text: 'Build my first Redux app'
   }
   ```

   action 创建函数，用来返回 action 对象：

   ```
   function addTodo(text) {
     return {
       type: ADD_TODO,
       text
     }
   }
   ```

   action 需要 store.dispath() 进行触发。

2. reducer

   reducer 指定状态变化去响应 actions 并发送到 store。reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。

   ```
   (previousState, action) => newState
   ```

   注意点：

   1. 不要修改 state  
      Object.assign({},state, {new})
   2. 在 default 情况下返回旧的 state

   reducer 的拆分：

   ```
   const RootReducer =  combineReducers({
     todos,
     visibilityFilter
   });
   ```

3. store

   ```
   import { combineReducers, compose, createStore } from 'redux'
   import todos from './todos'
   import visibilityFilter from './visibilityFilter'

   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

   const RootReducer =  combineReducers({
     todos,
     visibilityFilter
   });

   const store = createStore(RootReducer, composeEnhancers());
   ```

- 提供 getState() 方法获取 state；
- 提供 dispatch(action) 方法更新 state；
- 通过 subscribe(listener) 注册监听器;

## bindActionCreators(actionCreators, dispatch)

可以自动把多个 action 创建函数 绑定到 dispatch() 方法

```
bindActionCreators({ select_project }, dispatch);
```

## 中间件 redux-thunk

```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
```

使用 redux-thunk 来解决 dispath 参数只能是对象，不能为函数的问题。

```
export const clientDays = () => {
	return dispatch => {
		axios
			.get(clientDaysOverallUrl, {
				params: {
					start: moment()
						.subtract(6, "days")
						.format("YYYY-MM-DD"),
					end: moment().format("YYYY-MM-DD")
				}
			})
			.then(res => {
				dispatch({
					type: c.CLIENT_DAYS,
					data: JSON.parse(res)
				});
			})
			.catch(err => console.log(err));
	};
};
```

## react-redux

1. connect()

    ```
    import { connect } from 'react-redux'

    const VisibleTodoList = connect(
      mapStateToProps,
      mapDispatchToProps
    )(TodoList)
    ```

2. mapStateToProps()
   建立一个从（外部的）state 对象到（UI 组件的）props 对象的映射关系
   ```
   const mapStateToProps = state => ({
      projectId: state.getIn(["header", "projectId"]),
      showFlag: state.getIn(["header", "showFlag"])
    });
   ```
3. mapDispatchToProps()  
   用来建立 UI 组件的参数到 store.dispatch 方法的映射,它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
4. `<Provider>`

    ```
    import { Provider } from 'react-redux'
    import { createStore } from 'redux'
    import todoApp from './reducers'
    import App from './components/App'

    let store = createStore(todoApp);

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
    ```
