ieVersion
=========

## 描述

利用IE条件注释检测IE版本号，只对IE内核为5.5 ~ 9的浏览器有效。

## 使用

### 正常加载
```html
<script src="js/ieVersion/src/ieVersion.js"></script>
```

### 模块化加载
```javascript
seajs.use(['ieVersion'], function(ieVersion){
  console.log(ieVersion);
});

require(['ieVersion'], function(ieVersion){
  console.log(ieVersion);
});
```