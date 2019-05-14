module.exports = {
  base: "/VuePressTest/",
  title: "前端学习笔记",
  description: "FrontEnd Study",
  dest: "../../VuePressTest",
  themeConfig: {
    nav: [
      { text: "前端记录", link: "/frontEndRecord/" },
      { text: "编码规范&开发协同", link: "/codeLint/" },
      { text: "资料整理", link: "/bookTidy/" },
      {
        text: "自我审查",
        link: "https://mp.weixin.qq.com/s/tdUZB_OrSTDoG92M25IGNQ"
      },
      {
        text: "Languages",
        items: [
          { text: "English", link: "/language/chinese" },
          { text: "中文", link: "/language/japanese" }
        ]
      }
    ],
    sidebar: {
      "/frontEndRecord/": [
        {
          title: "JavaScript基础",
          collapsable: true,
          children: [
            "",
            "原型和原型链",
            "作用域和闭包",
            "执行机制",
            "语法和API"
          ]
        },
        {
          title: "HTML和CSS",
          collapsable: false,
          children: ["HTML"]
        },
        {
          title: "计算机基础",
          collapsable: false
        },
        {
          title: "数据结构和算法",
          collapsable: false
        },
        {
          title: "运行环境",
          collapsable: false
        },
        {
          title: "前端工程",
          collapsable: false
        },
        {
          title: "项目和业务",
          collapsable: false
        }
      ],
      "/codeLint": [
        {
          title: "项目和业务",
          collapsable: false,
          children: [""]
        }
      ]
    },

    lastUpdated: "Last Updated",
    sidebarDepth: 2
  }
};
