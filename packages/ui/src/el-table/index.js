import ZyfTable from './Table.vue'

ZyfTable.install = (app) => {
  app.component(ZyfTable.name, ZyfTable)
  return app
}

export default ZyfTable
