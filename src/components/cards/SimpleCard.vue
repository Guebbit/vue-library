<template>
  <div
    class="simple-user-card"
    :style="{
      '--simple-user-card-color': textColor,
      '--simple-user-card-background': backgroundColor
    }"
  >
    <slot name="background">
      <img
        v-show="background"
        class="card-background"
        :src="background"
      >
    </slot>
    <div class="card-content">
      <slot name="image">
        <img
          v-show="image"
          class="card-image"
          :src="image"
          :alt="title + ' ' + subtitle"
        >
      </slot>
      <h4 class="card-title">
        {{ title }}
      </h4>
      <p class="card-subtitle">
        {{ subtitle }}
      </p>
      <slot>
        <ul class="card-info">
          <li
            v-for="(label, number) in info"
            :key="'card-info-' + label+number"
          >
            <span class="label">{{ label }}</span>
            <span class="value">{{ number }}</span>
          </li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";

const props = defineProps({
  background: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  subtitle: {
    type: String,
    required: false
  },
  info: {
    type: Object as PropType<Record<string, string | number>>,
    default: () => {
      return {};
    }
  },
  textColor: {
    type: String,
    required: false
  },
  backgroundColor: {
    type: String,
    required: false
  },
});
</script>


<style lang="scss">
// TODO opacity (fare composable con il "getRGB"?
$simple-user-card-background: var(--simple-user-card-background) !default;
$simple-user-card-color: var(--simple-user-card-color) !default;
$simple-user-card-title-color: var(--simple-user-card-color) !default;

@import "@guebbit/scss-library/components/molecules/cards/SimpleCard";
</style>