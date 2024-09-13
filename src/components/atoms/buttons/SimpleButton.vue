<template>
    <div
        :class="[
            'simple-button',
            'animate-on-hover',
            sizeClass,
            shapeClass,
            variantClass,
            brandClass,
            {
                'button-icon-only': iconOnly,
                'highlight-rollup-horizontal': expressive,
                'highlight-rollup-reverse': expressive,
            },
        ]"
    >
        <slot name="icon">
            <img v-if="image" :src="image" :alt="alt" class="button-image" />
        </slot>
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue';

const props = defineProps({
    /**
     * Button size
     */
    size: {
        type: String as PropType<'' | 'small'>,
        default: () => ''
    },

    /**
     * Button shape
     */
    shape: {
        type: String as PropType<'' | 'rounded' | 'circular' | 'pill'>,
        default: () => ''
    },

    /**
     * Button variant
     */
    variant: {
        type: String as PropType<'' | 'shadowless' | 'plain' | 'outlined' | 'tonal'>,
        default: () => ''
    },

    /**
     *
     */
    image: {
        type: String,
        default: () => ''
    },

    /**
     * Button brand styling
     */
    brand: {
        type: String as PropType<'' | 'facebook'>,
        default: () => ''
    },

    /**
     * Display only the icon without text
     */
    iconOnly: {
        type: Boolean,
        default: () => false
    },

    /**
     * Apply expressive social button styling
     */
    expressive: {
        type: Boolean,
        default: () => false
    },

    /**
     * Title TAG for the image (if any)
     */
    title: {
        type: String,
        default: () => ''
    },

    /**
     * Alt TAG for the image (if any)
     */
    alt: {
        type: String,
        default: () => ''
    }
});

const sizeClass = computed(() => (props.size ? `button-${props.size}` : ''));
const shapeClass = computed(() => (props.shape ? `button-${props.shape}` : ''));
const variantClass = computed(() =>
    props.variant ? `button-${props.variant}` : ''
);
const brandClass = computed(() =>
    props.brand
        ? `brand-${props.brand}-${props.iconOnly ? 'icon' : 'bg'}`
        : ''
);
</script>

<style scoped lang="scss">
@use "../../../assets/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/SimpleButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>
