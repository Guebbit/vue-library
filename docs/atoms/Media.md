# Panel
<Badge type="tip">Basic</Badge> <Badge type="info">Atom</Badge>

## Complete

::: warning
TODO mettere ratio?
<br/>
TODO gestire thumbnail & lazyload
:::

<div class="dev-section">
    <Media
        media="http://placekitten.com/800/800"
        type="image"
        alt="alt text"
        title="title text"
        width="200px"
        height="200px"
    />
</div>

```html
<Media
    media="http://placekitten.com/400/400"
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
        media="http://placekitten.com/400/400"
    />
</div>

```html
<Media
    media="http://placekitten.com/400/400"
/>
```

## Color
Width and Height needed

<div class="dev-section">
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

```html
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
```

## CSS
Image with *background-image* CSS
Width and Height needed

<div class="dev-section">
    <Media
        media="http://placekitten.com/400/400"
        type="css"
        width="400px"
        height="200px"
    />
</div>

```html
<Media
    media="http://placekitten.com/400/400"
    type="css"
    width="400px"
    height="200px"
/>
```

## Iframe
Width and Height needed

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

```html
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
```

## video

<div class="dev-section">
    <Media
        media="http://assets.guebbit.com/guebbit/video/normal.mp4"
        type="video/mp4"
    />
</div>

```html
<Media
    media="http://assets.guebbit.com/guebbit/video/normal.mp4"
    type="video/mp4"
/>
```

## API

The BASIC Panel component

| Prop        | Description                     | Accepted Values                               | Default |
|:------------|:--------------------------------|:----------------------------------------------|:--------|
| `media`     | Media path or color instruction | `string`                                      | `none`  |
| `type`      | Type of media                   | `image`, `video`, `iframe`, `color` or `css`  | `image` |
| `height`    | Fixed height of media           | `string`                                      | `auto`  |
| `width`     | Fixed width of media            | `string`                                      | `auto`  |
| `thumbnail` | TODO                            | `string`                                      | `empty` |
| `title`     | ARIA title                      | `string`                                      | `empty` |
| `alt`       | ARIA Alt                        | `string`                                      | `empty` |

## Slots

| Slot        | Description                  |
|:------------|:-----------------------------|
| `image`     | Alternative image component  |
| `color`     | Alternative color component  |
| `css`       | Alternative css component    |
| `iframe`    | Alternative iframe component |
| `video`     | Alternative video component  |

<style lang="scss">
@import "../theme.scss";
</style>

<script setup>
import { Media } from "../../src/";
</script>
