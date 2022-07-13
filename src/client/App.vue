<template>
    <zyf-button ref='button'>
        Hello world
        <template #tag>tag</template>
    </zyf-button>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'

const button = ref()
onMounted(() => {
    button.value.setProperty('--bg', '#ccc')
})
</script>

<style scoped></style>
