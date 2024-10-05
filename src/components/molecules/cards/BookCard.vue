<template>
  <div
    class="book-card"
    :class="{
      'book-custom-size': width || height,
      'book-custom-aspect-ratio': ratio,
      'is-hoverable': hover,
    }"
    :style="{
      '--book-card-height': height ? trueHeight + 'px' : null,
      '--book-card-width': width ? trueWidth + 'px' : null,
      '--book-card-ratio': trueRatio * 100 + '%',
      '--book-card-color': color,
      '--book-card-rotation': rotation,
      '--book-card-spine-width': spineWidth,
    }"
  >
    <div>
      <div class="book-cover">
        <div class="content-cover">
          <slot />
        </div>
        <img
          class="book-cover-image"
          :src="image"
          :alt="title"
          :title="title"
        >
        <p
          v-show="title"
          class="card-top"
        >
          {{ title }}
        </p>
        <div
          v-show="logo"
          class="card-bottom"
        >
          <img :src="logo">
        </div>
        <p
          v-show="!logo && author"
          class="card-bottom"
        >
          {{ author }}
        </p>
      </div>
      <div class="book-spine">
        <div class="content-spine">
          <slot name="spine" />
        </div>
        <img
          class="book-spine-image"
          :src="spine ? spine : image"
          :alt="author"
          :title="author"
        >
        <p
          v-show="title"
          class="card-top"
        >
          {{ title }}
        </p>
        <div
          v-show="logo"
          class="card-bottom"
        >
          <img :src="logo">
        </div>
        <p
          v-show="!logo && author"
          class="card-bottom"
        >
          {{ author }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    default: () => "#FFFFFF"
  },
  rotation: {
    type: Number,
    default: () => 3,
    validator: (value :number) => value < 7.5 // max 7.5
  },
  hover: {
    type: Boolean,
    default: () => true,
  },

  height: {
    type: Number,
    required: false,
  },
  width: {
    type: Number,
    required: false,
  },
  ratio: {
    type: String,
    required: false,
  },

  image: {
    type: String,
    required: false,
  },
  spine: {
    type: String,
    required: false,
  },
  spineWidth: {
    type: String,
    default: () => "50px",
  },
  logo: {
    type: String,
    required: false,
  },
})

/**
 *
 */
const trueRatio = computed(() => {
  if (!props.ratio) {
    return 1;
  }
  const ratio = props.ratio.split("/");
  return parseFloat(
    (parseFloat(ratio[1]) / parseFloat(ratio[0])).toFixed(2)
  );
});

/**
 *
 */
const trueHeight = computed(() => {
  return props.height
    ? props.height
    : props.width
      ? props.width * trueRatio.value
      : null;
});

/**
 *
 */
const trueWidth = computed(() => {
  return props.width
    ? props.width
    : props.height
      ? props.height * trueRatio.value
      : null;
});
</script>

<style lang="scss">
// @use "@guebbit/css-ui/src/molecules/cards/BookCard";

//.book-card22222 {
//  position: relative;
//  margin: 0 auto;
//  color: var(--book-card-color);
//  -webkit-perspective: 1200px;
//  perspective: 1200px;
//  overflow: hidden;
//  padding: calc(var(--book-card-rotation) * 2%) 0; //TODO fare meglio
//
//  img {
//    vertical-align: middle;
//  }
//  & > div {
//    width: 100%;
//    height: 100%;
//    box-shadow: 2px 2px 6px rgba(black, 0.7);
//    transition: 0.75s;
//    -webkit-transform-style: preserve-3d;
//    transform-style: preserve-3d;
//    &:after {
//      content: "";
//      position: absolute;
//      top: 0;
//      bottom: 0;
//      left: 0;
//      width: 5px;
//      z-index: 3;
//      background: -webkit-linear-gradient(
//        to right,
//        transparent,
//        rgba(black, 0.2)
//      );
//      background: linear-gradient(to right, transparent, rgba(black, 0.2));
//      transform: translateZ(1px);
//    }
//  }
//
//  .book-cover {
//    .book-cover-image {
//      position: relative;
//      width: 100%;
//    }
//    .card-top,
//    .card-bottom {
//      position: absolute;
//      img {
//        max-height: 100px;
//        max-width: 100px;
//      }
//    }
//    .card-top {
//      top: 0;
//      left: 0;
//    }
//    .card-bottom {
//      bottom: 0;
//      right: 0;
//    }
//    p {
//      white-space: nowrap;
//      text-align: left;
//      margin: 24px;
//      text-shadow: 0 0 4px black;
//      &.card-top {
//        font-size: 2em;
//      }
//    }
//  }
//
//  .book-spine {
//    position: absolute;
//    bottom: 0;
//    top: 0;
//    width: var(--book-card-spine-width);
//    z-index: 1;
//    overflow: hidden;
//    transform: rotateY(-90deg)
//      translateX(calc(-1 * var(--book-card-spine-width))); // fake error
//    -webkit-transform-origin: 0 0;
//    transform-origin: 0 0;
//
//    .book-spine-image {
//      position: absolute;
//      top: 0;
//      width: 100%;
//      height: 100%;
//      object-fit: cover;
//      -o-object-fit: cover;
//      z-index: -1;
//    }
//    .card-top,
//    .card-bottom {
//      display: block;
//      position: absolute;
//      img {
//        max-width: 100%;
//        max-height: 100%;
//      }
//    }
//    .card-top {
//      top: 0;
//    }
//    .card-bottom {
//      bottom: 0;
//    }
//    p {
//      white-space: nowrap;
//      text-align: left;
//      left: calc(var(--book-card-spine-width) * 0.75);
//      transform: rotateZ(90deg);
//      -webkit-transform-origin: 0 0;
//      transform-origin: 0 0;
//    }
//    //SHADOW
//    &:before {
//      display: block;
//      content: "";
//      width: 100%;
//      height: 100%;
//      background: rgba(black, 0.2);
//    }
//  }
//
//  .content-cover,
//  .content-spine {
//    position: absolute;
//    top: 0;
//    left: 0;
//    z-index: 1;
//  }
//  .content-spine {
//    left: calc(var(--book-card-spine-width) * 0.75);
//    transform: rotateZ(90deg);
//    -webkit-transform-origin: 0 0;
//    transform-origin: 0 0;
//  }
//
//  &.book-custom-aspect-ratio,
//  &.book-custom-size {
//    .book-cover {
//      position: relative;
//      top: 0;
//      width: 100%;
//      height: 100%;
//      z-index: 2;
//      .book-cover-image {
//        position: absolute;
//        width: 100%;
//        height: 100%;
//        object-fit: cover;
//        -o-object-fit: cover;
//        z-index: -1;
//      }
//    }
//  }
//
//  // if width or height are set
//  &.book-custom-size {
//    height: var(--book-card-height);
//    width: var(--book-card-width);
//  }
//
//  &.book-custom-aspect-ratio {
//    .book-cover {
//      padding-bottom: var(--book-card-ratio);
//    }
//  }
//
//  &.active,
//  &.is-hoverable:hover {
//    & > div {
//      transform: translateX(calc(2px * var(--book-card-rotation)))
//        translateZ(calc(7px * var(--book-card-rotation)))
//        translateX(calc(7px * var(--book-card-rotation)))
//        rotateY(calc(12deg * var(--book-card-rotation)));
//    }
//  }
//}
</style>
