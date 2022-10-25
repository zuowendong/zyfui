import ZyfText from './Text.vue'

ZyfText.install = (app) => {
  app.component(ZyfText.name, ZyfText)
  return app
}

export default ZyfText
