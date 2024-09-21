<template>
    <div
        class="aspect-ratio-component"
        :style="{
            '--aspect-ratio': ratio + '%'
        }"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import "./AspectRatio.scss";

defineProps({
    /**
     * Wanted ratio
     */
    ratio: {
        type: Number,
        default: () => 100
    }
});
</script>
