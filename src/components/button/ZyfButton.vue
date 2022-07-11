<script lang="ts">
export default { name: "ZyfButton" };
</script>

<script setup lang="ts">
import "./ZyfButton.css";
</script>

<template>
    <div>
        <button class="custom-button">
            <slot />
        </button>
    </div>
</template>
 