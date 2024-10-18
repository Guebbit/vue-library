## Basics

::: raw
<div class="dev-section">
  <SimpleCard :color="pageTheme">
    I'm empty
  </SimpleCard>
  <SimpleCard :color="pageTheme">
    <template v-slot:content>
      Hello
    </template>
  </SimpleCard>
  <SimpleCard
    :color="pageTheme"
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
  />
  <SimpleCard :color="pageTheme">
    <template v-slot:title>
      Title of Lorem Ipsum
    </template>
    <template v-slot:subtitle>
      Subtitle of Lorem Ipsum
    </template>
    <template v-slot:content>
      <p>{{ exampleText }}</p>
    </template>
    <template v-slot:footer>
      Footer of Lorem Ipsum
    </template>
  </SimpleCard>
  <SimpleCard :color="pageTheme">
    <SimpleCardActions variant="absolute">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleCardActions>
    <SimpleCardHeader
        title="Title of Lorem Ipsum"
        sub="Subtitle of Lorem Ipsum"
    />
    <SimpleCardFooter>
      Footer of Lorem Ipsum
    </SimpleCardFooter>
    <template v-slot:content>
        <p>{{ exampleText }}</p>
        <SimpleCardActions variant="end">
          <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
          <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </SimpleCardActions>
    </template>
    <SimpleCardMedia 
        media="http://placedog.net/500/500"
        ratio="16/9"
        class="card-media"
    />
  </SimpleCard>
</div>
:::

::: code-group

```html [Empty]

<SimpleCard>
    I'm empty
</SimpleCard>
```

```html [Text only]
<SimpleCard>
    <template v-slot:content>
        Hello, I have only this text
    </template>
</SimpleCard>
```

```html [Props]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
/>
```

```html [Slots]
<SimpleCard>
    <template v-slot:actions>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </template>
    <template v-slot:title>
        Title of Lorem Ipsum
    </template>
    <template v-slot:subtitle>
        Subtitle of Lorem Ipsum
    </template>
    <template v-slot:content>
        {{ exampleText }}
    </template>
    <template v-slot:footer>
        Footer of Lorem Ipsum
    </template>
</SimpleCard>
```

```html [Components]
  <SimpleCard>
    <SimpleCardActions variant="absolute">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </SimpleCardActions>
    <SimpleCardHeader
        title="Title of Lorem Ipsum"
        sub="Subtitle of Lorem Ipsum"
    />
    <SimpleCardFooter>
        Footer of Lorem Ipsum
    </SimpleCardFooter>
    <template v-slot:content>
        <p>{{ exampleText }}</p>
        <SimpleCardActions variant="end">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </SimpleCardActions>
    </template>
    <SimpleCardMedia
        media="http://placedog.net/500/500"
        ratio="16/9"
        class="card-media"
    />
</SimpleCard>
```

:::