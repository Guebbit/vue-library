# Panel
<Badge type="tip">Basic</Badge> <Badge type="info">Panel</Badge> 

## Complete

Example complete with almost everything

<Panel
    background="http://placekitten.com/1000/1000"
    hero
    centered
    bottom
    shadow="blue"
    shadowOpacity="0.75"
>
    <div class="content-example">
          Content with 200px height
    </div>
</Panel>

```html
<Panel
    background="http://placekitten.com/1000/1000"
    hero
    centered
    bottom
    shadow="blue"
    shadowOpacity="0.75"
>
    <div class="content-example">
        Lorem ipsum sit dolor
    </div>
</Panel>
```

## Basic

Height is the same as the content.
Based on the "aspect ratio" and relative sizes, not absolute

<Panel
    background="http://placekitten.com/800/800"
>
    <div class="content-example">
          Content with 200px height
    </div>
</Panel>

```html
<Panel
    background="http://placekitten.com/800/800"
>
    <div class="content-example">
        Content with 200px height
    </div>
</Panel>
```

## Wallpaper (mode)

Height will be the same as the background content

<Panel
    background="http://placekitten.com/500/500"
    wallpaper
>
    <div class="content-example">
          Content with 200px height
    </div>
</Panel>

## Hero (shortcut)

Height will be 100vh

<Panel
    background="http://placekitten.com/800/800"
    wallpaper
>
    <div class="content-example">
          Content with 200px height
    </div>
</Panel>

## Custom height

Custom height. "Strict" it will be min-height

<Panel
    background="http://placekitten.com/800/800"
    height="500px"
    strict
>
    <div class="content-example">
          Content with 200px height
    </div>
</Panel>

```html
    <Panel
        background="http://placekitten.com/800/800"
    >
        <div class="content-example">
            Content with 200px height
        </div>
    </Panel>
```



## Background (CSS)

Background as background-image CSS instruction

<Panel
    background="http://placekitten.com/800/800"
    height="500px"
>
    <div class="content-example">
          Content with 200px height
    </div>
</Panel>

```html{2,3}
<Panel
    background="http://placekitten.com/800/800"
    backgroundType="css"
>
    <div class="content-example">
        Lorem Ipsum Sit Dolor Amet
    </div>
</Panel>
```

## Background (Using slots)

Slots are important to better customize the component.
For having like vuetify <v-img /> instead of native <img />

<Panel height="500px">
    <template #background>
      <img
          class="panel-background"
          src="http://placekitten.com/800/800"
      />
    </template>
    <div class="content-example">
        Lorem Ipsum Sit Dolor Amet
    </div>
</Panel>

```html{2,7}
<Panel>
    <template #background>
      <img
          class="panel-background"
          src="http://placekitten.com/800/400"
      />
    </template>
    <div class="content-example">
        Lorem Ipsum Sit Dolor Amet
    </div>
</Panel>
```

## Background (CSS color)

<Panel
    background="red"
    backgroundType="color"
    height="500px"
>
    <div class="content-example">
        Lorem Ipsum Sit Dolor Amet
    </div>
</Panel>

```html{2,3}
<Panel
    background="blue"
    backgroundType="color"
>
    <div class="content-example">
        Lorem Ipsum Sit Dolor Amet
    </div>
</Panel>
```

## Background (video, horizontal)

<Panel
    background="http://assets.guebbit.com/guebbit/video/normal.mp4"
    backgroundType="video/mp4"
    height="500px"
>
    <div class="content-example">
        Lorem Ipsum Sit Dolor Amet
    </div>
</Panel>

```html{2,3}
<Panel
    background="http://assets.guebbit.com/guebbit/video/normal.mp4"
    backgroundType="video/mp4"
    height="500px"
>
    <div class="content-example">
        Lorem Ipsum Sit Dolor Amet
    </div>
</Panel>
```

## Background (video, vertical)

<Panel
    background="http://assets.guebbit.com/guebbit/video/tall.mp4"
    backgroundType="video/mp4"
    height="500px"
>
    <div class="content-example">
        Lorem Ipsum Sit Dolor Amet
    </div>
