<template>
  <div class="textWrap">
    <span class="text">{{ testStr }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { isStr } from '@zyfjs/utils'

export default defineComponent({
  name: 'VarButton',
  setup() {
    const testStr = ref<string>('')
    testStr.value = isStr('test') ? 'isString' : 'noString'
    return {
      testStr,
    }
  },
})
</script>

<style lang="less">
@import './style/Text.less';
</style>
