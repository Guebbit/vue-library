<template>
  <button :class="classes">

  </button>
    <div
        :class="[

        ]"
    >
        <slot name="icon">
            <img v-if="image" :src="image" :alt="alt" class="button-image" />
        </slot>
        <slot />
    </div>
</template>

<script lang="ts" setup>
import "./SimpleButton.scss";

import { computed, type PropType } from "vue";

type ISimpleButtonVariants = "" | "rounded" | "circular" | "pill" | "outlined" | "plain" | "flat";

const props = defineProps({ 
    /**
     * Button size
     */
    size: {
        type: String as PropType<"xs" | "sm" | "md" | "lg" | "xl">,
        default: () => "md"
    },

    /**
     * Button variant
     */
    variants: {
        type: Array as PropType<ISimpleButtonVariants[]>,
        default: () => []
    },
  
    /**
     * Display only the icon without text
     */
    icon: {
        type: Boolean,
        default: () => false
    },

    /**
     * Button text (if not prop)
     */
    text: {
        type: String,
        default: () => ""
    },
});

const sizeClass = computed(() => (props.size ? `button-${props.size}` : ""));

const classes = [
  "simple-button",
  "animate-on-hover",
  sizeClass.value,
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "button-icon-only": props.icon,
  }
];
</script>