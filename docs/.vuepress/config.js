/*
 * @Author: maolf
 * @Date: 2020-03-08 15:59:57
 * @LastEditors: maolf
 * @LastEditTime: 2020-03-10 09:57:15
 * @Description: file content
 */
module.exports = {
  base: "/maolfBook/",
  title: "maolf学习笔记",
  description: "Study Book",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    nav: [
      { text: "问题整理", link: "/frontEndRecord/" },
      { text: "资料整理", link: "/bookTidy/" },
      { text: "编码规范&开发协同", link: "/codeLint/" },
      {
        text: "自审清单",
        link: "https://mp.weixin.qq.com/s/tdUZB_OrSTDoG92M25IGNQ"
      }
    ],
    lastUpdated: "Last Updated",
    sidebarDepth: 2
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "VuePress",
      description: "Vue-powered Static Site Generator"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器"
    }
  }
};
