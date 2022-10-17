/* eslint-disable @typescript-eslint/ban-ts-comment */

import type { App } from 'vue'
import * as components from './components'
export * from './components'

export default {
  install(app: App) {
    // eslint-disable-next-line no-unreachable-loop
    for (const key in components) {
      // @ts-expect-error
      const comp = components[key]
      if (comp.install)
        app.use(comp)

      return app
    }
  },
}
