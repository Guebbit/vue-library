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

<style scoped lang="scss">
.aspect-ratio-component {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-bottom: var(--aspect-ratio);

    & > * {
        position: absolute !important;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
