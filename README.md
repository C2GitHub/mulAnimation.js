# `mulAnimation.js`缓动动画框架(多属性，兼容opacity)

##`mulAnimation.js`缓动动画框架插件使用介绍

#### 点击[mulAnimation.js](https://c2github.github.io/mulAnimation.js/)进行测试

### 页面插件引用
```javascript
<script src="./js/mulAnimation.js"></script>
```

### html页面框架布局示例

> * 页面增加demo盒子，box1和box2

```javascript
<div id='box1'></div>
<div id='box2'></div>
```
### stlye样式示例

```javascript
 #box1,#box2{width: 100px;height: 100px;background: red;filter:alpha(opacity:80);opacity:0.8;}
 #box2{background: blue;}
```
### script使用示例

```javascript
    <script>
         var box1=document.getElementById('box1');
         var box2=document.getElementById('box2');

         box1.onmouseover=function(){
             mulAnimation(box1,{width:600,height:300,opacity:100});
         };
         box1.onmouseout=function(){
             mulAnimation(box1,{width:150,height:100,opacity:70});
         };
         box2.onmouseover=function(){
             mulAnimation(box2,{width:600,height:300,opacity:100});
         };
         box2.onmouseout=function(){
             mulAnimation(box2,{width:150,height:100,opacity:70});
         };
    </script>
```

