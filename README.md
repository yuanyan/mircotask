# mircotask
> 为页面性能优化的任务调度器

## 原理

1. 利用MutationObserver总是异步执行的特点，会等待其他脚本执行完成后才执行
2. 当浏览器不支持MutationObserver时自动降级为普通的setTimeout模式

## 兼容

* 所有浏览器

## 使用

```html
<script src='mircotask.js'></script>
```

```js
mircotask(function(){
   // TODO
})
```

## 参考
* https://dev.opera.com/articles/mutation-observers-tutorial/
* https://github.com/Polymer/polymer/