</Panel>

```html{2,3}
<Panel
    background="http://assets.guebbit.com/guebbit/video/normal.mp4"
    backgroundType="video/mp4"
>
    <div class="content-example">
        Lorem Ipsum Sit Dolor Amet
    </div>
</Panel>
```

## Background (video, horizontal, very long)

<Panel
    background="http://assets.guebbit.com/guebbit/video/long.mp4"
    backgroundType="video/mp4"
    height="500px"
>
    <div class="content-example">
        Lorem Ipsum Sit Dolor Amet
    </div>
</Panel>

```html{2,3}
<Panel
    background="http://assets.guebbit.com/guebbit/video/normal.mp4"
    backgroundType="video/mp4"
>
    <div class="content-example">
        Lorem Ipsum Sit Dolor Amet
    </div>
</Panel>
```

## Iframe (regular)

Iframes are very difficult to manage so the result can be suboptimal or very bad.

::: danger
IMPORTANT: Use RATIO to adjust iframe size, ESPECIALLY on wallapaper mode
:::

<Panel
    background="http://assets.guebbit.com/guebbit/video/normal.mp4"
    backgroundType="iframe"
    ratio="16:9"
    height="500px"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

## Iframe (vertical)

<Panel
    background="http://assets.guebbit.com/guebbit/video/tall.mp4"
    backgroundType="iframe"
    height="500px"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

## Iframe YOUTUBE (regular)

<Panel
    background="https://www.youtube.com/embed/iRwAekCcFow?playlist=iRwAekCcFow&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
    backgroundType="iframe"
    ratio="16:9"
    height="500px"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

## Iframe YOUTUBE (vertical)

<Panel
    background="https://www.youtube.com/embed/bdPZ2Cu1vNU?playlist=bdPZ2Cu1vNU&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
    backgroundType="iframe"
    ratio="16:9"
    height="500px"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

```html{2,3}
<Panel
    background="PATH_TO_VIDEO"
    backgroundType="iframe"
    ratio="16:9"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>
```

## API

The BASIC Panel component

| Prop                  | Description                                     | Accepted Values                              | Default     |
|:----------------------|:------------------------------------------------|:---------------------------------------------|:------------|
| `height`              | Panel's min-height, work with {strict}          | `px`, `vh`, `%`, etc                         | `undefined` |
| `background`          | Background media of panel (path)                | `string`                                     | `undefined` |
| `backgroundType`      | Background type of media (CSS is an image)      | `image`, `video`, `iframe`, `color` or `css` | `image`     |
| `backgroundThumbnail` | Background image's thumbnail or video post      | `string`                                     | `undefined` |
| `backgroundTitle`     | Background TAG TITLE                            | `string`                                     | `false`     |
| `backgroundAlt`       | Background TAG ALT                              | `string`                                     | `false`     |
| `shadow`              | shadow TAG color                                | `string`                                     | `#000000`   |
| `shadowOpacity`       | shadow TAG opacity                              | `string`                                     | `0.4`       |
| `centered`            | Content is centered                             | `boolean`                                    | `false`     |
| `bottom`              | Content will be bottom                          | `boolean`                                    | `false`     |
| `strict`              | If true, {height} become fixed height           | `boolean`                                    | `false`     |
| `hero`                | SHORTCUT: if height is not set it becomes 100vh | `boolean`                                    | `false`     |
| `wallpaper`           | Size of panel will be based on panel-background | `boolean`                                    | `false`     |
| `ratio`               | Background ratio (dynamic size)                 | `string` like 16/9                           | `undefined` |

## Slots

| Slot               | Description        |
|:-------------------|:-------------------|
| `default`          | Content of Panel   |
| `background`       | Background element |
| `backgroundShadow` | Background shadow  |

<style lang="scss">
@import "../theme.scss";

.content-example{
    height: 200px;
    background-color: rgba(red, 0.5);
    color: white;
    border: 4px solid red;
    font-weight: 600;
    font-size: 2em;
    padding: 24px;
}
</style>

<script setup>
import { Panel } from "../../src/";
</script>
