# Action Panel
<Badge type="tip">Wrapper</Badge> <Badge type="info">Panel</Badge>

::: tip Organism Dependencies
- [Panel](/blocks/Panel)
:::


::: raw
<div class="dev-section">
    <!--@include: @/../public/components-use/blocks/ActionPanel.vue -->
</div>
:::

::: code-group
<<< @/../public/components-use/blocks/ActionPanel.vue
<<< @/../src/components/blocks/ActionPanel.vue
:::

### Variant with slots (no differences)

::: code-group
<<< @/../public/components-use/blocks/ActionPanel-slots.vue
:::

## Column mode

::: warning TODO
(modalità a colonna e poi se la colonna sta a destra o sinistra, posizione bottom e align testo)
:::

::: raw
<div class="dev-section">
    <!--@include: @/../public/components-use/blocks/ActionPanel-column.vue -->
</div>
:::

::: code-group
<<< @/../public/components-use/blocks/ActionPanel-column.vue
:::



## API

The BASIC Panel component

| Prop          | Description                                | Accepted Values | Default |
|:--------------|:-------------------------------------------|:----------------|:--------|
| `title`       | Title of panel                             | `string`        | `empty` |
| `text`        | Text of panel                              | `string`        | `empty` |
| `buttonText`  | Text of button. If empty, button is hidden | `string`        | `empty` |
| `columnLeft`  | Background TAG TITLE                       | `boolean`       | `false` |
| `columnRight` | Background TAG ALT                         | `boolean`       | `false` |

## Slots

| Slot     | Description                |
|:---------|:---------------------------|
| `action` | Contains 1 or more buttons |

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
