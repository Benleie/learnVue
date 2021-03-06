
计时器 有状态组件实现DOM更新


Other than the length values that default to px, all other property values should be wrapped in quotes.

## 使用React
页面引入的文件 react,react-dom,babel.js
+ react.js文件是创建React元素和组件的核心文件，react-dom.js文件用来把React组件渲染为DOM，此文件依赖于react.js文件，需在其后被引入。
+ JSX("text/babel")最终被Babel生成为React元素
+ babel.min.js:24 You are using the inbrowser-Babel transformer. Be sure to precompile your scripts for production 

`ReactDOM.render(componentToRender, targetNode)`, where the first argument is the React element or component that you want to render.


## React基础
### JSX
+ Babel转译器会把JSX转换成一个名为React.createElement()的方法调用，生成React元素。
+ JSX中的代码需要用' '括起来。
+ Nested JSX must return a single element.  可以用一个括号parentheses括起来，不做严格要求
+ 注释 `{/**/}`
+ 使用关键词className
+  Any JSX element can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as `<br />` in order to be valid JSX that can be transpiled. 


### Component
   class component
+ stateless functional component：can receive data and render it, but does not manage or track changes to that data
+ A stateless functional component is any function you write which accepts props and returns JSX.
+ 大写字母开头capital;  
+ 返回JSX或者null
+ A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible.


+ 所有的React组件必须像纯函数那样使用它们的props。  props只读,state可写
+ .defaultProps 
+ .propTypes
+ class component自带props，所以需要this.props加以区分

+ 通过时钟的例子引入了组件的生命周期
+ componentDidMount  在此声明函数中请求api; attach any  synthetic event listeners

#### state
+ encapsulated state
+ this.setState()而不是直接修改state
+ this should not be used inside setState  使用匿名函数解决异步问题
+ `this.handleClick = this.handleClick.bind(this);`
+ Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
 


