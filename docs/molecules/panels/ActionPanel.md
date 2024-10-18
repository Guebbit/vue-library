# Action Panel
<Badge type="tip">Molecules</Badge> <Badge type="info">Panel</Badge>

## Instructions

```ts
import { ActionPanel } from "@guebbit/vue-library";
```

## Basics

::: raw
<div class="dev-section with-overflow">
    <ActionPanel
        background="https://placedog.net/1000/1000"
        title="LOREM IPSUM SIT DOLOR AMET"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        overlay
    >
        <template #actions>
            <SimpleButton :theme="{ background: 'rgb(var(--primary-500))' }">Lorem</SimpleButton>
            <SimpleButton :theme="{ background: 'rgb(var(--secondary-500))' }">Ipsum</SimpleButton>
        </template>
    </ActionPanel>
</div>
:::

```html
<ActionPanel
    background="https://placedog.net/1000/1000"
    title="LOREM IPSUM SIT DOLOR AMET"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    overlay
>
    <template #actions>
        <SimpleButton :theme="{ background: 'rgb(var(--primary-500))' }">Lorem</SimpleButton>
        <SimpleButton :theme="{ background: 'rgb(var(--secondary-500))' }">Ipsum</SimpleButton>
    </template>
</ActionPanel>
```

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
import { ActionPanel, SimpleButton } from '../../../src/';
</script>
