# Book Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

## Instructions

```ts
import { BookCard } from "@guebbit/vue-library";
```

<!--
<BookCard 
    title="Lorem Ipsum Sit Dolor"
    author="Lorem Ipsum Author"
    media="https://placedog.net/400/600"
    background="https://placedog.net/100/600"
/>
-->

<div class="book-card animate-on-hover">
    <div>
        <div class="book-cover">
            <div class="card-content">
                <h1>Lorem Ipsum Sit Dolor</h1>
            </div>
            <img class="book-cover-image" alt="" src="https://placedog.net/400/600">
            <div class="card-bottom">
                <img alt="" src="https://placedog.net/100/100">
            </div>
        </div>
        <div class="book-spine">
            <div class="card-content">
                <h1>Lorem Ipsum Sit Dolor</h1>
            </div>
            <img class="card-background" alt="" src="https://placedog.net/100/600">
            <div class="card-bottom">
                <svg class="card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
        </div>
    </div>
</div>




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
