<template>
  <span class="btn">111111111</span>
  <button>
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: 'ZyfButton',
}
</script>
<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
})
</script>

<style lang="less">
@import "./style";
</style>
