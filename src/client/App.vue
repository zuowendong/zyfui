<script setup lang="ts">
import { onMounted, ref } from "vue";

const button = ref<ZyfButtonFunc>();
onMounted(() => {
    button.value?.setProperty('--bg', 'red')
});
</script>

<template>
    <zyf-button ref="button">
        Hello world
        <template #tag>tag</template>
    </zyf-button>

    <div class="textWrap">
        <zyf-marquee
            text="这是测试数据啊这是测试数据啊这是测试数据啊这是测试数据啊这是测试数据啊"
        />
    </div>
</template>

<style scoped>
.textWrap {
    width: 200px;
}
</style>
