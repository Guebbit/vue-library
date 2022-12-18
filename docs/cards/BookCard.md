# Action Panel
<Badge type="info">Card</Badge>


## Default width AND height

### (book or videogame)

<BookCard
    title="LOREM IPSUM"
    author="TOAST"
    color="#00ff00"
    image="https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1.jpg"
    spine="https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1-spine.jpg"
/>

### Squared (music cd)

<BookCard
    title="LOREM IPSUM"
    author="TOAST"
    color="#00ff00"
    image="https://placekitten.com/500/500"
    logo="https://placekitten.com/100/100"
/>

### Very long

<BookCard
    image="https://placekitten.com/700/200"
    logo="https://placekitten.com/200/200"
/>

```html
<BookCard
    title="LOREM IPSUM"
    author="TOAST"
    color="#00ff00"
    image="https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1.jpg"
    spine="https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1-spine.jpg"
/>
```

## With slots

<BookCard
    image="https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1.jpg"
    spine="https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1-spine.jpg"
>
    <h1>Lorem Ipsum Sit Dolor</h1>
    <template #spine>
        <h1>Ipsum</h1>
    </template>
</BookCard>

```html
<BookCard
    image="https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1.jpg"
    spine="https://assets.guebbit.com/rogheneach/images/volumes/rogh-vol1-spine.jpg"
>
    <h1><b>Lorem Ipsum Sit Dolor</b></h1>
    <template #spine>
        <h1><b>Ipsum</b></h1>
    </template>
</BookCard>
```

## Custom ratio

### 4.25/6.87

<BookCard
    ratio="4.25/6.87"
    image="https://placekitten.com/400/700"
    spine="https://placekitten.com/300/300"
/>

### 16/9
<BookCard
    ratio="16/9"
    image="https://placekitten.com/1600/900"
    spine="https://placekitten.com/700/700"
/>

```html
<BookCard
    ratio="4.25/6.87"
    image="https://placekitten.com/400/700"
    spine="https://placekitten.com/300/300"
/>
```

## Custom ratio with width/height

### ratio 4.25/6.87 - width 200

<BookCard
    ratio="4.25/6.87"
    width="200"
    image="https://placekitten.com/700/700"
    spine="https://placekitten.com/400/400"
/>

### ratio 4.25/6.87 - height 200

<BookCard
    ratio="4.25/6.87"
    height="200"
    image="https://placekitten.com/700/700"
    spine="https://placekitten.com/400/400"
/>

### ratio 16/9 - height 200

<BookCard
    ratio="16/9"
    height="200"
    image="https://placekitten.com/700/700"
    spine="https://placekitten.com/400/400"
/>

### ratio 16/9 - width 200
<BookCard
    ratio="16/9"
    width="200"
    image="https://placekitten.com/700/700"
    spine="https://placekitten.com/400/400"
/>

```html
<BookCard
    ratio="4.25/6.87"
    width="200"
    image="https://placekitten.com/700/700"
    spine="https://placekitten.com/400/400"
/>
```

## API

The BASIC Panel component

| Prop             | Description                | Accepted Values | Default   |
|:-----------------|:---------------------------|:----------------|:----------|
| `title`          | Title of card              | `string`        | `empty`   |
| `author`         | Author of card             | `string`        | `empty`   |
| `color`          | Text color                 | `string`        | `#FFFFFF` |
| `rotation`       | Rotation strength, max 7.5 | `number`        | `3`       |
| `hover`          | If rotate on hover         | `boolean`       | `true`    |
| `height`         | Height of card             | `string`        | `none`    |
| `width`          | Width of card              | `string`        | `none`    |
| `ratio`          | Width and height ratio     | `string`        | `none`    |
| `image`          | Main image                 | `string`        | `none`    |
| `spine`          | Spine image                | `string`        | `none`    |
| `spineWidth`     | Spine width                | `string`        | `50px`    |
| `logo`           | Logo (bottom right)        | `string`        | `none`    |

## Slots

| Slot      | Description          |
|:----------|:---------------------|
| `default` | Content on the front |
| `spine`   | Content on the spine |

<style lang="scss">
@import "../theme.scss";

.book-card{
    max-width: 300px;
}
</style>

<script setup>
import { BookCard } from "../../src/";
</script>
