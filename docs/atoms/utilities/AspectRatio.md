# Aspect Ratio
<Badge type="tip">Atom</Badge> <Badge type="tip">Basic</Badge>

## Component Import

```html
import { AspectRatio } from "@guebbit/vue-library";
```

## Images

<div class="dev-section">
    <AspectRatio>
        <Media
            media="http://placedog.net/400/400" 
        />
    </AspectRatio>
    <AspectRatio :ratio="56.25">
        <Media
            media="http://placedog.net/400/400" 
        />
    </AspectRatio>
    <AspectRatio :ratio="75">
        <Media
            media="http://placedog.net/400/400" 
        />
    </AspectRatio>
</div>

::: code-group
```html [100 (default)]
<AspectRatio>
    <Media
        media="http://placedog.net/400/400"
    />
</AspectRatio>
```
```html [16/9]
<AspectRatio :ratio="56.25">
    <Media
        media="http://placedog.net/400/400"
    />
</AspectRatio>
```
```html [4/3]
<AspectRatio :ratio="75">
    <Media
        media="http://placedog.net/400/400"
    />
</AspectRatio>
```
:::

## Video

<div class="dev-section">
    <AspectRatio :ratio="56.25">
        <Media
            media="http://assets.guebbit.com/guebbit/video/normal.mp4"
            thumbnail="http://placedog.net/400/400"
            type="video/mp4"
        />
    </AspectRatio>
</div>

```html
<AspectRatio :ratio="56.25">
    <Media
        media="http://assets.guebbit.com/guebbit/video/normal.mp4"
        thumbnail="http://placedog.net/400/400"
        type="video/mp4"
    />
</AspectRatio>
```

## Iframe

<div class="dev-section">
    <AspectRatio :ratio="56.25">
        <Media
            media="http://assets.guebbit.com/guebbit/video/normal.mp4"
            type="iframe"
        />
    </AspectRatio>
    <AspectRatio :ratio="56.25">
        <Media
            media="https://www.youtube.com/embed/iRwAekCcFow?playlist=iRwAekCcFow&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
            type="iframe"
        />
    </AspectRatio>
</div>

::: code-group
```html [link to regula video]
<AspectRatio :ratio="56.25">
    <Media
        media="http://assets.guebbit.com/guebbit/video/normal.mp4"
        type="iframe"
    />
</AspectRatio>
```
```html [link to youtube]
<AspectRatio :ratio="56.25">
    <Media
        media="https://www.youtube.com/embed/iRwAekCcFow?playlist=iRwAekCcFow&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
        type="iframe"
    />
</AspectRatio>
```
:::


## API

The BASIC Panel component

| Prop           | Description                                        | Accepted Values                              | Default  |
|:---------------|:---------------------------------------------------|:---------------------------------------------|:---------|
| `ratio`        | Fixed ratio of media (percentage)                  | `number`                                     | `empty`  |

## Slots

| Slot      | Description                                           |
|:----------|:------------------------------------------------------|
| `default` | Content of which we want to have a fixed aspect ratio |

<style lang="scss">
@use "../../theme.scss";
</style>

<script setup>
import { Media, AspectRatio } from "../../../src/";
</script>
