# Typora快捷键

cmd  1-6  标题

cmd+opt+t   表格

|      |      |      |
| ---- | ---- | ---- |
|      |      |      |

 代码块  esc下方按键 ~~~ 

~~~html
<html>
</html>
~~~

单行代码强调 esc下方按键 ··

`hello world`

斜体 一个*  内容一个 *  

粗体 两个*  内容两个 *

无序列表 -加空格

- 无序

有序列表：数字小数点空格

1. 哈哈哈
2. 图片 

````+语言`可生成代码块

`cmd+/`可以查看各种格式的快捷键

尽量不要使用图片，因为没有上传服务器



# git常用命令

`git init `

`git add`

`git commit -m "变更内容"`    本地仓提交

`git remote add origin https://github.com/AllSun/note.git`   与远程仓库进行关联

`git remote remove origin`

`git push --set -upstream origin master  `    关联上游分支

`git config pull rebase true`  变基拉取，先将远程仓应用于本地分支，然后再将本地仓提交进行合并

`git pull`

`git push`



# vscode快捷键

`cmd+/`  注释

`cmd + shift + f` 格式化

`cmd + alt + 方向键`  复制一行

`ul.classname>li.classname*n` 快速生成n个无序列表

`.classname` 快速生成div类名为classname

`cmd + shift +k`删除当前行

`ul.li*5>a[href=#]>i.iconfont+{标签内容}`

# 常用html标签

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- 移动设备上以设备宽度显示 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- seo优化   -->
    <!-- 指定网站的关键词 -->
    <meta name="keywords" content="">
    <!-- 指定网站的描述信息 -->
    <meta name="description" content="">
    
    <title>常见标签及解释</title>
</head>
<body>
    <strong>加粗</strong>
    <!-- 双标签和单标签 -->
    <!-- 单标签 -->
    <!-- src中分为相对路径和绝对路径，绝对路径就是写死地址 -->
    <img src="" alt="图片挂了，显示的信息">
    <em>斜体</em>
    <i>斜体</i>
    <b>加粗</b>
    5<sup>2<sup>=25 <br>
    H<sub>2</sub>O
    <ins>下划线</ins>
    <del>删除线</del>
    <p>这个标签会换行，当文本内容塞不下会换行</p>
    <hr>这是一条横线分割
    <br>
    <blockquote>长引用</blockquote>
    <q>短引用</q>
    <ul>
        <li></li>
    </ul>
    <ol>
        <li></li>
    </ol>
    <dl>
        <dt>第一阶段</dt>
        <dd>css</dd>
        <dd>html</dd>
        <dt>第二阶段</dt>
        <dd>javascript</dd>
        <dd>vue</dd>
    </dl>
    <div>
        回车不换行，换行当做一个空格处理
        连续多个空格，当做一个空格处理
    </div>
    <div>
        主要用于布局，划分区域
    </div>
    <span>用于解决局部部件、文本</span>
    <h1>h1-h6</h1>
    <!-- href:
    1、可以是网址
    2、可以是工程中的其他文件
    3、可以是页面中的元素，如跳转到类名为footer的标签
    target:
    _self 当前窗口打开
    _blank 新窗口打开 -->
    <a href="wwww.baidu.com" target="_blank">超链接</a>
    <a href=""><img src="" alt=""></a>
    
    <!-- 转移字符 -->
    &ltabc&gt
    &copy

    <!-- 表格  -->
    <table>
        <caption>板块</caption>
        <thead>
            <th>排名</th>
            <th>股票名</th>
            <th>涨幅</th>
        </thead>
        <tbody>
            <tr>
                <!-- td 当中行合并 rowspan=2 列合并colspan -->
                <td>1</td>
                <td>龙头股份</td>
                <td>10%</td>
            </tr>
        </tbody>
        <tfoot></tfoot>
    </table>
</body>
</html>
~~~



# css知识点

**继承性**：文字属性和文本属性，父元素设置后子元素会继承，`<a>`标签不会继承父元素字体颜色

