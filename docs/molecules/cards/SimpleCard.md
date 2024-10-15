# Simple Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

## Instructions
::: code-group
```ts [Simple]
import { Card } from "@guebbit/vue-library";
```
```ts [Default]
import {
    Card,
    CardHeader,
    CardFooter,
    CardActions,
    CardMedia
} from "@guebbit/vue-library";
```
```ts [Same but more specific]
import {
    SimpleCard,
    SimpleCardHeader,
    SimpleCardFooter,
    SimpleCardActions,
    SimpleCardMedia
} from "@guebbit/vue-library";
```
:::

<!-- @include: ./SimpleCard-fragment-basics.md -->
<!-- @include: ./SimpleCard-fragment-variants.md -->
<!-- @include: ./SimpleCard-fragment-borders.md -->
<!-- @include: ./SimpleCard-fragment-icons.md -->
<!-- @include: ./SimpleCard-fragment-images.md -->

## Props

TODO

## Slots

TODO

## Events

TODO

<style lang="scss">
@use "../../theme.scss" as theme;
</style>

<script setup>
import { SimpleCard, SimpleCardHeader, SimpleCardContent, SimpleCardFooter, SimpleCardActions, SimpleCardMedia, SimpleButton } from '../../../src/';

const pageTheme = "";
const exampleText = 'Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor'
</script>
