import ZyfButton from './Button.vue'

ZyfButton.install = (app) => {
  app.component(ZyfButton.name, ZyfButton)
  return app
}

export default ZyfButton
