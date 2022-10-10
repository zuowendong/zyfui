import { defineComponent } from 'vue'
import { isStr } from '@zyf/utils'

export default defineComponent({
    name: 'ZyfButton',
    setup() {
        return () => {
            return (
                <button>测试按钮组件</button>
            )
        }
    }
})