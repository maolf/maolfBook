module.exports = {
  base: "/maolfBook/",
  title: "maolf的学习笔记",
  description: "Study Book",
  head: [["link", { rel: "icon", href: "/logo.gif" }]],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    sidebarDepth: 2,
    lastUpdated: "Last Updated",
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页 ！"
  }
};