`text-align`   `font-size`   `color`  `line-height`

**css样式冲突**，根据权重进行判断，复杂选择器则根据权重相加比较总和，权重相同，后者生效

`行内样式（1000）>id选择器（100）>类选择器（10）>标签选择器（1）>通配符选择器（0）`

**标签的表现形式**

1. 块元素
   - 独占一行
   - 可设置宽高
   - 未设置宽度时，宽度默认父元素100%
2. 行内元素`span label a`
   - 可同行展示
   - 不可设置宽高
   - 宽度由内容撑开
   - 上下padding、上下margin不起作用
3. 行内块元素`input img button`
   - 同行展示
   - 可设置宽高
   - 宽度由内容撑开

```html
<style>
  a{
    /*转换为块元素；  inline/inline-block*/
    display:block;
    width:400px;
		height:400px;
    color:red;
    background-color:yellowgreen;
    text-align:center;
    line-height:400px;
  }
  
  *{
    /*清楚标签默认样式*/
    padding:0;
    margin:0;
  }
  
  ul{
    /*清楚项目符号*/
    list-style:none;
    list-style-type:none;
  }
  
  /*转换为行内块的问题
  	1，行内块之间的空隙，是由结构里的换行符导致
  	解决方案：
   （1）父元素设置
  		font-size:0;
  	(2)去掉换行符，div全部放一行，或者使用注释进行占位
   （3）设置负边距
  		margin:-40px;
  */
  
</style>
```

## **图文对齐**

主要解决行内块与文字对齐方式，也可以用数值

`vertical-align:middle/bottom/baseline；`

**行内块元素、行内元素水平居中**，针对父元素设置`text-align:center;`

**块元素居中**，直接对块元素设置`margin:0 auto;`

## 常见css属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>css常见样式</title>
    <link rel="stylesheet" href="h.css">
    <style>
        /* 类选择器 类名设置可重复，可同时作用，类名最好有实际意义，最常用*/
        .desc {
            width: 200px;
            height: 300px;
            background-color: yellow;
            /* 字体颜色 */
            color: pink;
            font-size: 20px;
            text-align: center;
            /* 行高和高度一致时，文字可以居中 */
            line-height: 300px;

        }
        .detail {
            background-color: antiquewhite;
        }

        /* 伪类选择器 */
        .detail:hover{
            /* 父元素的50% */
            width: 50%;
            /* 4倍字体大小，em当前字体大小 */
            height: 4em;
            background-color: rgb(75, 29, 29);
        }

        /* 标签选择器  作用域太广*/
        div {
            width: 100px;
            height: 100px;
            background-color: brown;
        }
        /* id选择器  缺点id唯一，不符合html文档规范，不常用*/
        #title {
            width: 100px;
            height: 100px;
            background-color: blue;
        }

        /* 字体属性 ，了解 无衬线体、衬线体*/
        .font {
            width:200px;
            height: 200px;
            font-size: 40px;
            /* 粗细 */
            font-weight: bolder;
            font-style: italic;
            /* 可指定多个，没有的话向下溯源 */
            font-family: 'Courier New', Courier, monospace;
            /* font:40px italic bolder "楷体"； */
          	/*文字不换行*/
          	white-space:nowrap;
          	/*指定标签里面的内容超出样式的宽度和高度之后如何处理*/
          	overflow:auto/scroll/hidden;
        }

        .text {
            width: 800px;
            height: 200px;
            /* line-height: 200px; */
            font-size: 20px;
            text-align: center;
            /* 首行缩进 */
            text-indent: 2em;
            /* 下划线 */
            text-decoration: underline;
            /* 字符间间距 */
            letter-spacing: 1px;
            /* 单词间间距 */
            word-spacing: 1px;
          	/*文字超出部分隐藏*/
          	overflow:hidden;
          	/*溢出部分显示省略号*/
          	text-overflow:ellipsis;
        }

        /* 后代选择器 ,有空格    缩小范围*/
        .nav li{
            width: 100px;
            height: 100px;
            background-color: aqua;
        }

        /* 并集选择器 ,逗号隔开*/
        .out,
        p,.inner{
            background-color: yellowgreen;
        }

        /* 交集选择器 */
        .inner.second{
            background-color: pink;
        }

        /* 通配符选择器 ,一般用于初始化界面*/
        * {
            background-color: #f5f5f5;
        }
    </style>
