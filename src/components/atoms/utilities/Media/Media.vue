<template>
  <template v-if="type === 'image'">
    <slot name="image">
      <img
        :ref="setImageRef"
        :src="lazy ? thumbnail : media"
        :alt="alt"
        :title="title"
        :lazyload="lazy && !thumbnail"
        :style="{
          height,
          width,
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
        :ref="setCssRef"
        :style="{
          'background-image': lazy && thumbnail ? 'url(\'' + thumbnail + '\')' : 'url(\'' + media + '\')',
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
          position: 'relative',
          height,
          width
        }"
        v-bind="$attrs"
      >
        <iframe
          :ref="setIframeRef"
          :src="lazy ? undefined : media"
          frameborder="0"
          allowfullscreen
          :title="title"
        />
      </div>
    </slot>
  </template>

  <template v-else>
    <slot name="video">
      <video
        :ref="setVideoRef"
        :style="{
          height,
          width
        }"
        preload="metadata"
        playsinline
        muted
        loop
        autoplay
        :poster="thumbnail"
        :alt="alt"
        :title="title"
        v-bind="$attrs"
      >
        <source
          :src="lazy ? undefined : media"
          :type="type"
        >
      </video>
    </slot>
  </template>
</template>

<script setup lang="ts">
import "./Media.scss"
import { type PropType } from 'vue';

const props = defineProps({
  /**
   * url/path to media
   */
  media: {
    type: String,
    required: true
  },

  /**
   * Background type
   * Background can be an image, a video, an iframe or a color
   * In case of VIDEO, the type is the codec (es: mp4)
   * In case of CSS, it an image that will be used on background-image
   */
  type: {
    type: String as PropType<'image' | 'iframe' | 'color' | 'css' | string>,
    default: () => 'image'
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
   * If the thumbnail and lazy are set,
   * we are gonna use the thumbnail and lazyload the correct media later
   *
   * If lazyload is set but thumbnail not: native lazyload (image only)
   *
   * Otherwise, it's the video's poster
   */
  thumbnail: {
    type: String,
    required: false
  },

  /**
   * Activate lazyload.
   */
  lazy: {
    type: Boolean,
    default: () => false
  },

  /**
   * Class that will be set after
   * a successful lazyload
   */
  loadedClass: {
    type: String,
    default: () => 'loaded'
  },

  /**
   * TODO ratio of media
   * (if only 1 or less fixed width/height)
   */
  ratio: {
    type: String,
    required: false
  },

  /**
   * Title TAG
   */
  title: {
    type: String,
    default: () => ''
  },

  /**
   * Alt TAG
   */
  alt: {
    type: String,
    default: () => ''
  }
})

/**
 *
 * @param el
 * @param intersectCallback
 */
function _observerHelper(el: HTMLElement, intersectCallback: (el: Element) => void) {
  if (!props.lazy || !el)
    return

  const observer = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting)
      return
    intersectCallback(entries[0].target)
    // one time only
    observer.disconnect()
  })

  // observe
  observer.observe(el)
}

/**
 *
 * @param el
 */
function setImageRef(el: HTMLImageElement): undefined {
  _observerHelper(el, (target) => {
    (target as HTMLImageElement).src = props.media
    target.classList.add(props.loadedClass)
  })
}

/**
 *
 * @param el
 */
function setCssRef(el: HTMLElement): undefined {
  _observerHelper(el, (target) => {
    (target as HTMLElement).style.backgroundImage = 'url(\'' + props.media + '\')'
    target.classList.add(props.loadedClass)
  })
}

/**
 *
 * @param el
 */
function setIframeRef(el: HTMLIFrameElement): undefined {
  _observerHelper(el, (target) => {
    (target as HTMLIFrameElement).src = props.media
    target.classList.add(props.loadedClass)
  })
}

/**
 *
 * @param el
 */
function setVideoRef(el: HTMLVideoElement): undefined {
  _observerHelper(el, (target) => {
    // targets
    const video = target as HTMLVideoElement
    const source = target.firstElementChild as HTMLSourceElement
    // video UI check
    if (
      (video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return
    // set the true image
    source.src = props.media
    video.onloadeddata = function() {
      (this as HTMLVideoElement).classList.add(props.loadedClass)
    }
    video.load()
  })
}
</script>
