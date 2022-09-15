<script>
export default { name: "ZyfMarquee" };
</script>

<script setup>
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
const getWidth = (el) => {
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
	<div class="zyf-scrollWrap" ref="outer">
		<div :class="['zyf-stInner', needToScroll ? 'zyf-stScrolling' : '']" @click="hanldeView">
			<div class="zyf-stSection" ref="inner">
				<div v-html="text" />
			</div>
			<div class="zyf-stSection" v-if="needToScroll">
				<div v-html="text" />
			</div>
			<!-- two div, 无缝衔接 -->
		</div>
	</div>
</template>

<style lang="scss">
.zyf-scrollWrap {
	overflow: hidden;
	white-space: nowrap;
	height: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;
}
.zyf-stInner {
	height: 100%;
	display: flex;
	align-items: center;
}
.zyf-stSection {
	padding: 0 20px;
	height: 100%;
	display: flex;
	align-items: center;
}

/* 向左匀速滚动动画 */
.zyf-stScrolling {
	animation: zyfScrollAnimation 10s linear infinite;
}

@keyframes zyfScrollAnimation {
	0% {
		transform: translate3d(0%, 0, 0);
	}
	100% {
		transform: translate3d(-50%, 0, 0);
	}
}
</style>
