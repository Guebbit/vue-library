# Simple Button
<Badge type="tip">Atom</Badge> <Badge type="info">buttons</Badge>

## Instructions

```ts
import { SimpleButton } from "@guebbit/vue-library";
```



## Basics

::: raw
<div id="test-slots" class="dev-section">
    <SimpleButton text="DEFAULT"/>
    <SimpleButton>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        DEFAULT
    </SimpleButton>
    <SimpleButton>
        <template #icon>
            <svg class="button-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </template>
        SLOT
    </SimpleButton>
</div>
:::

::: code-group
```html
<SimpleButton>
  <template #icon>
    <img src="https://placedog.net/100/100" alt="Image" class="button-image" />
  </template>
  IMAGE
</SimpleButton>
```
:::


## Default

::: raw
<div id="test-regulars" class="dev-section">
    <SimpleButton disabled>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        DISABLED
    </SimpleButton>
    <SimpleButton image="https://placedog.net/100/100">
        IMAGE
    </SimpleButton>
    <SimpleButton variant="rounded">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        ROUNDED
    </SimpleButton>
    <SimpleButton variant="circular">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        CIRCULAR
    </SimpleButton>
    <SimpleButton variant="pill">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        PILL
    </SimpleButton>
    <SimpleButton variant="flat">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        FLAT
    </SimpleButton>
    <SimpleButton variant="plain">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        PLAIN
    </SimpleButton>
    <SimpleButton variant="plain flat">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        PLAIN & FLAT
    </SimpleButton>
    <SimpleButton variant="elevated">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        ELEVATED
    </SimpleButton>
    <SimpleButton variant="outlined">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        OUTLINED
    </SimpleButton>
</div>
:::

::: code-group

```html [default]
<SimpleButton text="DEFAULT" />
```

```html [default2]
<SimpleButton>
  <svg class="button-icon" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
  DEFAULT
</SimpleButton>
```

```html [disabled]
<SimpleButton disabled>
  <svg class="button-icon" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
  DISABLED
</SimpleButton>
```

```html [image]
<SimpleButton image="https://placedog.net/100/100">
  IMAGE
</SimpleButton>
```

```html [rounded]
<SimpleButton variant="rounded">
  <svg class="button-icon" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
  ROUNDED
</SimpleButton>
```

```html [circular]
<SimpleButton variant="circular">
  <svg class="button-icon" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
  CIRCULAR
</SimpleButton>
```

```html [pill]
<SimpleButton variant="pill">
  <svg class="button-icon" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
  PILL
</SimpleButton>
```

```html [flat]
<SimpleButton variant="flat">
  <svg class="button-icon" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
  FLAT
</SimpleButton>
```

```html [plain]
<SimpleButton variant="plain">
  <svg class="button-icon" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
  PLAIN
</SimpleButton>
```

```html [plain & flat]
<SimpleButton variant="plain flat">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    PLAIN & FLAT
</SimpleButton>
```

```html [elevated]
<SimpleButton variant="elevated">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    ELEVATED
</SimpleButton>
```

```html [outlined]
<SimpleButton variant="outlined">
  <svg class="button-icon" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
  OUTLINED
</SimpleButton>
```
:::


## Sizes

::: raw
<div id="test-sizes" class="dev-section">
    <SimpleButton size="xs">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        EXTRA SMALL
    </SimpleButton>
    <SimpleButton size="sm">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        SMALL
    </SimpleButton>
    <SimpleButton>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        MEDIUM
    </SimpleButton>
    <SimpleButton size="lg">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        LARGE
    </SimpleButton>
    <SimpleButton size="xl">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        EXTRA LARGE
    </SimpleButton>
</div>
:::

::: code-group
```html [XS]
<SimpleButton size="xs">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    EXTRA SMALL
</SimpleButton>
```
```html [SM]
<SimpleButton size="sm">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    SMALL
</SimpleButton>
```
```html [default]
<SimpleButton>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    MEDIUM
</SimpleButton>
```
```html [LG]
<SimpleButton size="lg">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    LARGE
</SimpleButton>
```
```html [XL]
<SimpleButton size="xl">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    EXTRA LARGE
</SimpleButton>
```
:::

::: raw
<div id="test-size-icons" class="dev-section">
    <SimpleButton size="xs" icon>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton size="sm" icon>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton icon>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton size="lg" icon>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton size="xl" icon>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
</div>
:::

::: code-group
```html [XS]
<SimpleButton size="xs" icon>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</SimpleButton>
```
```html [SM]
<SimpleButton size="sm" icon>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</SimpleButton>
```
```html [default]
<SimpleButton icon>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</SimpleButton>
```
```html [LG]
<SimpleButton size="lg" icon>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</SimpleButton>
```
```html [XL]
<SimpleButton size="xl" icon>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</SimpleButton>
```
:::

## Icons

::: raw
<div id="test-icons" class="dev-section">
    <SimpleButton icon>
        <template v-slot:icon>
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </template>
    </SimpleButton>
    <SimpleButton icon>
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton icon disabled>
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton icon :image="'https://placedog.net/100/100'"></SimpleButton>
    <SimpleButton icon variant="rounded">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton icon variant="circular">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton icon variant="rounded" :image="'https://placedog.net/100/100'"></SimpleButton>
    <SimpleButton icon variant="circular" :image="'https://placedog.net/100/100'"></SimpleButton>
    <SimpleButton icon variant="pill">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton icon variant="flat">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton icon variant="plain">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton icon variant="plain flat">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton icon variant="elevated">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton icon variant="outlined">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
