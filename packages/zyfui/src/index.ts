
import type { App } from 'vue'
import * as components from './components'
export * from './components'

export default {
  install(app: App) {
    // eslint-disable-next-line no-unreachable-loop
    for (const key in components) {
      const comp = (components as any)[key]
      if (comp.install)
        app.use(comp)

      return app
    }
  },
}