</head>
<body>
    <div class="desc">描述信息</div>
    <div class="desc">描述信息</div>
    <div class="desc detail">描述信息</div>
    <div>我是测试组</div>
    <div id="title">id选择器</div>
    <hr>
    <div class="font">接天莲叶无穷碧，映日荷花别样红</div>
    <hr>
    <div class="text">每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英每天花半小时学习，作一个行业精英</div>
    <hr>
    <ul class="nav">
        <li class="nav-item">首页</li>
        <li class="nav-item">关于我们</li>
        <li class="nav-item">加入我们</li>
    </ul>
    <hr>
    <div class="out">
        <p>每天学一点</p>
        <div class="inner second">真的就学一点</div>
    </div>

</body>
</html>
```

## 盒子模型

margin 外边距  设置大小，垂直方向会重叠取最大值，水平方向相加

border边框       设置大小、属性，一定要有厚度、样式、颜色

padding 内边距   设置大小

content内容

赋值： 上右下左  、  上/左右/下  、上下/左右  、  全部

盒子大小= content+padding+border

行内元素上下padding、上下margin不起作用

**背景色会填充至padding区域,也会蔓延至边框，不过一般会被边框样式覆盖**

```html
<style>
  div{
    padding-top:20px;
    padding-right:20px;
    border:5px solid dashed pink;
  }
  
