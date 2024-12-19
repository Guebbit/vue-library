# Book Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

## Instructions

```ts
import { BookCard } from "@guebbit/vue-library";
```

<div class="dev-section">
    <BookCard 
        title="Title Lorem Ipsum"
        size-as-content
    >
        <template #cover>
            <img alt="" src="https://placedog.net/400/600" />
        </template>
        <template #spine>
            <img alt="" src="https://placedog.net/100/600" />
        </template>
        <template #spineFooter>
            <svg class="g-vue-card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </template>
    </BookCard>
    <BookCard 
        title="Lorem Ipsum Sit Dolor VIDEO"
        spine-title="Spine title"
        cover="http://assets.guebbit.com/guebbit/video/normal.mp4"
        spine="https://placedog.net/100/600"
        video
        type="video/mp4"
        size-as-content
    />
</div>

::: code-group
```html [Regular]
<BookCard 
    title="Title Lorem Ipsum"
>
    <template #cover>
        <img alt="" src="https://placedog.net/400/600" />
    </template>
    <template #spine>
        <img alt="" src="https://placedog.net/100/600" />
    </template>
    <template #spineFooter>
        <svg class="g-vue-card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </template>
</BookCard>
```
```html [Video]
<BookCard 
    title="Lorem Ipsum Sit Dolor VIDEO"
    spine-title="Spine title"
    cover="http://assets.guebbit.com/guebbit/video/normal.mp4"
    spine="https://placedog.net/100/600"
    video
    type="video/mp4"
/>
```
:::


## Ratio

<div class="dev-section">
    <BookCard 
        title="Lorem Ipsum Sit Dolor RATIO"
        spine-title="Spine title"
        cover="https://placedog.net/1000/1000"
        spine="https://placedog.net/500/500"
        ratio="4/6"
    />
</div>

::: code-group
```html [Regular]

```
:::


## Variants

<div class="dev-section">
    TODO
</div>

::: code-group
```html [Regular]

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
</style>

<script setup>
import { BookCard } from '../../../src/';
</script>
