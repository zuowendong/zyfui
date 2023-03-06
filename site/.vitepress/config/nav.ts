import type { DefaultTheme } from 'vitepress'
export function getNav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '组件',
      link: '/components/'
    }
  ]
}