</div>
:::

::: code-group

```html [default]
<SimpleButton icon>
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
</SimpleButton>
```

```html [disabled]
<SimpleButton disabled>
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
</SimpleButton>
```

```html [image]
<SimpleButton icon :image="'https://placedog.net/100/100'"></SimpleButton>
```

```html [rounded]
<SimpleButton icon variant="rounded">
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
</SimpleButton>
```

```html [circular]
<SimpleButton icon variant="circular">
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
</SimpleButton>
```

```html [image-rounded]
<SimpleButton icon variant="rounded" :image="'https://placedog.net/100/100'"></SimpleButton>
```

```html [image-circular]
<SimpleButton icon variant="circular" :image="'https://placedog.net/100/100'"></SimpleButton>
```

```html [pill]
<SimpleButton icon variant="pill">
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
</SimpleButton>
```

```html [flat]
<SimpleButton icon variant="flat">
    <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</SimpleButton>
```

```html [plain]
<SimpleButton icon variant="plain">
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
</SimpleButton>
```

```html [plain & flat]
<SimpleButton icon variant="plain flat">
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
</SimpleButton>
```

```html [elevated]
<SimpleButton icon variant="elevated">
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
</SimpleButton>
```

```html [outlined]
<SimpleButton icon variant="outlined">
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
</SimpleButton>
```

```html [elevated]
<SimpleButton icon variant="elevated">
    <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</SimpleButton>
```
:::

## Multiple

::: raw
<div id="test-multiples" class="dev-section">
    <SimpleButton variant="outlined pill">
        <template v-slot:icon>
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </template>
        Outlined Pill
    </SimpleButton>
    <SimpleButton variant="flat circular" disabled>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        Flat Circular Disabled
    </SimpleButton>
    <SimpleButton variant="icon-only pill">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton variant="icon-only outlined">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
</div>
:::

::: code-group
```html [outlined-pill]
<SimpleButton variant="outlined pill">
    <template v-slot:icon>
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </template>
    Outlined Pill
</SimpleButton>
```
```html [flat-circular-disabled]
<SimpleButton variant="flat circular disabled">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    Flat Circular Disabled
</SimpleButton>
```
```html [icon-pill]
<SimpleButton variant="icon-only pill">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</SimpleButton>
```
```html [icon-outlined]
<SimpleButton variant="icon-only outlined">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</SimpleButton>
```
:::


## Social buttons
They are simple buttons but with the right colors they can be color coded
TODO ROLLUP

::: tip GLOBAL dependences
- "create-colors" from @guebbit/css-toolkit
:::

```scss
@use "@guebbit/css-toolkit" as guebbit;
@include guebbit.create-colors(guebbit.$colors-collection, ("core", "brand"));
```

::: raw
<div id="test-socials" class="dev-section">
    <SimpleButton class="brand-facebook-bg core-white-text">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        DEFAULT
    </SimpleButton>
    <SimpleButton disabled class="brand-facebook-bg core-white-text">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        DISABLED
    </SimpleButton>
    <SimpleButton variant="plain" class="brand-facebook-text">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        PLAIN
    </SimpleButton>
    <SimpleButton variant="outlined" class="brand-facebook-border brand-facebook-text">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        OUTLINED
    </SimpleButton>
    <SimpleButton icon class="brand-facebook-bg core-white-text">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton icon variant="outlined" class="brand-facebook-text brand-facebook-border">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton variant="outlined" class="highlight-rollup-horizontal highlight-rollup-reverse facebook-pseudo-bg brand-facebook-border brand-facebook-pseudo-bg brand-facebook-text core-white-hover-text brand-facebook-hover-bg">
        <template v-slot:icon>
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </template>
        Outlined + Hover BG
    </SimpleButton>
</div>
:::

::: code-group
```html [default]
    <SimpleButton class="brand-facebook-bg core-white-text">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        DEFAULT
    </SimpleButton>
```
```html [default]
<SimpleButton disabled class="brand-facebook-bg core-white-text">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    DISABLED
</SimpleButton>
```
```html [plain]
    <SimpleButton variant="plain" class="brand-facebook-text">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        PLAIN
    </SimpleButton>
```
```html [outlined]
    <SimpleButton variant="outlined" class="brand-facebook-border brand-facebook-text">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        OUTLINED
    </SimpleButton>
```
```html [default-icon]
    <SimpleButton icon class="brand-facebook-bg core-white-text">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
```
```html [outlined-icon]
    <SimpleButton icon variant="outlined" class="brand-facebook-text brand-facebook-border">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
```
```html [outlined+rollup]
    <SimpleButton variant="outlined" class="highlight-rollup-horizontal highlight-rollup-reverse facebook-pseudo-bg brand-facebook-border brand-facebook-pseudo-bg brand-facebook-text core-white-hover-text brand-facebook-hover-bg">
        <template v-slot:icon>
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </template>
        Outlined + Hover BG
    </SimpleButton>
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
@use "@guebbit/css-toolkit" as guebbit;
@include guebbit.create-colors(guebbit.$colors-collection, ("core", "brand"));
</style>

<script setup>
import { SimpleButton } from '../../../src/'
</script>
