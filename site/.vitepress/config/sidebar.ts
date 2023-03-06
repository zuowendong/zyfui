import type { DefaultTheme } from 'vitepress'
export function getSidebar(): DefaultTheme.Sidebar {
  return {
    '/components/': [
      {
        text: 'Button 按钮',
        link: '/components/button/'
      }
    ]
  }
}
