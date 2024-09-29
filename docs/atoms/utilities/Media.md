# Media
<Badge type="tip">Atom</Badge> <Badge type="tip">Basic</Badge>

// TODO ovunque
## Component Import

```html
import { Media } from "@guebbit/vue-library";
```

## Image (complete)

<div class="dev-section">
    <Media
        media="http://placedog.net/800/800"
        type="image"
        alt="alt text"
        title="title text"
        width="200px"
        height="200px"
    />
</div>

```html
<Media
    media="http://placedog.net/800/800"
    type="image"
    alt="alt text"
    title="title text"
    width="200px"
    height="200px"
/>
```

## Image (default)

<div class="dev-section">
    <Media
        media="http://placedog.net/400/400"
    />
</div>

```html
<Media
    media="http://placedog.net/400/400"
/>
```

## Color
Width and Height needed (if not present in other ways)

<div class="dev-section" style="gap:1em">
    <Media
        media="#00bcd4"
        type="color"
        width="400px"
        height="200px"
    />
    <Media
        media="red"
        type="color"
        width="400px"
        height="200px"
    />
</div>

::: code-group
```html [hex]
<Media
    media="#00bcd4"
    type="color"
    width="400px"
    height="200px"
/>
```
```html [name]
<Media
    media="red"
    type="color"
    width="400px"
    height="200px"
/>
```
:::

## CSS image
Image with *background-image* CSS
Width and Height needed (if not present in other ways)

<div class="dev-section">
    <Media
        media="http://placedog.net/400/400"
        type="css"
        width="400px"
        height="200px"
    />
</div>

```html
<Media
    media="http://placedog.net/400/400"
    type="css"
    width="400px"
    height="200px"
/>
```

## Video

<div class="dev-section">
    <Media
        media="http://assets.guebbit.com/guebbit/video/normal.mp4"
        thumbnail="http://placedog.net/400/400"
        type="video/mp4"
    />
</div>

```html
<Media
    media="http://assets.guebbit.com/guebbit/video/normal.mp4"
    type="video/mp4"
/>
```

## Iframe
Width and Height needed (if not present in other ways)

<div class="dev-section">
    <Media
        media="http://assets.guebbit.com/guebbit/video/normal.mp4"
        type="iframe"
        width="400px"
        height="200px"
    />
    <Media
        media="https://www.youtube.com/embed/iRwAekCcFow?playlist=iRwAekCcFow&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
        type="iframe"
        width="400px"
        height="200px"
    />
</div>


::: code-group
```html [link to regula video]
<Media
    media="http://assets.guebbit.com/guebbit/video/normal.mp4"
    type="iframe"
    width="400px"
    height="200px"
/>
```
```html [link to youtube]
<Media
    media="https://www.youtube.com/embed/iRwAekCcFow?playlist=iRwAekCcFow&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
    type="iframe"
    width="400px"
    height="200px"
/>
```
:::


## Lazyload

<div class="dev-section">
    <Media
        media="http://placedog.net/400/200"
        thumbnail="http://placedog.net/100/100"
        :lazy="true"
    />
    <Media
        media="http://placedog.net/400/400"
        thumbnail="http://placedog.net/100/100"
        type="css"
        width="400px"
        height="200px"
    />
    <Media
        media="http://assets.guebbit.com/guebbit/video/normal.mp4"
        thumbnail="http://placedog.net/400/200"
        type="video/mp4"
        :lazy="true"
    />
    <Media
        media="http://assets.guebbit.com/guebbit/video/normal.mp4"
        type="iframe"
        width="400px"
        height="200px"
        :lazy="true"
    />
</div>

::: code-group
```html [image]
<div class="dev-section">
  <Media
    media="http://placedog.net/800/800"
    thumbnail="http://placedog.net/200/200"
    :lazy="true"
  />
</div>
```
```html [css image]
<div class="dev-section">
  <Media
    media="http://placedog.net/400/400"
    thumbnail="http://placedog.net/100/100"
    type="css"
    width="400px"
    height="200px"
  />
```
```html [video]
<div class="dev-section">
  <Media
    media="http://placedog.net/800/800"
    thumbnail="http://placedog.net/200/200"
    :lazy="true"
  />
</div>
```
```html [iframe]
<div class="dev-section">
    <Media
        media="http://placedog.net/800/800"
        thumbnail="http://placedog.net/200/200"
        :lazy="true"
    />
</div>
```
:::

## Native lazyload
### (image only)

<div class="dev-section">
    <Media
        media="http://placedog.net/400/400"
        :lazy="true"
    />
</div>

```html
<div class="dev-section">
    <Media
        media="http://placedog.net/400/400"
        :lazy="true"
    />
</div>
```

## API

The BASIC Panel component

| Prop           | Description                                        | Accepted Values                              | Default  |
|:---------------|:---------------------------------------------------|:---------------------------------------------|:---------|
| `media`        | Media path or color instruction                    | `string`                                     | `none`   |
| `type`         | Type of media                                      | `image`, `video`, `iframe`, `color` or `css` | `image`  |
| `height`       | Fixed height of media                              | `string`                                     | `auto`   |
| `width`        | Fixed width of media                               | `string`                                     | `auto`   |
| `thumbnail`    | Thumbnail for lazyload or poster for video         | `string`                                     | `empty`  |
| `lazy`         | Activate lazyload mode                             | `boolean`                                    | `false`  |
| `loadedClass`  | Class that will be set after a successful lazyload | `string`                                     | `loaded` |
| `title`        | ARIA title                                         | `string`                                     | `empty`  |
| `alt`          | ARIA Alt                                           | `string`                                     | `empty`  |

## Slots

| Slot        | Description                  |
|:------------|:-----------------------------|
| `image`     | Alternative image component  |
| `color`     | Alternative color component  |
| `css`       | Alternative css component    |
| `iframe`    | Alternative iframe component |
| `video`     | Alternative video component  |

<style lang="scss">
@import "../../theme.scss";
</style>

<script setup>
import { Media } from "../../../src/";
</script>
