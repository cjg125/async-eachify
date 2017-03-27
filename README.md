# saync-eachify
> 一个支持异步的forEach函数

```js
  eachify(['a', 'b', 'c', 'd', 'e'], function (loop, next) {
    console.log(loop)
    next() // 通过next 执行下一个
  }, {
    async: true,
    interval: 100
  })
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

