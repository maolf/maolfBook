# 前端模块化

## CommonJS

  CommonJS有四个重要的环境变量为模块化的实现提供支持，分别是：

  `module` `exports` `require` `global`

  在实际使用时，

  使用`module.exports`定义当前模块对外输出的接口

  使用`require`加载模块

  ```js
  // 定义模块math.js
  const baseNum = 0;
  function add(a,b){
    return a + b;
  }
  module.exports = {
    baseNum: baseNum,
    add:add
  }

  // 引用自定义的模块时，参数包含路径，可省略.js
  const math = require('./math');
  math.add(1,2);

  // 引用核心模块时，不需要带路径
  const http = require('http');
  http.createService(...).listen(3000);
  ```

  ::: 注意

  CommonJS使用同步的方式进行模块加载。在服务端，模块文件都存储在本地磁盘，读取非常快。
  但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。

  :::

  ## AMD和require.js

  AMD采用的是异步加载模块，模块的加载不影响它后面语句的运行。所有依赖于模块的语句都在回调函数中定义，等到加载完成之后，这个回调函数才会运行。
  此处可以使用require.js实现AMD规范的模块化。

  ::: warning 注意

  require.js在申明依赖的模块时会在第一时间加载并执行模块内的代码

  :::

  `require.config()`指定模块引用路径

  `define()`定义模块

  `require()`加载模块

  ```js
  // 网页中引入require.js及main.js
  <script src="js/require.js" data-main="js/main"></script>

  /** main.js 入口文件/主模块 **/
  // 首先用config()指定各模块路径和引用名
  require.config({
    baseUrl: "js/lib",
    paths: {
      "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
      "underscore": "underscore.min",
    }
  });
  // 执行基本操作
  require(["jquery","underscore"],function($,_){
    // some code here 使用jq的一些功能
  });

  // 定义独立的math.js模块
  define(function(){
    const baseNum = 0;
    const add = function(a,b){
      return a + b;
    }
    return {
      add: add,
      baseNum:baseNum
    }
  })

  // 定义一个依赖underscore.js的模块
  define(['underscore'],function(_){
    const classify = (list) => {
      _.countBy(list,(num) => {
        return  num > 30 ? 'old' : 'young';
      })
    }
    return {
      classify:classify
    }
  })

  // 引用模块，将模块放在[]内
  require(['jquery', 'math'],($, math) =>{
    const sum = math.add(1,2);
    $("#sum").html(sum);
  })
  ```

  ## CMD和sea.js

  CMD是另一种模块化方案，与AMD很类似。
  **不同点在于**：
  AMD推崇的是依赖前置、提前执行；
  CMD推崇依赖就近，延迟执行。此规范其实是在sea.js推广过程中产生的

  ```js
  /** CMD写法 **/
  define((require, exports, module) => {
    const a = require('./a'); // 当使用时申明
    a.doSomeThing();
    if (false) {
      const b = require('./b'); // 当使用时申明
      b.doSomething();
    }
  })

  /** sea.js **/
  // 定义模块 math.js
  define((require, exports, module)=> {
    const $ = require('jquery.js');
    const add = (a , b) => {
      return a + b;
    }
    exports.add = add;
  });

  // 加载模块
  seajs.use(['math.js'], (math) => {
    const sum = math.add(1, 2);
  });
  ```
  ## ES6 Module

  **ES6**在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为浏览器和服务器通用的模块解决方案。其模块功能主要由两个命令构成:

  `export`:用于规定模块的对外接口

  `import`:用于输入其他模块提供的功能

  ```js
  /** 定义模块 math.js **/
  const baseNum = 0;
  const add = (a, b)=>{
    return a + b;
  }
  // 导出模块
  export {baseNum, add}

  // 引入模块
  import {baseNum, add} from './math'

  const test = (ele) => {
    ele.textContent = add(1, baseNum)
  }
  ```

  ::: tip 

  ES6还提供了<font color=orange size=4>export default</font>命令，为模块指定默认输出，对应的<font color=orange size=4>import</font>语句不需要使用大括号

  :::


  ```js
  /** export default **/
  //定义输出
  export default { basicNum, add };

  //引入
  import math from './math';
  function test(ele) {
      ele.textContent = math.add(99, math.basicNum);
  }
  ```

  ::: tip
  ES6的模块不是对象，import命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载。也正因为这个，使得静态分析成为可能
  :::

  ## ES6 模块与 CommonJS 模块的差异

  ### CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用

  - CommonJS模块输出的是一个值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值

  - JS引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的import有点像 Unix 系统的“符号连接”，`原始值变了，import加载的值也会跟着变`。因此，ES6 模块是`动态引用`，并且不会缓存值，模块里面的变量绑定其所在的模块。

  ### CommonJS 模块是运行时加载，ES6 模块是编译时输出接口

  - 运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为"运行时加载"

  - 编译时加载: ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，import时采用静态命令的形式。即在import时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”