</style>
```

**margin嵌套崩塌**：子元素设置的margin-top作用到了父元素身上

1. 给父元素设置`overflow:hidden;`
2. 父元素添加一个极小的padding-top;

**脑子里要有底线、基线、中线、顶线轮廓图**

利用border属性`border-bottom /border-left/right`画出三角形

利用`border-radius：50px/50%;`画圆形



**怪异盒子模型（IE盒子模型）**

 box-sizing

盒子大小不会受padding和border影响，只会挤压content

## 背景属性

`background-color`

`background-image:url();`

平铺`background-repeat：no-repeat;`

`bcckground-position:4px 4px;`背景图片位置距离盒子左边和顶部的像素

`background-attachment:scroll/fixed`背景图片随着盒子滚动/背景图片固定

`background-size:10px 10px/10px auto/cover/contain`背景图片大小宽高，cover填满盒子图片不完整，contain图片完整，但盒子没填充满

**雪碧图**：把所有图片都放一张图片上，减少网络请求次数，使用`background-position`来确认

**透明属性**

`opacity:0-1;`  作用所有元素及内容

`rgba(255,12,11,0.5)` 仅作用颜色

## 文档流

**从左到右，从上往下**

`display :none`从结构中消失，不占据位置，下方元素上移

`display:block`显示

`opactiy:0`消失，依旧占据位置，可触发事件  （常用）

`visibility:hidden/visible`消失，但占据位置，可触发事件

## 浮动

1. 浮动：脱离文档流，实现页面布局，专门用于块元素同行展示的问题，空间不够换行，左浮动不会改变布局顺序，右浮动会

 `float:left/right/none`

2. **元素浮动后，会脱离文档流，不占据位置，下方元素上移，**文字不会和浮动元素产生交集，如产生交集，会环绕在浮动元素周围

3. 浮动元素会脱离文档流，因此无法撑起父元素的高度，当父元素没有指定高度时，会塌陷，对布局造成影响
   - 严格指定父元素高度
   - 给父元素添加`overflow:hidden;`,经常使用
   - 在容器所有浮动元素的末尾，追加一个空的元素块，对其设置`clear:both;`

4. 块元素浮动之后，不设置宽度，由内容撑开，一般需指定宽度；行内元素浮动之后，可设置宽高，上下margin也生效
5. 浮动元素同行展示，摆不下时自动换行
6. 使用浮动时，在一个容器里，尽量都使用浮动

## 定位

定位主要用于解决文档流、浮动无法解决的页面布局问题

**正常使用顺序：文档流 > 浮动 > 定位**

定位：把元素定到指定位置

`position:relative/absolute/fixed`三者区别在于参照物不同

`left/right/top/bottom:10px;`释义：元素的左边距离参照物的左边距离10个像素

1. `relative`参照物为自身原本的位置，没有脱离文档流，占据原来位置，一般辅助定位，不常用，一般使用绝对定位。开启定位之后，元素层级得到提升，高于原文档流元素，如果方位未进行设置，则元素在原位
2. `fixed`参照物为浏览器视口，脱离文档流，层级提高，高于文档流元素，网页滚动，不会随着滚动，一般应用”联系我们“
3. `absolute`要先确定参照物，脱离文档流，层级提高，高于文档流元素
   - 参照物为距离自己最近的具备**定位属性的祖先元素**或**html文档**，从自身出发，一层层向上溯源，找不到，以html文档为参照
   - 一般以父元素作为参照物，如果父元素没有定位属性，则添加`relative`,因为`relative`不会影响任何东西

4. `sticky`滚动到一定位置时，不会再随着网页滚动
5. `relative`和`fixed`**块元素**开启之后，不写宽度时，宽度由内容撑开；**行内元素**开启后，可设置宽高

`z-index:999`层级属性，如果父元素也有设置，则无法突破父元素的限制，如果没有，则和外界元素比较；定位元素可以使用此元素，数值大的在最上面展示

# H5部分

1. 语义化标签：根据网页布局建立不同的标签，利于SEO优化

   例如：`<header>`、  `<nav>`、`<footer>`

2. 多媒体标签

   ```html
   <body>
   <audio src=“” autoplay controls muted></audio>
   /*多浏览器支持*/
   <audio>
     <source src=""/>
   </audio>
   </body>
   ```

3. input标签type类型添加

   `number 、email、number、color、date、week`

   属性

   `required(必填)/novalidate(关闭表单验证)`

4. 新增元素

   `progress（进度条）/datalist`

5. 引入外部字体

   ```html
   <style>
   @font-face{
   	font-family:"bf";
   	src: url(ziti.ttf);
   }
   p {
   	font-family:"bf";  
   }
   </style>
   ```

6. 字体图标技术，矢量图保证图标清晰

   1. 引入外部字体图标文件
   2. 使用`<i>/<span>`等标签通过类名引入字体图标文件，引用图标
   3. 通过类名选择器选择，通过`font-size、color`等属性设置图标大小

# CSS3部分

1. 取消了私有化前缀，如属性设置不用在强调`-webkit`
2. 新增选择器

- 相邻兄弟选择器： `.classname1+.classname2{}`跟在class1后面的所有class2会被设置样式

- 子元素选择器：`.box>div.inner{}`类名为box底下div类名为inner的样式设置

- 属性选择器：`p[title]{}/p[class^='a'](以a开头)`直接定位

- 伪类选择器

  **超链接伪类**：`link`未被访问、`visited`访问过的状态 、`active`点击瞬间的状态、`hover`悬浮的状态

  `a:active {}`

  **表单伪类**：`focus`、`checked`

  **目标伪类**：跳转到改页面的样式，`target`

  **结构伪类**：`item:nth-child(3/3n)/last-child/first-child`

  **伪元素**：是**行内元素**，给选中的元素添加样式，如第一个字幕颜色；元素中的文本被选中后样式，`after/before/selection`

- 文字阴影

  `text-shadow:水平偏移、垂直偏移、模糊度、阴影颜色；`

- 盒子阴影

  `box-shadow:x y 模糊半径 扩展半径 颜色 `

- 元素过渡

  `transition:0.4s;`
  
  `transform:rotate(45deg);`控制元素的移动、旋转、缩放、倾斜
  
  `transform:translate(-50%,50%);`垂直水平居中
  
- **动画效果多看一些demo学习**，要用的时候再看

# 工程demo笔记

工程结构

----css

reset.css

iconfont.css/wtff

工程主项.css

---image

index.html

left:50%用于水平居中，然后元素自身再左移动自身一般的宽度，实现居中

三角形制作，让content宽高为0，边框要有像素，取消一边的像素，然后设置为对称两边的为透明transparent

水平居中，移动端用弹性盒子模型，pc端可是用margin-top平分上下空间    

outline:none

.search~.search- box  波浪号选择器  兄弟选择器，选择后面所有叫search-box的元素

wrap作为公共样式，可作为全局定义，后续子界面可直接继承

浮动影响，父元素高度未知，子元素溢出，使用伪对象 ::after 清除影响

` .play{}`绘制圆角技巧

`.clear::after{content: "";display: block;clear: both;}`  清除浮动影响，作为公共样式

`position:relative;top:10px;`自己小范围移动

`cursor:pointer;`鼠标变小手

# JavaScript

## 作用域

一定范围内可以访问到的变量

- 全局作用域  全局变量
- 局部作用域   局部变量   函数作用域、块作用域

函数执行完后，变量被清空

`let`/`const`申明的变量、常量都会产生块作用域，`var`则不会

推荐使用`let`/`const`

函数中未使用任何关键字申明的变量为全局变量

## 垃圾回收机制

全局变量，不回收，关闭页面才回收

局部变量，自动回收

- 引用计数法  ，对象相互引用，导致内存泄漏
- 标记清除法（主流），无法从根部到达的对象被标记回收

## 闭包

闭包是一个特殊函数，可以访问函数作用域中的变量，从代码形式上看闭包是**一个作为返回值的函数**

- 闭包 = 内层函数 + 外层函数的变量
- 封闭数据，实现数据私有，外部也可以访问函数内部变量
- 闭包很有用，允许它将函数与其操作的某些数据（环境）关联起来

问题：

- 可能造成内存泄漏，对闭包的变量引用一直存在

```javascript
function outer(){
	let count = 0;
  function fn(){
    count++;
    console.log(`函数被调用{count}次`)
  }
  return fn;
}
let re = outer();
re();
re();

