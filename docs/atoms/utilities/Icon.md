# Aspect Ratio
<Badge type="tip">Atom</Badge> <Badge type="tip">Basic</Badge>

## Component Import

```html
import { Icon } from "@guebbit/vue-library";
```

## Default

<div class="dev-section">
    <Icon>
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </Icon>
</div>

```html 
<Icon>
    <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</Icon>
```


## Sizes

<div class="dev-section">
    <Icon size="xs">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </Icon>
    <Icon size="sm">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </Icon>
    <Icon size="md">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </Icon>
    <Icon size="lg">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </Icon>
    <Icon size="xl">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </Icon>
</div>

```html {0}
<Icon>
    <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</Icon>
```

## API

The BASIC Panel component

| Prop           | Description                                        | Accepted Values                              | Default  |
|:---------------|:---------------------------------------------------|:---------------------------------------------|:---------|
| `ratio`        | Fixed ratio of media (percentage)                  | `number`                                     | `empty`  |

## Slots

| Slot      | Description                                           |
|:----------|:------------------------------------------------------|
| `default` | Content of which we want to have a fixed aspect ratio |

<style lang="scss">
@use "../../theme.scss";
</style>

<script setup>
import { Icon } from "../../../src/";
</script>
