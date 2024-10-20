---
search: false
---

## Media

::: warning
If the media it's a video it must be declared with the *video* prop (for efficiency reasons)
<br/>
The type of the video should be declared too for the same reason (but it's not necessary)
:::

::: raw
<div class="dev-section">
  <SimpleCard
    :color="pageTheme"
    media="https://placedog.net/1000/400"
    title="Using Props"
    :text="exampleText"
  />
  <SimpleCard
    :color="pageTheme"
    media="https://placedog.net/500/500"
    media-alignment="left"
    :text="exampleText"
  />
  <SimpleCard 
    :color="pageTheme"
    media-alignment="right"
  >
    <template v-slot:media>
        <img src="https://placedog.net/500/500" alt="Custom Image" />
    </template>
    <template v-slot:content>
        {{ exampleText }}
    </template>
  </SimpleCard>
  <SimpleCard
    :color="pageTheme"
    variant="overlay"
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    background="https://placedog.net/1000/400"
    :text="exampleText"
  />
  <SimpleCard
    :color="pageTheme"
    title="Title of Lorem Ipsum"
    media="https://placedog.net/500/500"
    mediaRatio="4/1"
    :text="exampleText"
  />
  <SimpleCard
    :color="pageTheme"
    title="Image hover"
    :text="exampleText"
    media="https://placedog.net/500/500"
    mediaHover="https://placedog.net/700/700"
    media-right
  />
  <SimpleCard
    :color="pageTheme"
    variant="overlay"
    title="Background hover"
    :text="exampleText"
    background="https://placedog.net/1000/400"
    backgroundHover="https://placedog.net/800/400"
  />
  <SimpleCard
    :color="pageTheme"
    title="Title of Lorem Ipsum"
    :text="exampleText"
    media="http://assets.guebbit.com/guebbit/video/normal.mp4"
    video
    type="video/mp4"
  />
  <SimpleCard
    :color="pageTheme"
    variant="overlay"
    title="Title of Lorem Ipsum"
    :text="exampleText"
    background="http://assets.guebbit.com/guebbit/video/normal.mp4"
    background-video
    background-type="video/mp4"
  />
</div>
:::

::: code-group

```html [Default (Props)]

<SimpleCard
    media="https://placedog.net/1000/400"
    :text="exampleText"
/>
```

```html [Default (Slots)]

<SimpleCard>
    <template v-slot:media>
        <img src="https://placedog.net/1000/400" alt="Custom Image" />
    </template>
    <template v-slot:content>
        {{ exampleText }}
    </template>
</SimpleCard>
```

```html [Left media (Props)]

<SimpleCard
    media="https://placedog.net/500/500"
    media-alignment="left"
    :text="exampleText"
/>
```

```html [Right media (Slots)]

<SimpleCard media-alignment="right">
    <template v-slot:media>
        <img src="https://placedog.net/500/500" alt="Custom Image" />
    </template>
    <template v-slot:content>
        {{ exampleText }}
    </template>
</SimpleCard>
```

```html [Background (Slots)]

<SimpleCard
    variant="overlay"
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    background="https://placedog.net/1000/400"
    :text="exampleText"
/>
```

```html [Image ratio (Props)]

<SimpleCard
    title="Ratio using Props"
    media="https://placedog.net/500/500"
    mediaRatio="4/1"
    :text="exampleText"
/>
```

```html [Image ratio (Components)]

<SimpleCard
    title="Ratio using Slots & Components"
    :text="exampleText"
>
    <SimpleCardMedia
        media="http://placedog.net/500/500"
        ratio="4/1"
    />
</SimpleCard>
```

```html [Image Hover]
<SimpleCard
    title="Image hover"
    media="https://placedog.net/500/500"
    hoverMedia="https://placedog.net/700/700"
    :text="exampleText"
    media-right
/>
```

```html [Background Hover]
<SimpleCard
    variant="overlay"
    title="Background hover"
    background="https://placedog.net/1000/400"
    hoverBackground="https://placedog.net/800/400"
    :text="exampleText"
/>
```
:::

