# Simple Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

## Instructions

```ts
import { SimpleCard } from "@guebbit/vue-library";
import { Card } from "@guebbit/vue-library";
```

## Basics

::: raw
<div class="dev-section">
  <SimpleCard>
    I'm empty
  </SimpleCard>
  <SimpleCard>
    <template v-slot:content>
      Hello
    </template>
  </SimpleCard>
  <SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
  />
  <SimpleCard>
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
```html [Full (props)]
<SimpleCard
  title="Title of Lorem Ipsum"
  subtitle="Subtitle of Lorem Ipsum"
  :text="exampleText"
/>
```
```html [Full (slots)]
<SimpleCard>
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
:::



## Variants

::: raw
<div class="dev-section">
    <SimpleCard
        variant="flat"
        title="Flat"
        subtitle="Subtitle of Lorem Ipsum"
        :text="exampleText"
    />
    <SimpleCard
        variant="plain"
        title="Plain"
        subtitle="Subtitle of Lorem Ipsum"
        :text="exampleText"
    />
    <SimpleCard
        variant="plain flat"
        title="Plain and Flat"
        subtitle="Subtitle of Lorem Ipsum"
        :text="exampleText"
    />
    <SimpleCard
        variant="outlined"
        title="Outlined"
        subtitle="Subtitle of Lorem Ipsum"
        :text="exampleText"
    />
</div>
<div class="dev-section" style="background-image: url(http://placedog.net/500/500);">
    <SimpleCard
        variant="plain flat blurred"
        title="Blurred for simple pattern background"
        subtitle="Subtitle of Lorem Ipsum"
        :text="exampleText"
    />
</div>
:::

::: code-group
```html [Empty]
  TODO
```
:::


## Icons

::: raw
<div class="dev-section">
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
    <template v-slot:headerActions>
      <svg class="card-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
    </template>
    <template v-slot:subtitle>
      Subtitle of Lorem Ipsum
    </template>
    <template v-slot:content>
      <small>Ut enim ad minim veniam</small>
      <small>Jan 1997 - Mar 2000</small>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </template>
    <template v-slot:footerActions>
      <svg class="card-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
      <svg class="card-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
      <svg class="card-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
    </template>
  </SimpleCard>
</div>
:::

::: code-group
```html
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
  <template v-slot:headerActions>
    <svg class="card-icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </svg>
  </template>
  <template v-slot:subtitle>
    Subtitle of Lorem Ipsum
  </template>
  <template v-slot:content>
    <small>Ut enim ad minim veniam</small>
    <small>Jan 1997 - Mar 2000</small>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </template>
  <template v-slot:footerActions>
    <svg class="card-icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </svg>
    <svg class="card-icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </svg>
    <svg class="card-icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </svg>
  </template>
</SimpleCard>
```
:::


## Images

::: raw
<div class="dev-section">
  <SimpleCard
    image="https://placedog.net/1000/400"
    :text="exampleText"
  />
  <SimpleCard>
    <template v-slot:image>
        <img src="https://placedog.net/1000/400" alt="Custom Image" />
    </template>
    <template v-slot:content>
        {{ exampleText }}
    </template>
  </SimpleCard>
  <SimpleCard
    image="https://placedog.net/500/500"
    image-alignment="left"
    :text="exampleText"
  />
  <SimpleCard image-alignment="right">
    <template v-slot:image>
        <img class="card-image" src="https://placedog.net/500/500" alt="Custom Image" />
    </template>
    <template v-slot:content>
        {{ exampleText }}
    </template>
  </SimpleCard>
  <SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    background="https://placedog.net/1000/400"
    :text="exampleText"
  />
</div>
:::

::: code-group
```html [Props]
<SimpleCard
    
/>
```
```html [Slots]

```
:::



## Alerts

::: raw
<div class="dev-section">
    TODO
</div>
:::

::: code-group
```html [Empty]
  TODO
```
:::


## Props
TODO

## Slots
TODO

## Events
TODO

<style lang="scss">
@use "../../theme.scss";
</style>

<script setup>
import { SimpleCard } from '../../../src/'

const exampleText = 'Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor'
</script>
