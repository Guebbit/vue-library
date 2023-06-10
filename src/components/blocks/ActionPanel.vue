<template>
  <Panel
    class="action-panel"
    :class="{
      'action-panel-align-center': center,
      'action-panel-align-right': right,
      'action-panel-column': column
    }"
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
  /**
   * Title text
   */
  title: {
    type: String,
    required: false,
  },

  /**
   * Content text
   */
  text: {
    type: String,
    required: false,
  },

  /**
   * Title text
   */
  buttonText: {
    type: String,
    required: false,
  },

  /**
   * [MODE]
   * Elements align
   */
  center: {
    type: Boolean,
    default: () => false,
  },

  /**
   * [MODE]
   * Elements align
   */
  right: {
    type: Boolean,
    default: () => false,
  },

  /**
   * [MODE]
   * Button aligned with the text
   */
  column: {
    type: Boolean,
    default: () => false,
  },

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

  &.shadow-active {
    .panel-title,
    .panel-text {
      text-shadow: 1px -1px 20px var(--hero-panel-shadow-color);
    }
  }


  // TODO
  &.action-panel-align-center{
    .panel-content{
      justify-content: center;
    }
  }
  // TODO
  &.action-panel-align-right{
    .panel-content{
      justify-content: flex-end;
    }
  }
  // TODO
  &.action-panel-column{
    .panel-content{
      //
    }
  }
}
</style>
