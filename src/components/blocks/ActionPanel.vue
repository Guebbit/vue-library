<template>
  <Panel
    class="action-panel"
    centered
  >
    <template #backgroundShadow>
      <slot name="backgroundShadow" />
    </template>
    <template #background>
      <slot name="background" />
    </template>
    <template #default>
      <slot>
        <h3
          class="panel-title"
          v-html="title"
        />
        <p
          class="panel-text"
          v-html="text"
        />
      </slot>
      <slot name="action">
        <button
          v-if="buttonText.length > 0"
          class="panel-button"
          v-html="buttonText"
        />
      </slot>
    </template>
  </Panel>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
// WARNING: dependence required
import Panel from "./Panel.vue";

defineProps({
  // text
  title: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  buttonText: {
    type: String,
    required: false,
  },

  // MODES
  column: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  columnLeft: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  columnRight: {
    type: Boolean,
    default: () => {
      return false;
    },
  }
});
</script>

<style lang="scss">
$action-panel-mobile-threshold: 600px !default;

.hero-panel.action-panel {
  padding: 24px 48px;

  .panel-content {
    & > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      @media (max-width: $action-panel-mobile-threshold) {
        justify-content: center;
      }
    }
  }

  .panel-title,
  .panel-text {
    position: relative;
  }

  .panel-title {
    line-height: 1.4;
    font-size: 2.5em;
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: 700;

    @media (max-width: $action-panel-mobile-threshold) {
      font-size: 2em;
    }
  }

  .panel-button {
    margin: 1em;
    // TODO
  }

  &.shadow-active {
    .panel-title,
    .panel-text {
      text-shadow: 1px -1px 20px var(--hero-panel-shadow-color);
    }
  }
}
</style>
