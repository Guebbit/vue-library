# Advancing Moon Reveal
<Badge type="tip">Atoms</Badge> <Badge type="info">Animations</Badge> <Badge type="info">Reveal</Badge>

## Instructions

```ts
import { AdvancingMoonReveal } from "@guebbit/vue-library";
```

## Basics


::: raw
<div class="dev-section">
    <AdvancingMoonReveal>
        <img src="https://placedog.net/400/400" />
    </AdvancingMoonReveal>
</div>
:::

```html
<AdvancingMoonReveal>
    <img src="https://placedog.net/400/400" />
</AdvancingMoonReveal>
```


## Other

::: raw
<div class="dev-section">
    <AdvancingMoonReveal>
        <img src="https://placedog.net/400/400" />
    </AdvancingMoonReveal>
    <AdvancingMoonReveal
        :opacity-start="1"
        :scale-end="1.5"
    >
        <img src="https://placedog.net/400/400" />
    </AdvancingMoonReveal>
    <AdvancingMoonReveal
        :slide-x-start="0"
        slide-x-end="-60%"
    >
        <img src="https://placedog.net/400/400" />
    </AdvancingMoonReveal>
    <AdvancingMoonReveal
        :slide-x-start="0"
        slide-x-end="60%"
    >
        <img src="https://placedog.net/400/400" />
    </AdvancingMoonReveal>
    <AdvancingMoonReveal
        :slide-x-start="0"
    >
        <img src="https://placedog.net/400/400" />
    </AdvancingMoonReveal>
</div>
:::

::: code-group
```html [Default]
<AdvancingMoonReveal>
    <img src="https://placedog.net/400/400" />
</AdvancingMoonReveal>
```
:::

## Inverted

::: raw
<div class="dev-section">
    <AdvancingMoonReveal
        inverted
    >
        <img src="https://placedog.net/400/400" />
    </AdvancingMoonReveal>
</div>
:::

::: code-group
```html
<AdvancingMoonReveal
    inverted
>
    <img src="https://placedog.net/400/400" />
</AdvancingMoonReveal>
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
import { AdvancingMoonReveal } from '../../../src/'
</script>
