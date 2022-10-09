
import * as components from './components'
import type { App } from 'vue'
export * from './components'

export default {
    install(app: App) {
        for (const key in components) {
            const comp = components[key]
            if (comp.install) {
                app.use(comp)
            }
            return app
        }
    }
}