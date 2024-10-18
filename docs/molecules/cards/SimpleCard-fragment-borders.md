## Borders

::: raw
<div class="dev-section">
  <SimpleCard
    :color="pageTheme"
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-right
  />
  <SimpleCard
    :color="pageTheme"
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-full
  />
  <SimpleCard
    :color="pageTheme"
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-top
    border-bottom
  />
  <SimpleCard
    :color="pageTheme"
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-position="right left"
  />
</div>
:::

::: code-group

```html [Right]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-right
/>
```

```html [Right (alt)]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-position="right"
  />
```

```html [Full]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-full
/>
```

```html [Full (alt)]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-position="full"
  />
```

```html [Top & Bottom]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-top
    border-bottom
/>
```

```html [Top & Bottom (alt)]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-position="top bottom"
  />
```

```html [Right & Left]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-right
    border-left
/>
```
```html [Right & Left (alt)]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-position="right left"
  />
```
:::