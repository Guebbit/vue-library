<template>
  <template v-if="type === 'image'">
    <slot name="image">
      <img
        :src="media"
        :alt="alt"
        :title="title"
        :style="{
          height,
          width
        }"
        v-bind="$attrs"
      >
    </slot>
  </template>

  <template v-else-if="type === 'color'">
    <slot name="color">
      <div
        :style="{
          'background-color': media,
          height,
          width
        }"
        v-bind="$attrs"
      />
    </slot>
  </template>

  <template v-else-if="type === 'css'">
    <slot name="css">
      <div
        :style="{
          'background-image': 'url(\'' + media + '\')',
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-size': 'cover',
          height,
          width
        }"
        :aria-label="title"
        :aria-details="alt"
        v-bind="$attrs"
      />
    </slot>
  </template>

  <template v-else-if="type === 'iframe'">
    <slot name="iframe">
      <div
        :style="{
          height,
          width
        }"
        v-bind="$attrs"
        class="media-iframe-container"
      >
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
        />
      </div>
    </slot>
  </template>

  <template v-else>
    <slot name="video">
      <video
        :style="{
          height,
          width
        }"
        preload="metadata"
        playsinline=""
        muted=""
        loop=""
        autoplay=""
        :poster="thumbnail"
        :alt="alt"
        :title="title"
        v-bind="$attrs"
      >
        <source
          :src="media"
          :type="type"
        >
      </video>
    </slot>
  </template>
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
   * TODO The thumbnail is used on image for lazyload (TODO)
   * or in the video as poster
   */
  thumbnail: {
    type: String,
    required: false,
  },

  /**
   * TODO ratio of media
   * (if only 1 or less fixed width/height)
   */
  ratio: {
    type: String,
    required: false,
  },

  /**
   * Title TAG
   * TODO with CSS use ARIA
   */
  title: {
    type: String,
    default: () => "",
  },

  /**
   * Alt TAG
   * TODO with CSS use ARIA
   */
  alt: {
    type: String,
    default: () => "",
  },
})
</script>

<style scoped lang="scss">
.media-iframe-container{
  position: relative;
  iframe{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }
}
</style>
