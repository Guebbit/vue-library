# Theme

## Instructions

Add from themeGenerator composable
```js
const {
    add
} = useThemeGenerator();

add("primary", {
    "globals": {
        "color": "0 188 212",
        "on-color": "255 255 255",
    },
    "colors": {
        "shadow-color": "0 255 0",
        "active-color": "255 152 0",
        "active-on-color": "0 0 0",
        "active-shadow-color": "255 0 255",
    }
});
```

Create all themes from createTheme plugin (previous themes will be overwrited, you should use it on app init)
```js
import createTheme from '../src/plugins/createTheme.ts' ;

app.use(createTheme, {
    "primary": {
        "globals": {
            "color": "0 188 212",
            "on-color": "255 255 255",
        },
        "colors": {
            "shadow-color": "0 255 0",
            "active-color": "255 152 0",
            "active-on-color": "0 0 0",
            "active-shadow-color": "255 0 255",
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
        color="test"
        title="Title of Lorem Ipsum"
        subtitle="Subtitle of Lorem Ipsum"
        text="Lorem Ipsum sit dolor Lorem Ipsum Lorem Ipsum sit dolor Lorem Ipsum"
    />
</div>
:::

::: code-group
```html
<SimpleCard
    color="test"
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
        color="test"
        :theme="{
            'header': '#000',
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
    color="test"
    :theme="{
        'header': '#000',
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

add("test", {
    "colors": {
        "color": "0 100 0",
        "on-color": "100 0 100",
        "active-color": "0 255 0",
        "active-on-color": "255 0 255",
        "shadow-color": "255 255 0",
    }
});
</script>