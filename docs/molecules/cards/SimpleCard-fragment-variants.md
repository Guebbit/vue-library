---
search: false
---

## Variants

::: raw
<div class="dev-section">
    <SimpleCard
        :color="pageTheme"
        variant="outlined"
        title="Title of Outlined"
        subtitle="Subtitle of Outlined"
        :text="exampleText"
    />
    <SimpleCard
        :color="pageTheme"
        variant="flat"
        title="Title of Flat"
        subtitle="Subtitle of Flat"
        :text="exampleText"
    />
    <SimpleCard
        :color="pageTheme"
        variant="plain"
        title="Title of Plain"
        subtitle="Subtitle of Plain"
        :text="exampleText"
    />
    <SimpleCard
        :color="pageTheme"
        variant="plain flat"
        title="Title of Plain and Flat"
        subtitle="Subtitle of Plain and Flat"
        :text="exampleText"
    />
    <SimpleCard
        :color="pageTheme"
        variant="elevated"
        title="Title of Elevated"
        subtitle="Subtitle of Elevated"
        :text="exampleText"
    />
    <SimpleCard
        :color="pageTheme"
        variant="rounded"
        title="Title of Rounded"
        subtitle="Subtitle of Rounded"
        :text="exampleText"
    />
    <div style="padding: 50px; background-image: url(http://placedog.net/500/500);">
        <SimpleCard
            :color="pageTheme"
            variant="plain flat blurred"
            title="Blurred for simple pattern background"
            subtitle="Subtitle of Blurred"
            :text="exampleText"
        />
    </div>
</div>
:::

::: code-group

```html [Outlined]

<SimpleCard
    variant="outlined"
    title="Title of Outlined"
    subtitle="Subtitle of Outlined"
    :text="exampleText"
/>
```

```html [Flat]

<SimpleCard
    variant="flat"
    title="Title of Flat"
    subtitle="Subtitle of Flat"
    :text="exampleText"
/>
```

```html [Plain]

<SimpleCard
    variant="plain"
    title="Title of Plain"
    subtitle="Subtitle of Plain"
    :text="exampleText"
/>
```

```html [Plain & Flat]

<SimpleCard
    variant="plain flat" 
    title="Title of Plain and Flat"
    subtitle="Subtitle of Plain and Flat"
    :text="exampleText"
/>
```

```html [Elevated]

<SimpleCard
    variant="elevated"
    title="Title of Elevated"
    subtitle="Subtitle of Elevated"
    :text="exampleText"
/>
```

```html [Rounded]

<SimpleCard
    variant="rounded"
    title="Title of Rounded"
    subtitle="Subtitle of Rounded"
    :text="exampleText"
/>
```

```html [Blurred]

<div style="padding: 50px; background-image: url(http://placedog.net/500/500);">
    <SimpleCard
        variant="plain flat blurred"
        title="Blurred for simple pattern background"
        subtitle="Subtitle of Blurred"
        :text="exampleText"
    />
</div>
```
:::