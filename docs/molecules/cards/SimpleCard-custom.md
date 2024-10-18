# Simple Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>
::: info Original:
[SimpleCard](/molecules/cards/SimpleCard)
:::
Custom CSS and\or elements that, with a just a little, can heavily customize the card


<!-- @include: ./SimpleCard-custom-fragment-simple.md -->

## Glossy Hover Card
Custom CSS (or SCSS) variables to change style

::: raw
<div class="dev-section">
    <SimpleCard
        :color="pageTheme"
        variant="overlay"
        title="Title of Lorem Ipsum"
        subtitle="Subtitle of Lorem Ipsum"
        background="https://placedog.net/1000/400"
        :text="exampleText"
    />
</div>
:::

::: code-group
```html [border and icons mixed colors]
<SimpleCard
    class="custom-advanced-1"
    background="https://placedog.net/1000/400"
/>
```
:::

<style lang="scss">
@use "../../theme.scss" as theme;

.simple-card {
  &.custom-advanced-1 {
  --shadow-color: var(--secondary-500);

    height: 400px;
    width: 300px;
    overflow: hidden;
    box-shadow:
        0 7px 9px -4px rgba(var(--shadow-color) / .6),
        0 14px 21px 2px rgba(var(--shadow-color) / .4),
        0 5px 26px 4px rgba(var(--shadow-color) / .2);

    &:hover {
      transform: translateY(-3px) scale(1.05) rotateX(15deg);

      &:after {
        transform: rotate(25deg);
        top: -40%;
        opacity: 0.15;
      }
    }
  }
}
</style>

<script setup>
import { SimpleCard, SimpleCardHeader, SimpleCardContent, SimpleCardFooter, SimpleCardActions, SimpleCardMedia, SimpleButton } from '../../../src/';

const exampleText = 'Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor'
</script>
