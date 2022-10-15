import {defineClientConfig} from '@vuepress/client'
import zyfui from 'zyfui'

export default defineClientConfig({
  enhance({app}){
    app.use(zyfui)
  }
})