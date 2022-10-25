import * as components from './components'
export * from './components'

export default {
  install(app) {
    for (const key in components) {
      const comp = components[key]
      if (comp.install) app.use(comp)
      return app
    }
  },
}
