<template>
  <Panel
    class="action-panel"
    :class="{
      'action-panel-align-left': left,
      'action-panel-align-right': right,
      'action-panel-align-actions-center': buttonCenter,
      'action-panel-align-actions-right': buttonRight,
    }"
    :shadow="shadow"
    centered
  >
    <!--
    :style="{
      '--hero-panel-shadow-color': shadow,
      '--hero-panel-shadow-opacity': shadowOpacity,
    }"
    -->
    <template #backgroundShadow>
      <slot name="backgroundShadow" />
    </template>
    <template #background>
      <slot name="background" />
    </template>
    <template #default>
      <slot>
        <div>
          <h3
            class="panel-title"
            v-html="title"
          />
          <p
            class="panel-text"
            v-html="text"
          />
        </div>
      </slot>
      <slot name="actions-wrapper">
        <div class="card-actions">
          <slot class="actions">
            <button
              v-if="buttonText.length > 0"
              class="panel-button"
              v-html="buttonText"
            />
          </slot>
        </div>
      </slot>
    </template>
  </Panel>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import Panel from "./SimplePanel.vue";

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
  left: {
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
   * Actions align
   */
  buttonCenter: {
    type: Boolean,
    default: () => false,
  },

  /**
   * [MODE]
   * Actions align
   */
  buttonRight: {
    type: Boolean,
    default: () => false,
  },

  /**
   * [CSS variables]
   * same as Panel.vue shadow,
   * but add text-shadow to
   */
  shadow: {
    type: String,
    required: false
  },
});
</script>

<style lang="scss">
// @use "@guebbit/css-ui/src/molecules/panels/ActionPanel";
</style>