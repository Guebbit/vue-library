# Action Panel
<Badge type="tip">Wrapper</Badge> <Badge type="info">Panel</Badge>

::: tip Variant Dependencies
- [Panel](/blocks/Panel)
:::

## Basic

::: raw
<div class="dev-section">
    <!--@include: @/../public/components-use/blocks/ActionPanel.vue -->
</div>
:::

::: code-group
<<< @/../public/components-use/blocks/ActionPanel.vue [Basic]
<<< @/../public/components-use/blocks/ActionPanel-slots.vue [With slots]
<<< @/../src/components/blocks/ActionPanel.vue [Code]
:::


## Variants

::: raw
<div class="dev-section">
    <!--@include: @/../public/components-use/blocks/ActionPanel-column.vue -->
</div>
:::

::: code-group
<<< @/../public/components-use/blocks/ActionPanel-column.vue#button-right [Button Right]
<<< @/../public/components-use/blocks/ActionPanel-column.vue#column-left [Column Left]
<<< @/../public/components-use/blocks/ActionPanel-column.vue#column-right [Column Right]
:::

## API

The BASIC Panel component

| Prop          | Description                                | Accepted Values | Default |
|:--------------|:-------------------------------------------|:----------------|:--------|
| `title`       | Title of panel                             | `string`        | `empty` |
| `text`        | Text of panel                              | `string`        | `empty` |
| `buttonText`  | Text of button. If empty, button is hidden | `string`        | `empty` |
| `center`      | Elements align                             | `boolean`       | `false` |
| `right`       | Elements align                             | `boolean`       | `false` |
| `column`      | Button aligned with the text               | `boolean`       | `false` |

## Slots

| Slot              | Description                  |
|:------------------|:-----------------------------|
| `default`         | Container for title and text |
| `actions-wrapper` | Container of actions         |
| `actions`         | Contains 1 or more buttons   |

<style lang="scss">
@import "../theme.scss";

.action-panel{
    button {
        background: red;
        padding: 0.5em 1em;
    }
}
</style>

<script setup>
import { ActionPanel } from "../../src/";
</script>
