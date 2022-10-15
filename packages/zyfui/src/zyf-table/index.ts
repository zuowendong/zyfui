import type { App, Plugin } from 'vue'
import ZyfTable from './Table.vue'

ZyfTable.install = (app: App) => {
  app.component(ZyfTable.name, ZyfTable)
  return app
}

export default ZyfTable as typeof ZyfTable & Plugin
