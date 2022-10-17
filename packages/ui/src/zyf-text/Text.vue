<template>
  <div class="textWrap">
    <span class="text">{{ testStr }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { isStr } from '@zyfjs/utils'

const testStr = ref('')
testStr.value = isStr('test') ? 'string' : 'noString'
</script>
<script lang="ts">
export default {
  name: 'ZyfText',
}
</script>

<style lang="less">
@import "./style";
</style>
