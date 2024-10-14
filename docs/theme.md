# Theme
::: danger
WORK IN PROGRESS
:::

## Instructions

Add from themeGenerator composable
```js
const {
    add
} = useThemeGenerator();

add("primary", {
    "colors": {
        "header": "#000",
        "background": "#0ff",
        "shadow-color": "0 255 0 / 0.2",
    }
});
```

Create all themes from createTheme plugin (previous themes will be overwrited, you should use it on app init)
```js
import createTheme from '../src/plugins/createTheme.ts' ;

createTheme({
    "primary": {
        "colors": {
            "header": "#000",
            "background": "#0ff",
            "shadow-color": "0 255 0 / 0.2",
        }
    }
});
```

## Use of color
Choose which theme use in advance.
The theme has different settings, color is for specific

it is based on the global css vars (like g-theme-xxx)

::: raw
<div class="dev-section">
    <SimpleCard
        color="primary"
        title="Title of Lorem Ipsum"
        subtitle="Subtitle of Lorem Ipsum"
        text="Lorem Ipsum sit dolor Lorem Ipsum Lorem Ipsum sit dolor Lorem Ipsum"
    />
</div>
:::

::: code-group
```html
<SimpleCard
    color="primary"
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    text="Lorem Ipsum sit dolor Lorem Ipsum Lorem Ipsum sit dolor Lorem Ipsum"
/>
```
:::


## Use of theme in-built prop
Theme is just to apply css vars, it always win on color, but you shouldn't use it often

::: raw
<div class="dev-section">
    <SimpleCard
        color="primary"
        :theme="{
            'background': '#f0f',
        }"
        title="Title of Lorem Ipsum"
        subtitle="Subtitle of Lorem Ipsum"
        text="Lorem Ipsum sit dolor Lorem Ipsum Lorem Ipsum sit dolor Lorem Ipsum"
    />
</div>
:::

::: code-group
```html
<SimpleCard
    color="primary"
    :theme="{
        'background': '#f0f',
    }"
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    text="Lorem Ipsum sit dolor Lorem Ipsum Lorem Ipsum sit dolor Lorem Ipsum"
/>
```
:::

<style lang="scss">
@use "theme.scss";
</style>

<script setup>
import { SimpleCard } from '../src/';
import useThemeGenerator from '../src/composables/themeGenerator.ts'; 

const {
    add
} = useThemeGenerator();

add("primary", {
    "colors": {
        "header": "#000",
        "background": "#0ff",
        "shadow-color": "0 255 0 / 0.2",
    }
});
</script>