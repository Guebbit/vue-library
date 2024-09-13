# Simple Button
<Badge type="tip">Atom</Badge> <Badge type="info">buttons</Badge>

## Instructions

#### Component Import
```vue
import { SimpleButton } from "@guebbit/vue-library";
```

#### Theme Import

```scss
@use "../../../assets/theme" as theme;
// @use "@guebbit/css-ui/src/atoms/buttons/SimpleButton" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

## Code

<div class="dev-section">
    <SimpleButton>
      DEFAULT
    </SimpleButton>
    <SimpleButton :image="'https://placedog.net/100/100'">
      IMAGE
    </SimpleButton>
    <SimpleButton>
        <template #icon>
            <img src="https://placedog.net/100/100" alt="Image" class="button-image" />
        </template>
        IMAGE
    </SimpleButton>
    <SimpleButton size="small">
      SMALL
    </SimpleButton>
    <SimpleButton variant="rounded">
      ROUNDED
    </SimpleButton>
    <SimpleButton variant="circular">
      CIRCULAR
    </SimpleButton>
    <SimpleButton variant="pill">
      PILL
    </SimpleButton>
    <SimpleButton variant="shadowless">
      shadowless
    </SimpleButton>
    <SimpleButton variant="plain">
      PLAIN
    </SimpleButton>
    <SimpleButton variant="outlined">
      OUTLINED
    </SimpleButton>
    <SimpleButton variant="tonal">
      TONAL
    </SimpleButton>
</div>

::: code-group
```vue [default]
aaaaaaaaaaaaaaaaaaaa
```
```vue [image]
aaaaaaaaaaaaaaaaaaaa
```
```vue [large]
aaaaaaaaaaaaaaaaaaaa
```
```vue [small]
aaaaaaaaaaaaaaaaaaaa
```
```vue [rounded]
aaaaaaaaaaaaaaaaaaaa
```
```vue [circular]
aaaaaaaaaaaaaaaaaaaa
```
```vue [pill]
aaaaaaaaaaaaaaaaaaaa
```
```vue [flat]
aaaaaaaaaaaaaaaaaaaa
```
```vue [plain]
aaaaaaaaaaaaaaaaaaaa
```
```vue [outlined]
aaaaaaaaaaaaaaaaaaaa
```
:::


## Icons

<div class="dev-section">
    <SimpleButton iconOnly>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton iconOnly :image="'https://placedog.net/100/100'"></SimpleButton>
    <SimpleButton iconOnly variant="rounded" :image="'https://placedog.net/100/100'"></SimpleButton>
    <SimpleButton iconOnly variant="outlined">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton iconOnly variant="rounded">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton iconOnly variant="circular">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton iconOnly variant="pill">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton iconOnly variant="plain">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
    <SimpleButton iconOnly variant="tonal">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleButton>
</div>

::: code-group
```vue [default]
aaaaaaaaaaaaaaaaaaaa
```
```vue [image]
aaaaaaaaaaaaaaaaaaaa
```
```vue [image-rounded]
aaaaaaaaaaaaaaaaaaaa
```
```vue [outlined]
aaaaaaaaaaaaaaaaaaaa
```
```vue [rounded]
aaaaaaaaaaaaaaaaaaaa
```
```vue [circular]
aaaaaaaaaaaaaaaaaaaa
```
```vue [pill]
aaaaaaaaaaaaaaaaaaaa
```
```vue [plain]
aaaaaaaaaaaaaaaaaaaa
```
:::



## Social Buttons (TODO)

## Classes

| Class                | Description                      |
|:---------------------|:---------------------------------|
| `animate-active`     | Animation active                 |
| `animate-on-active`  | Animation active on .active      |
| `animate-on-hover`   | Animation active on hover        |
| `button-small`       | Small size                       |
| `button-rounded`     | Rounded border                   |
| `button-circular`    | Circular border                  |
| `button-pill`        | Pill border                      |
| `button-outlined`    | Outlined mode                    |
| `button-plain`       | Plain mode                       |
| `button-tonal`       | Tonal mode                       |
| `button-shadowless`  | Remove box-shadow                |
| `button-icon-only`   | Single icon/image/character mode |

## SCSS variables

| Variable                  | Description                                                                         | Accepted Values | Default                           |
|:--------------------------|:------------------------------------------------------------------------------------|:----------------|:----------------------------------|
| `$color`                  | :x: MAIN color                                                                      | `color`         | `transparent`                     |
| `$background`             | :zap: :first_quarter_moon_with_face: Background color                               | `color`         | `same as {$color}`                |
| `$on-background`          | :zap: :first_quarter_moon_with_face: Text color                                     | `color`         | `same as {$on-color}`             |
| `$shadow-color`           | :zap: :first_quarter_moon_with_face: Shadow color (on `var()` MUST be RGB)          | `color`         | `0,0,0 (#000)`                    | 
| `$outlined-border-width`  | Border width                                                                        | `size`          | `2px`                             |
| `$outlined-on-background` | :zap: :first_quarter_moon_with_face: Text color of outlined mode                    | `color`         | `same as {$color}`                |
| `$border-color`           | :zap: :first_quarter_moon_with_face: Border color of outlined mode                  | `color`         | `same as {$color}`                |
| `$tonal-background`       | :zap: :first_quarter_moon_with_face: Background of tonal mode                       | `color`         | `rgba of {$color} at 0.1`         |
| `$tonal-on-background`    | :zap: :first_quarter_moon_with_face: Color of tonal mode                            | `color`         | `same as {$color}`                |
| `$plain-color`            | :zap: :first_quarter_moon_with_face: *TEXT* color of plain mode (BG is transparent) | `color`         | `same as {$color}`                |
| `$padding`                | Padding                                                                             | `size`          | `8px`                             |
| `$duration`               | Transition durations                                                                | `time`          | `0.3s`                            |
| `$border-radius`          | Border radius                                                                       | `size`          | `2px`                             |

<style lang="scss">
@import "../../theme.scss";
</style>

<script setup>
import { SimpleButton } from "../../../src/";
</script>
