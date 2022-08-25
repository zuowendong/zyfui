<script setup lang="ts">
import { onMounted, ref } from "vue";

const button = ref<ZyfButtonFunc>();
onMounted(() => {
    button.value?.setProperty("--bg", "red");
});
</script>

<template>
    <!-- <zyf-button ref="button">
        Hello world
        <template #tag>tag</template>
    </zyf-button> -->

    <div class="textWrap">
        <h3>消息公告无缝轮播组件</h3>
        <zyf-marquee
            text="关注同名微信公众号，学起来噻~"
        />
    </div>

    <filter-image />
</template>

<style scoped>
.textWrap {
    width: 200px;
    margin: 100px auto;
}
</style>
