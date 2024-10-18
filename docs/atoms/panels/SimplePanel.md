# Simple Panel
<Badge type="tip">Molecules</Badge> <Badge type="info">Panel</Badge>

## Instructions

```ts
import { SimplePanel } from "@guebbit/vue-library";
import { Panel } from "@guebbit/vue-library";
```

## Basics

::: raw
<div>
    <SimplePanel 
        background="https://placedog.net/1000/1000" 
        height="500px"
    >
        <div class="content-example">Regular</div>
    </SimplePanel>
</div>
:::

::: code-group
```html
<SimplePanel
    background="https://placedog.net/1000/1000"
    height="500px"
>
    <div class="content-example">Basics</div>
</SimplePanel>
```
:::


## Overlay (and shadow text)

::: raw
<div>
    <SimplePanel 
        background="https://placedog.net/1000/1000" 
        height="500px"
        overlay
    >
        <div class="content-example">
            Overlay
        </div>
    </SimplePanel>
    <SimplePanel 
        background="https://placedog.net/1000/1000" 
        height="500px"
        overlay
        highlight
    >
        <span style="font-size: 5em; line-height: 1">
            This text has shadow to make it  more visible
        </span>
    </SimplePanel>
</div>
:::

::: code-group
```html [Overlay]
<SimplePanel 
    background="https://placedog.net/1000/1000" 
    height="500px"
    overlay
>
    <div class="content-example">
        Overlay
    </div>
</SimplePanel>
``` 
```html [Shadow text]
<SimplePanel 
    background="https://placedog.net/1000/1000" 
    height="500px"
    overlay
    highlight
>
    <span style="font-size: 5em; line-height: 1">
        This text has shadow to make it  more visible
    </span>
</SimplePanel>
```
:::


## Image ratio

::: raw
<div>
    <SimplePanel 
        height="500px"
        background="https://placedog.net/1000/1000"
        ratio="16/9"
    >
        <div class="content-example">Ratio</div>
    </SimplePanel>
</div>
:::

```html
<SimplePanel
    background="https://placedog.net/1000/1000"
    ratio="16/9"
>
    <div class="content-example">Ratio</div>
</SimplePanel>
```


## Stretched image

::: raw
<div>
    <SimplePanel 
        background="https://placedog.net/200/1000" 
        height="500px"
    >
        <div class="content-example">Height Stretch</div>
    </SimplePanel>
    <SimplePanel 
        background="https://placedog.net/1000/200" 
        height="500px"
    >
        <div class="content-example">Width Stretch</div>
    </SimplePanel>
</div>
:::

::: code-group
```html [Height stretch]
<SimplePanel 
    background="https://placedog.net/200/1000" 
    height="500px"
>
    <div class="content-example">Height Stretch</div>
</SimplePanel>
```
```html [Width stretch]
<SimplePanel 
    background="https://placedog.net/1000/200" 
    height="500px"
>
    <div class="content-example">Width Stretch</div>
</SimplePanel>
```
:::


## Content position

::: raw
<div>
    <SimplePanel 
        background="https://placedog.net/1000/1000" 
        height="500px"
        content-centered
    >
        <div class="content-example">Centered</div>
    </SimplePanel>
    <SimplePanel 
        background="https://placedog.net/1000/1000" 
        height="500px"
        content-bottom
    >
        <div class="content-example">Bottom</div>
    </SimplePanel>
</div>
:::

::: code-group
```html [Centered]
<SimplePanel 
    background="https://placedog.net/1000/1000" 
    height="500px"
    content-centered
>
    <div class="content-example">Centered</div>
</SimplePanel>
```
```html [Bottom]
<SimplePanel 
    background="https://placedog.net/1000/1000" 
    height="500px"
    content-bottom
>
    <div class="content-example">Bottom</div>
</SimplePanel>
```
:::


## Size as content

::: raw
<div>
    <SimplePanel 
        background="https://placedog.net/400/600"
        size-as-content
    >
        <div class="content-example">Size as content</div>
    </SimplePanel>
</div>
:::

::: code-group
```html
<SimplePanel
    background="https://placedog.net/400/600"
    size-as-content
>
    <div class="content-example">Size as content</div>
</SimplePanel>
```
:::



## Props
TODO

## Slots
TODO

## Events
TODO

<style lang="scss">
@use "../../theme.scss";

.content-example{
    height: 300px;
    width: 300px;
    background-color: rgba(255 0 255 / 0.5);
    border: 4px solid red;
    color: #fff;
    font-weight: 600;
    font-size: 2em;
    line-height: 1.5;
    padding: 24px;
}
</style>

<script setup>
import { SimplePanel } from '../../../src/';
</script>
