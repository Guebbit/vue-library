<template>
  <div class="simple-card grayscale-active grayscale-reverse-on-hover shadow-on-hover">
    <img
      class="card-image"
      src="http://placekitten.com/1000/600"
    >
    <div class="highlight-belt bend-bottom">
      <b>Lorem Ipsum</b>
    </div>
    <div class="card-content">
      <h2 class="card-title">
        Title of lorem ipsum
      </h2>
      <h5 class="card-subtitle">
        Subtitle of lorem ipsum
      </h5>
      <br>
      <div class="card-actions card-actions-center">
        <span class="simple-text-icon icon-highlight column-mode">
          <svg
            class="icon card-icon"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />
          </svg>
          Lorem Ipsum
        </span>
        <span class="simple-text-icon icon-highlight column-mode">
          <svg
            class="icon card-icon"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />
          </svg>
          Lorem Ipsum
        </span>
        <span class="simple-text-icon icon-highlight column-mode">
          <div class="icon">
            <img src="https://placekitten.com/50/50">
          </div>
          Lorem Ipsum
        </span>
        <span class="simple-text-icon icon-highlight column-mode">
          <svg
            class="icon card-icon"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />
          </svg>
          Lorem Ipsum
        </span>
      </div>
    </div>
  </div>


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
// TODO sostituire SimpleUserCard in vue-library con StatsTeamCard
$scss-library-prefix: "" !default;
$highlight-belt-size: 3em !default;

@import "@guebbit/scss-library/components/molecules/cards/SimpleCard";
@import "@guebbit/scss-library/components/atoms/highlights/HighlightBelt";
@import "@guebbit/scss-library/components/atoms/typography/SimpleTextIcon";

.#{$scss-library-prefix}simple-card {
  color: var(--simple-user-card-color);
  background: var(--simple-user-card-background);


  .highlight-belt {
    background-color: var(--simple-user-card-color);
    color: #f0f; // var(--simple-user-card-color) // TODO
  }

  .card-icon {
    color: var(--simple-user-card-color);
    fill: var(--simple-user-card-color);
  }

  &.animate-active,
  &.animate-on-active.active,
  &.animate-on-hover:hover {
    background-color: var(--simple-user-card-background);
  }

  &.border-active,
  &.border-on-active.active,
  &.border-on-hover:hover {
    .card-header,
    .card-content {
      border-left: var(--simple-user-card-color) solid $simple-card-border-width;
    }
  }
}
</style>