```

## 箭头函数

```javascript 
let fn = (username) => ({username:username}) //返回一个对象时，要注意括弧
```

自己不会创建`this`,只会沿用上一层

箭头函数中的 `this` 始终指向它被定义时的外部作用域中的 `this`

词法作用域是指作用域是在函数定义时确定的，而不是在函数调用时确定的。箭头函数使用词法作用域来解析 `this`，而传统函数使用动态作用域解析 `this`

## 匿名函数

```javascript
let fn = funciton(){
  //dosomething
}
fn()
```

### 立即执行函数

```javascript
(function(){dosomething}()); //注意分号结束
(function(){dosomething})();
```

## 环境对象

函数内部特殊的变量`this`，代表这当前函数运行时所处的环境

谁调用`this`指向谁

## 回调函数

函数A作为函数B的参数，则函数A为回调函数

使用**匿名函数**作为回调函数比较常见

## 递归函数

函数内部自己调用自己，容易发生栈溢出，必需加`return`

## this关键字	

普通函数，谁调用，`this`指向谁，没明确调用对象时，指向`window`对象，严格模式下指向`undefined`

**函数单中才会存在`this`，对象中不存在**

箭头函数不存在`this`，应用最近作用域中的`this`

箭头函数中的 `this` 始终指向它被定义时的外部作用域中的 `this`

词法作用域是指作用域是在函数定义时确定的，而不是在函数调用时确定的。箭头函数使用词法作用域来解析 `this`，而传统函数使用动态作用域解析 `this`

- **箭头函数中的 `this`** 是在定义时确定的，继承自其外部作用域。

- **普通函数中的 `this`** 是在调用时确定的，取决于函数的调用方式。

- 即使使用 `call`、`apply` 或 `bind`，也无法改变箭头函数中的 `this` 绑定。

构造函数和原型对象中的`this`都指向实例化的对象

```javascript
const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
  console.log(this);  //指向window
})

