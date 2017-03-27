# saync-eachify
## 简介

  > 一个支持异步的迭代函数

  ![image](https://github.com/cjg125/async-eachify/raw/master/preview.gif)

```
## 安装
```html
<script src="https://unpkg.com/async-eachify"></script>
```
```sh
yarn add async-eachify
```
## API
### 语法
```js
eachify(Array, callback, options)
```
### *Array*
> 要迭代的数组
### callback(loop, next)
#### *loop*
```js
// ['a', 'b', 'c', 'd', 'e']
{
  index:0,
  len:4,
  value: 'a',
  first: true,
  last: false,
}
```
#### *next*
> 通过调用 next 迭代

### *options*
#### options.async
> 是否异步迭代 默认值 false
#### interval.async
> async 为 true 每次迭代的间隔时间

## 高级应用

[examples/middleware.js](https://github.com/cjg125/async-eachify/tree/master/examples/middleware.js)


