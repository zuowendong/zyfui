export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"logoDark\":null,\"repoLabel\":\"代码地址\",\"repo\":\"https://github.com/Zuowendong/zyfui\",\"contributors\":true,\"contributorsText\":\"author\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"组件\",\"link\":\"/compsMD/\"}],\"sidebar\":[{\"title\":\"组件\",\"path\":\"/compsMD/\",\"collapsable\":true,\"children\":[{\"text\":\"表格\",\"link\":\"/compsMD/zyfTable\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
