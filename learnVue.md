# Vue教程

## 基础

### 模板语法
+ 插值
  + 数据绑定   “Mustache”语法   v-once    v-html
+ HTML特性   v-bind
+ 缩写
  + v-bind 对应 :    
  + v-on 对应@
  + v-slot => #

### 计算属性和侦听器
+ data和computed下的变量,can both be acceesed by instance vm.
+ For computed and methods,`:function` can be ignored.
+ 计算属性默认只有getter,用来return 
+ 计算属性可以用getter返回一个对象，然后在其他地方去修改这个对象的属性

#### watch
+ { [key: string]: string | Function | Object | Array }
+ 用于对象时，deep  handler  immediate 

+ 每当触发重新渲染(updated)时，调用方法将总会再次执行函数。

### class与style绑定
+ 在将v-bind用于class和style时，Vue做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组
+ v-bind:class 是否存在取决于truthiness 真值
+ 使用对象时，类似'text-danger'这样的kebab-case的class要加引号 否则不能作为对象的属性(property)名
+ 绑定style时，CSS property名可以用驼峰式(camelCase)或短横线分隔(kebab-case)来命名

### 条件渲染
### 列表渲染
### 事件处理
+ 用在普通元素上时，只能监听原生DOM事件。
+ vm.$listeners 
  + 包含了父组件中的(不含.native修饰器的)v-on事件监听器

### 表单输入绑定

### 组件基础
+ 提高代码复用
+ 对象作为props,可以进行类型检测。
+ Component template should contain exactly one root element.
+ 父子组件:组件A在它的模板中使用了组件B。


## 深入了解组件
### 组件注册
### Prop
+ camelCase的prop名在DOM模板中需要写成kebab-case

### 自定义事件
### 插槽
### 动态组件 & 异步组件
### 处理边界情况

## 可复用性&组合
### 混入
+ mixins
  + `mixins: [Emitter, Migrating]`
  + 用来分发Vue组件中的可复用功能；
  + 一个混入对象可以包含任意组件选项
### 过滤器
+ `{{ message | show }}`，如果show在methods中而不是filters中定义，会显示`Failed to resolve filter:`.
+ 过滤器可以用在两个地方：双花括号插值和v-bind表达式  “管道”符号

## 了解响应式原理
+ [一篇关于$nextTick的文章](https://segmentfault.com/a/1190000012861862#comment-area)



+ 想实现一个窗口可以自由拖动的简单编辑器;走钟；
+ 实时显示时间 必须用定时器

当通过计算属性改变数据过于复杂时可以用watch来监听数据。
toggle是怎样切换的？每次通过this直接更改一次loginType的值？

声明式渲染：message为什么被console可以随时更新？(updated)


v-model实现表单输入和应用状态之间的双向绑定(updated)

data properties：实例接受参数，当参数指向的数据发生变化时，view将重新渲染。









#### 定义组件模板的方法： 
字符串，ES6模板字面量，script/x-template, JavaScript内联模板, render函数，JSX, .vue组件


## Vue Router
+ router-view 负责渲染对应路由中的组件，包括路由中的children也有其component有对应的router-view
+ 
























