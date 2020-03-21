# Vue

## vue.config.js配置学习

### publicPath

publicPath被设置为空字符串""或者是相对路径"./"时，项目在生产环境下可以部署到任何路径下

::: warning 注意

相对路径应该避免使用在：

  - 当使用基于 HTML5 history.pushState 的路由时

  - 当使用 pages 选项构建多页面应用时

:::
