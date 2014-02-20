ieVersion
=========

## 描述

利用IE条件注释检测IE版本号，只对IE内核为5.5 ~ 9的浏览器有效。

代码执行后会创建JS全局变量`ieVersion`，且在根元素上添加版本号相对应的class。

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

## 例子

```html
<html class="html">
  <head>
    <style>
      .ie6 body{background: black;}
      .ie7 body{background: yellow;}
      .ie8 body{background: blue;}
      .ie9 body{background: purple;}
    </style>
    <script src="js/ieVersion/src/ieVersion.js"></script>
  </head>
  <body>
    <script>
      if([5,6,7,8,9].indexOf(ieVersion) !== -1){
        alert('请更新您的浏览器到最新版');
      }
    </script>
  </body>
</html>
```

## License

The MIT License (MIT)

Copyright (c) 2014 寒飞紫

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.