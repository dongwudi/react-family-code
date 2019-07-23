## redux
![](http://ww2.sinaimg.cn/large/006tNc79ly1g5a4mxmlfej31a40matb0.jpg)

### action

```
// ADD_TODO: 常量字符串
{
  type: ADD_TODO,
  text: 'my first redux app'
}
```

### reducer

```
function todoApp(state = initialState, action) {
  swith(action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })

    default:
      return state
  }
}
```

![](http://ww4.sinaimg.cn/large/006tNc79ly1g5a4vk380pj30xw0qg3zt.jpg)

点击button形成action，action会被dispatch到reducer，经过reducer处理会返回一个新的state,view层展示最新state。

### combineReducers
可以更好的分离各个功能的reducer
```
function todos(state = initialState, action) {
  swith(action.type) {
    case ADD_TODO:
      return state.concat([action.text])
    default:
      return state
  }
}
--------------------------------------------------
import { combineReducers } from 'redux';
import todos from './todos';
...
export default combineReducers({
  todos,
  ...
})
```

### bindActionCreators

```
function addTodoWithDispath(text) {
  const action = {
    type: ADD_TODO,
    text
  }
  dispatch(action)
}
--------------------------------------------------
dispatch(addTodo(text))

--------------------------------------------------
const boundAddTodo = text => dispatch(addTodo(text))

// bindActionCreators

function addTodo() {
  return {
    type: ADD_TODO
  }
}

addTodo = bindActionCreators(addTodo, store.dispatch)

addTodo(); // === dispatch(addTodo())
```

## react-redux

```
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MyCom extends Component {

}

function mapStateToProps(state) {
  return {
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...actions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCom)
```

## 异步action
