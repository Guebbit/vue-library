<template>
  <!-- TODO thumbnail & lazyload -->
  <img
    v-if="type === 'image'"
    :src="media"
    :alt="alt"
    :title="title"
    :height="height"
    :width="width"
  >
  <div
    v-else-if="type === 'color'"
    :style="{
      'background-color': media
    }"
    :height="height"
    :width="width"
  />
  <div
    v-else-if="type === 'css'"
    :style="{
      'background-image': 'url(\'' + media + '\')',
    }"
    :height="height"
    :width="width"
    :aria-label="title"
    :aria-details="alt"
  />
  <div v-else-if="type === 'iframe'">
    <iframe
      ref="iframeRef"
      :src="media"
      frameborder="0"
      allowfullscreen=""
      autoplay=""
      mute=""
      loop=""
      :alt="alt"
      :title="title"
      :height="height"
      :width="width"
    />
  </div>
  <video
    v-else
    preload="metadata"
    playsinline=""
    muted=""
    loop=""
    autoplay=""
    :poster="thumbnail"
    :alt="alt"
    :title="title"
    :height="height"
    :width="width"
  >
    <source
      :src="media"
      :type="type"
    >
  </video>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";

defineProps({
  /**
   * url/path to media
   */
  media: {
    type: String,
    required: true,
  },

  /**
   * When height & width are fixed
   */
  height: {
    type: String,
    required: false
  },
  width: {
    type: String,
    required: false
  },

  /**
   * Background type
   * Background can be an image, a video, an iframe or a color
   * In case of VIDEO, the type is the codec (es: mp4)
   * In case of CSS, it an image that will be used on background-image
   */
  type: {
    type: String as PropType<"image" | "iframe" | "color" | "css" | string>,
    default: () => "image",
  },

  /**
   * The thumbnail is used on image for lazyload (TODO)
   * or in the video as poster
   */
  thumbnail: {
    type: String,
    required: false,
  },

  /**
   * Background title TAG
   * TODO with CSS use ARIA
   */
  title: {
    type: String,
    default: () => "",
  },

  /**
   * Background title TAG
   * TODO with CSS use ARIA
   */
  alt: {
    type: String,
    default: () => "",
  },
})
</script>

<style scoped>
iframe{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
</style>