btn.addEventListener('click',funciton(){
  console.log(this);  //指向btn                 
})
```

```javascript
var obj = {
    value: 42,
    method: function() {
        var arrowFunc = () => {
            console.log(this.value);  //this指向obj，arrowFunc无this，找上一层即method方法，method方法在调用时指向obj，因此箭头函数this指向obj
        };
        arrowFunc();
    }
};

obj.method(); // 42

```

## 创建对象

三种方法

```javascript
  const o = {
    name: 'allsun',
    age: 20
  }
```

```javascript
  const o = new Object（{name: 'allsun'}）
```

```javascript
  //使用构造函数，构造函数主要用来初始化对象
  function Pig(name,age){  //默认大写
    this.name: name ，//注意this关键字，this指向的属性 实例对象的属性和方法
    this.age: age    //无需return,自动返回创建的新对象
  }
  Pig.eyes = 2;  //静态成员的属性和方法,一般为公共方法
  Pig.sayHi = function(){//dosomething}
  const peiqi = new Pig('佩奇',3); //只能由 new 关键字来 实例化
```

##   原型

构造函数的方法是每个实例对象**独有**的

原型对象的函数是所有实例对象**共享**的

每一个构造函数都有一个`prototype`属性，即**原型对象**，原型对象挂载的方法是**共享**的，不会创建多次，节约内存

构造函数和原型对象中的`this`都指向实例化的对象

### constructor属性、`__proto__`(对象原型)

`prototype`中有`constructor`属性指向构造函数

```javascript
//constructor属性应用场景举例
function Star(name){
  this.name = name;
}

Star.prototype = {
  //重新指回构造函数
  constructor : Star,
  sing : function(){//dosomething}
}
```

`__proto__用于实例对象指向的原型对象（prototype），__proto__中也有constructor属性，指向创建实例对象的构造函数`

### 原型继承

```javascript
function Person(name,age){
  this.name = name;
  this.age = age;
}

function Man(){}

Man.prototype = new Person()；//必须使用父类的实例化对象
Man.prototype.constructor = Man;
Man.prototype.Swimming = function (){}

const allsun = new Man('allsun',30)
```

# React

极客园  pc  react+js    移动端   react+ts

virtural dom机制

webpack生成，需要先安装node.js   同时附带安装 包管理器  npm

`npx create-react-app 工程名` 

## JSX 

可利用babel进行解析

在 JavaScript 中，函数的参数可以使用方括号 `[]` 表示它们是可选的。**这种表示方法通常用于文档和说明，而不是在实际代码中**。`array.map(callback(currentValue[, index[, array]])[, thisArg])` 语法中，

```react
       {'我是一段话'}
       {a}<br/>
       {new Date().getDay()}
       <div style={{color: 'red'}}>我在学习啊</div>

<ul>
	{list.map(item => <li key={item.id}>item<li/>)}
</ul>
```

**if、switch、变量申明属于语句，不能出现在{} ，JSX仅支持表达式，比如取值（变量或函数）、或者字符串或者对象**

### 绑定事件

`on+事件名（驼峰命名）  如  <button onClick={}>`

#### 传递事件对象

```react
function App() {
  const clickHandler = (e) => {   //这种写法较常用
    console.log(e);
  }

  function clickHandler2(e){
    console.log(e);
  }

  return (
   <button onClick={clickHandler}>按钮</button>
  );
}

```

#### 自定义传递参数及事件对象

```react
function App() {
  const clickHandler = (name,e) => {  //
    console.log(name);
  }

  return (
   <button onClick={(e) => clickHandler('allsun',e)}>按钮</button>   //一定是箭头函数的引用写法
  );
}
```

## 组件

放置逻辑和UI
