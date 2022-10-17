import type { App, Plugin } from 'vue'
import ZyfText from './Text.vue'

ZyfText.install = (app: App) => {
  app.component(ZyfText.name, ZyfText)
  return app
}

export default ZyfText as typeof ZyfText & Plugin
