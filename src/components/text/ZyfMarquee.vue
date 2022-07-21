<script lang="ts">
export default { name: "ZyfMarquee" };
</script>

<script setup lang="ts">
import { onMounted, ref, nextTick, toRefs, onBeforeUnmount } from "vue";

const props = defineProps({
    text: {
        type: String,
        default: "",
    },
});
let { text } = toRefs(props);
const emit = defineEmits(["onView"]);

let needToScroll = ref(false);

let _checkTimer = ref();
// 增加定时器，隔一秒check一次
const startCheck = () => {
    _checkTimer.value = setInterval(check, 1000);
    check();
};

// 检查当前元素是否需要滚动
const check = () => {
    nextTick(() => {
        needToScroll.value = isOverflow();
    });
};

onMounted(() => {
    startCheck();
});
onBeforeUnmount(() => {
    stopCheck();
});

let outer = ref();
let inner = ref();
// 判断子元素宽度是否大于父元素宽度，超出则需要滚动，否则不滚动
const isOverflow = () => {
    let outerWidth = getWidth(outer.value);
    let innerWidth = getWidth(inner.value);
    return innerWidth > outerWidth;
};

// 获取元素宽度
const getWidth = (el: any) => {
    let { width } = el.getBoundingClientRect();
    return width;
};

// 关闭定时器
const stopCheck = () => {
    clearInterval(_checkTimer.value);
};

const hanldeView = () => {
    emit("onView");
};
</script>

<template>
    <div class="scrollWrap" ref="outer">
        <div
            :class="['st-inner', needToScroll ? 'st-scrolling' : '']"
            @click="hanldeView"
        >
            <div class="st-section" ref="inner">
                <div v-html="text" />
            </div>
            <div class="st-section" v-if="needToScroll">
                <div v-html="text" />
            </div>
            <!-- two div, 无缝衔接 -->
        </div>
    </div>
</template>

<style scoped>
.scrollWrap {
    overflow: hidden;
    white-space: nowrap;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.st-inner {
    height: 100%;
    display: flex;
    align-items: center;
}
.st-section {
    padding: 0 20px;
    height: 100%;
    display: flex;
    align-items: center;
}

/* 向左匀速滚动动画 */
.st-scrolling {
    animation: scroll 33s linear infinite;
}

@keyframes scroll {
    0% {
        transform: translate3d(0%, 0, 0);
    }
    100% {
        transform: translate3d(-50%, 0, 0);
    }
}
</style>
