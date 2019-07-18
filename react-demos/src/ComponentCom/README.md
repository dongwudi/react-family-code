## 组件的生命周期

![生命周期](http://ww4.sinaimg.cn/large/006tNc79ly1g54cdpllysj31d90u0tbm.jpg)

### 挂载

当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下:
* constructor()
* [static getDerivedStateFromProps()](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)  
`请注意，不管原因是什么，都会在每次渲染前触发此方法。这与 UNSAFE_componentWillReceiveProps 形成对比，后者仅在父组件重新渲染时触发，而不是在内部调用 setState 时`
* render()
* componentDidMount()

### 更新

当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

* static getDerivedStateFromProps()
* [shouldComponentUpdate(nextProps, nextState)](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate)  
`返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法。性能优化的方式之一。`
* render()
* [getSnapshotBeforeUpdate()](https://zh-hans.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)  
`getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。应返回 snapshot 的值（或 null)`
* componentDidUpdate(prevProps, prevState, snapshot)  
`componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语件里`

## 其他api
* setState()
* forceUpdate()  
`默认情况下，当组件的 state 或 props 发生变化时，组件将重新渲染。如果 render() 方法依赖于其他数据，则可以调用 forceUpdate() 强制让组件重新渲染`

## class属性
* defaultProps
* displayName  
`defaultProps 可以为 Class 组件添加默认 props。这一般用于 props 未赋值，但又不能为 null 的情况`
```
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
};
```

## 实例属性
* props  
`组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。this.props.children 是一个特殊的 prop，通常由 JSX 表达式中的子组件组成，而非组件本身定义`
* state