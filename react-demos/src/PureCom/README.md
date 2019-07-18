`在react开发中，经常会遇到组件重复渲染的问题，父组件一个state的变化，就会导致以该组件的所有子组件都重写render，尽管绝大多数子组件的props没有变化。`  
如何避免这些不必要的render：  
* `shouldComponentUpdate`  
```
shouldComponentUpdate(nextProps, nextState) {
  return nextState.someData !== this.state.someData
}
```
state里对象，复杂类型数据等等，以及react中的子组件，如何去一个一个对比呢？

## React.PureComponent
React.PureComponent 与 React.Component 几乎完全相同，但 React.PureComponent 通过props和state的浅对比来实现 shouldComponentUpate()。  
如果对象包含复杂的数据结构，它可能会因深层的数据不一致而产生错误的否定判断(表现为对象深层的数据已改变视图却没有更新）。
在组件未定义 shouldComponentUpdate() 的情况下，会判断该组件是否是 PureComponent，如果是的话，会对新旧 props、state 进行 shallowEqual 比较，一旦新旧不一致，会触发 update。
* 浅比较 只会比较到两个对象的 ownProperty 是否符合 [Object.js()](https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js#L39) 判等，不会递归地去深层比较。

注意：在JSX中，任何包含子元素(child elements)的组件，shallowEqual检查总会返回false:
`React.PureComponent 中的 shouldComponentUpdate() 将跳过所有子组件树的 prop 更新。也就是说纯组件忽略重新渲染时，不仅会影响它本身，而且会影响它的所有子元素，所以，使用PureComponent的最佳情况就是展示组件，它既没有子组件，也没有依赖应用的全局状态`

```
handleClick() {
  let {items} = this.state

  items.push('new-item')
  this.setState({ items })
}

render() {
  return (
    <div>
      <button onClick={this.handleClick} />
      <ItemList items={this.state.items} />
    </div>
  )
}
```
如果ItemList是纯组件(PureComponent),那么这时它是不会被渲染的，因为尽管this.state.items的值发生了改变，但是它仍然指向同一个对象的引用。但是，通过移除可变对象就很容易改变这种情况，使之能够正确被渲染。
```
handleClick() {
  this.setState(prevState => ({
    words: prevState.items.concat(['new-item'])
  }));
}
```
如果一个纯组件(PureComponent)的state或props引用了一个新对象，那么这个组件就会被重新渲染(re-render)。这暗示着，如果不想损失PureComponent的优点，那么我们应该避免以下的结构：
```
<Entity values={this.props.values || []}/>
```

如上面代码，新数组，即便是空数组，总是会迫使组件重新渲染。为了避免这个问题，你可以使用defaultProps，它包含了一个属性的初始化空状态。解决这个问题的另一种方法如下：
```
constructor(props) {
    super(props)
    this.update = this.update.bind(this)
}
update(e) {
    this.props.update(e.target.value)
}
render() {
    return <MyInput onChange={this.update} />
}
```

## [react-immutable-render-mixin](https://github.com/jurassix/react-immutable-render-mixin)

深层次数据比较可以直接使用react-immutable-render-mixin来帮助我们比對是否需要重新渲染元件。
HOC方式：
```
import React from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';

class Test extends React.Component {
  render() {
    return <div></div>;
  }
}

export default immutableRenderDecorator(Test);
```