```js
md文件渲染测试
```
```js
let key = [ 'name', 'age' ]
const pick = (obj, arr) => {
     // lodash有个pick方法
     return arr.reduce((iter, val) => (val in obj && (iter[val] = obj[val]), iter), {})
}
const data1 = pick(data, key)
```