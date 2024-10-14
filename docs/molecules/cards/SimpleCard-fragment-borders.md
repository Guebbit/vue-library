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
    border-right
    border-left
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

```html [Full]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-full
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

```html [Right & Left]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
    border-right
    border-left
  />
```
:::