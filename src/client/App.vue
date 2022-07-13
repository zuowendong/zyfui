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

<script setup lang="ts">
import { onMounted, ref } from "vue";

const button = ref();
onMounted(() => {
    button.value.setProperty("--bg", "#ccc");
});
</script>

<style scoped>
.textWrap {
    width: 200px;
}
</style>
