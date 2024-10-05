<template>
  <div
    ref="panelRef"
    class="hero-panel"
    :class="{
      'shadow-active': shadow && shadow.length > 0,
      'wallpaper-mode': wallpaper,
      'aspect-ratio-mode': ratio,
      'centered-mode': centered,
      'bottom-mode': bottom,
    }"
    :style="styleHelper"
  >
    <slot name="backgroundShadow">
      <div class="panel-shadow" />
    </slot>
    <slot name="background">
      <Media
        class="panel-background"
        :media="background"
        :type="backgroundType"
        :thumbnail="backgroundThumbnail"
        :title="backgroundTitle"
        :alt="backgroundAlt"
        :height="backgroundType === 'iframe' ? (panelRef?.clientHeight + 'px') : undefined"
      />
    </slot>
    <div class="panel-content">
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref, type PropType } from "vue";
import { Media } from "../../../index";

const props = defineProps({

  /**
   * Height of panel
   * Min-height default. Become "height" when strict = true
   * Can be %, px, vh, etc...
   */
  height: {
    type: String,
    required: false,
  },

  /**
   * Background of panel
   */
  background: {
    type: String,
    required: false,
  },

  /**
   * Background type
   * Background can be an image, a video, an iframe or a color
   * In case of VIDEO, the type is the codec (es: mp4)
   * In case of CSS, it an image that will be used on background-image
   */
  backgroundType: {
    type: String as PropType<"image" | "iframe" | "color" | "css" | string>,
    default: () => "image",
  },

  /**
   * The thumbnail is used on image for lazyload (TODO)
   * or in the video as poster
   */
  backgroundThumbnail: {
    type: String,
    required: false,
  },

  /**
   * Background title TAG
   * TODO with CSS use ARIA
   */
  backgroundTitle: {
    type: String,
    default: () => "",
  },

  /**
   * Background title ALT
   * TODO with CSS use ARIA
   */
  backgroundAlt: {
    type: String,
    default: () => "",
  },

  /**
   * Shadow to apply between content and background,
   * to enhance readability
   */
  shadow: {
    type: String,
    required: false
  },

  /**
   * shadow opacity
   */
  shadowOpacity: {
    type: Number,
    default: () => 0.4,
  },

  /**
   * Content is centered
   * (default: top left)
   */
  centered: {
    type: Boolean,
    default: () => false,
  },

  /**
   * Content is at the bottom
   * (default: top)
   */
  bottom: {
    type: Boolean,
    default: () => false,
  },

  /**
   * Works with {height}
   * true = height
   * false = min-height
   */
  strict: {
    type: Boolean,
    default: () => false,
  },

  /**
   * SHORTCUT: height at 100vh
   * (use {strict} separately)
   */
  hero: {
    type: Boolean,
    default: () => false,
  },

  /**
   * Size of panel will be based on panel-background
   */
  wallpaper: {
    type: Boolean,
    default: () => false,
  },

  /**
   * Background ratio (if needed)
   * ex: 16:9, 16/9, 16-9 or 16.9
   */
  ratio: {
    type: String,
    required: false,
  },
});

/**
 * Ref of Panel and Iframe
 *  - to get width and height and use them on unruly iframes
 */
const panelRef = ref();

/**
 * ratio translation
 * TODO : / - .
 */
const trueRatio = computed(() =>  {
  if (!props.ratio) {
    return 1;
  }
  // split for every possible delimeter
  const ratio = props.ratio.split(':').join(',').split('/').join(',').split('-').join(',').split('.').join(',').split(',');
  return parseFloat(
    (parseFloat(ratio[1]) / parseFloat(ratio[0])).toFixed(2)
  );
});

/**
 * Styles or CSS variables needed
 * TODO use AspectRatio component?
 */
const styleHelper = computed(() =>  {
  // all styles
  const styles :Record<string, string | number> = {
    '--hero-panel-aspect-ratio': trueRatio.value * 100 + '%'
  };

  // height
  if(props.hero)
    styles[props.strict ? "height" : "min-height"] = "100vh";
  if(props.height)
    styles[props.strict ? "height" : "min-height"] = props.height;

  // shadow
  if(props.shadow){
    styles['--hero-panel-shadow-color'] = props.shadow;
    styles['--hero-panel-shadow-opacity'] = props.shadowOpacity;
  }

  return styles;
});
</script>

<style lang="scss">
$hero-panel-mobile-threshold: 600px !default;
$hero-panel-shadow-opacity: var(--hero-panel-shadow-opacity, 0.4) !default;
$hero-panel-shadow-color: var(--hero-panel-shadow-color, #000) !default;

// @use "@guebbit/css-ui/src/molecules/panels/SimplePanel";

//.hero-panel {
//  // TODO
//  // TODO?? REMOVE overflow: hidden FROM &.aspect-ratio-mode  (for future mid-section or overflowing content)
//  &.aspect-ratio-mode {
//    overflow: hidden;
//    .panel-content{
//      //
//    }
//    .panel-background {
//      object-fit: initial;
//      height: 0;
//      padding-bottom: var(--hero-panel-aspect-ratio);
//    }
//  }
//}
</style>
