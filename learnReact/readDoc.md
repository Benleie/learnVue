
计时器 有状态组件实现DOM更新


Other than the length values that default to px, all other property values should be wrapped in quotes.

## 使用React
页面引入的文件 react,react-dom,babel.js("text/babel")
`ReactDOM.render(componentToRender, targetNode)`, where the first argument is the React element or component that you want to render.


## React基础
### JSX
Babel转译器会把JSX转换成一个名为React.createElement()的方法调用，生成React元素。
JSX中的代码需要用' '括起来。
Nested JSX must return a single element.  可以用一个括号parentheses括起来，不做严格要求
注释 `{/**/}`
使用关键词className

### Component
stateless functional component   class component
+ can receive data and render it, but does not manage or track changes to that data
+ 大写字母开头capital;  
+ 返回JSX或者null
+ A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible.

MyComponent.defaultProps
所有的React组件必须像纯函数那样使用它们的props。  只读
class component自带props，所以需要this.props加以区分

### state
encapsulated state
`this.handleClick = this.handleClick.bind(this);`
componentDidMount  在此声明函数中请求api;attach any  synthetic event listeners 