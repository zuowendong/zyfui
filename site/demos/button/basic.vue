<docs>
---

title: 基础按钮
---

这是一个Button的基础按钮  

</docs>

<script lang="ts" setup></script>

<template>
  <button class="button">按钮</button>
</template>

<style scoped>
  .button {
    width: 100px;
    height: 40px;
    border: 1px solid #333;
    text-align: center;
    line-height: 40px;
    box-sizing: border-box;
  }
  .button:active {
    background-color: #333;
    color: #fff;
  }
</style>
