# Action Panel
<Badge type="tip">Wrapper</Badge> <Badge type="info">Panel</Badge>

::: warning
Use **Panel** as its core. So it has every prop, event or slot of it.
:::

## Complete

Example complete with almost everything
TODO button

<ActionPanel
    background="http://placekitten.com/1000/1000"
    shadow="#fff"
    title="LOREM IPSUM SIT DOLOR AMET"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    buttonText="button text"
/>

```html
<ActionPanel
    background="http://placekitten.com/1000/1000"
    shadow="#fff"
    title="LOREM IPSUM SIT DOLOR AMET"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    buttonText="button text"
    @click:button="() => {}"
/>
```

### (Using slots, no differences)

```html
<ActionPanel
    shadow="#fff"
>
    <template #background>
        <img 
            class="panel-background" 
            src="http://placekitten.com/1000/1000" 
        />
    </template>
    <h3 class="panel-title">LOREM IPSUM SIT DOLOR AMET</h3>
    <p class="panel-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <button class="panel-button">Button text</button>
</ActionPanel>
```

## Column mode

TODO (modalità a colonna e poi se la colonna sta a destra o sinistra, posizione botton e align testo)

## API

The BASIC Panel component

| Prop          | Description                                | Accepted Values | Default |
|:--------------|:-------------------------------------------|:----------------|:--------|
| `title`       | Title of panel                             | `string`        | `empty` |
| `text`        | Text of panel                              | `string`        | `empty` |
| `buttonText`  | Text of button. If empty, button is hidden | `string`        | `empty` |
| `column`      | Background image's thumbnail or video post | `boolean`       | `false` |
| `columnLeft`  | Background TAG TITLE                       | `boolean`       | `false` |
| `columnRight` | Background TAG ALT                         | `boolean`       | `false` |

## Slots

| Slot     | Description                |
|:---------|:---------------------------|
| `action` | Contains 1 or more buttons |

<style lang="scss">
@import "../theme.scss";
</style>

<script setup>
import { ActionPanel } from "../../src/";
</script>
