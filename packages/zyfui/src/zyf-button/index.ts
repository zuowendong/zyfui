import ZyfButton from './ZyfButton'
import type { App, Plugin } from 'vue'

ZyfButton.install = (app: App) => {
    app.component(ZyfButton.name, ZyfButton)
    return app
}

export default ZyfButton as typeof ZyfButton & Plugin