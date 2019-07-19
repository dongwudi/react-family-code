PureComponent 要依靠 class 才能使用。而 React.memo() 可以和 functional component 一起使用。
它会检查接下来的渲染是否与前一次的渲染相同，如果两者是一样的，那么就会保留上一次的渲染结果。  
由于 React.memo() 是一个高阶组件，你可以使用它来包裹一个已有的 functional component：

```
const RocketComponent = props => <div>my rocket component. {props.fuel}!</div>;

// create a version that only renders on prop changes
const MemoizedRocketComponent = React.memo(RocketComponent);
```