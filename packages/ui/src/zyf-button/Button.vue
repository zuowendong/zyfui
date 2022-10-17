<template>
  <span class="btn">{{ testStr }}</span>
  <button>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { isStr } from '@zyfjs/utils'
const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
})

const testStr = ref('')
testStr.value = isStr('test') ? 'string' : 'noString'
</script>
<script lang="ts">
export default {
  name: 'ZyfButton',
}
</script>

<style lang="less">
@import "./style";
</style>
