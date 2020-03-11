# 变量和类型

## JavaScript 规定了几种语言类型

- **基本数据类型**：存取直接作用于它自身

  - `string`
  - `number`
  - `boolean`
  - `null`
  - `undefined`
  - `symbol`

  **存储地：**
  大小固定，占用空间小，频繁使用，所以存储在栈中

  ```javascript
  var foo = 1;
  var bar = foo;

  bar = 9;

  console.log(foo, bar); // => 1, 9
  ```

- **引用数据类型**：存取作用于它自身值的引用

  - `array`
  - `object`
  - `function`

  ```javascript
  var foo = [1, 2];
  var bar = foo;

  bar[0] = 9;

  console.log(foo[0], bar[0]); // => 9, 9
  ```

  **存储地：**
  大小不固定，占用空间大,存储在堆中，在栈中存储了指针，指向存储在堆中的地址，解释器会先检索在栈中的地址，从堆中获得实体

## JavaScript 对象的底层数据结构是什么
