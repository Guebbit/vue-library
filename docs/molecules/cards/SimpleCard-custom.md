# Simple Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>
::: info Original:
[SimpleCard](/molecules/cards/SimpleCard)
:::

## Simple
Custom CSS (or SCSS) variables to change style

<!-- @include: ./SimpleCard-custom-fragment-simple.md -->

<style lang="scss">
@use "../../theme.scss" as theme;
</style>

<script setup>
import { SimpleCard, SimpleCardHeader, SimpleCardContent, SimpleCardFooter, SimpleCardActions, SimpleCardMedia, SimpleButton } from '../../../src/';

const exampleText = 'Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor'
</script>
