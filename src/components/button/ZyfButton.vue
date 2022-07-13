<script lang="ts">
export default { name: "ZyfButton" };
</script>

<script setup lang="ts">
import "./ZyfButton.css";
import { onMounted, ref } from "vue";

const zyfButton = ref<HTMLButtonElement>();
const setProperty = (key: ZyfButtonProperty, value: any) => {
    zyfButton.value?.style.setProperty(key, value);
};

onMounted(() => {
    setProperty('--bg', 's')
})

defineExpose({
    setProperty,
});
</script>

<template>
    <button ref="zyfButton" class="cyberpunk-button">
        <slot />
        <span class="cyberpunk-button_glitch" />
        <span v-if="!!$slots['tag']" class="cyberpunk-button_tag">
            <slot name="tag" />
        </span>
    </button>
</template>

<style scoped>
.cyberpunk-button {
    /* --bg: v-bind(bgColor); */
    --bg: var(--red);
    --glitch-text: "Hello";
}
</style>
