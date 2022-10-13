import type { App, Plugin } from 'vue'
import ZyfButton from './ZyfButton'

ZyfButton.install = (app: App) => {
  app.component(ZyfButton.name, ZyfButton)
  return app
}

export default ZyfButton as typeof ZyfButton & Plugin
