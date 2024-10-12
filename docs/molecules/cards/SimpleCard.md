# Simple Card

<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

## Instructions

```ts
import { SimpleCard } from "@guebbit/vue-library";
import { Card } from "@guebbit/vue-library";
```

### Extended

```ts
import {
    SimpleCard,
    SimpleCardHeader,
    SimpleCardFooter,
    SimpleCardActions,
    SimpleCardMedia
} from "@guebbit/vue-library";
import {
    Card,
    CardHeader,
    CardFooter,
    CardActions,
    CardMedia
} from "@guebbit/vue-library";
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
      <p>{{ exampleText }}</p>
    </template>
    <template v-slot:footer>
      Footer of Lorem Ipsum
    </template>
  </SimpleCard>
  <SimpleCard>
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
        class="card-media"
        media="http://placedog.net/500/500"
        ratio="16/9"
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
        class="card-media"
        media="http://placedog.net/500/500"
        ratio="16/9"
    />
</SimpleCard>
```

:::

## Variants

::: raw
<div class="dev-section">
    <SimpleCard
        variant="outlined"
        title="Title of Outlined"
        subtitle="Subtitle of Outlined"
        :text="exampleText"
    />
    <SimpleCard
        variant="flat"
        title="Title of Flat"
        subtitle="Subtitle of Flat"
        :text="exampleText"
    />
    <SimpleCard
        variant="plain"
        title="Title of Plain"
        subtitle="Subtitle of Plain"
        :text="exampleText"
    />
    <SimpleCard
        variant="plain flat"
        title="Title of Plain and Flat"
        subtitle="Subtitle of Plain and Flat"
        :text="exampleText"
    />
    <SimpleCard
        variant="elevated"
        title="Title of Elevated"
        subtitle="Subtitle of Elevated"
        :text="exampleText"
    />
    <SimpleCard
        variant="rounded"
        title="Title of Rounded"
        subtitle="Subtitle of Rounded"
        :text="exampleText"
    />
    <div style="padding: 50px; background-image: url(http://placedog.net/500/500);">
        <SimpleCard
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

## Icons
::: tip Included in the example:
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

::: raw
<div class="dev-section">
    <SimpleCard
        title="Title of Lorem Ipsum"
        subtitle="Subtitle of Lorem Ipsum"
        :text="exampleText"
    >
        <template v-slot:headerActions>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </template>
    </SimpleCard>
    <SimpleCard
        title="Title of Lorem Ipsum"
        subtitle="Subtitle of Lorem Ipsum"
        :text="exampleText"
    >
        <template v-slot:content>
            {{exampleText}}
            <SimpleCardActions variant="end">
                <SimpleButton>lorem</SimpleButton>
                <SimpleButton>ipsum</SimpleButton>
                <img alt="" class="card-icon" src="https://placedog.net/400/400" />
                <svg class="card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </SimpleCardActions>
            {{exampleText}}
        </template>
    </SimpleCard>
    <SimpleCard
        title="Title of Lorem Ipsum"
        subtitle="Subtitle of Lorem Ipsum"
        :text="exampleText"
    >
        <template v-slot:footerActions>
            <SimpleButton>lorem</SimpleButton>
            <SimpleButton>ipsum</SimpleButton>
        </template>
    </SimpleCard>
    <SimpleCard>
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
        <template v-slot:actions>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </template>
        <template v-slot:content>
            <small>Ut enim ad minim veniam</small>
            <small>Jan 1997 - Mar 2000</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <SimpleCardActions variant="center">
                <SimpleButton>lorem</SimpleButton>
                <SimpleButton>ipsum</SimpleButton>
                <img alt="" class="card-icon" src="https://placedog.net/400/400" />
                <svg class="card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </SimpleCardActions>
        </template>
        <template v-slot:footerActions>
            <SimpleButton>ipsum</SimpleButton>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <img alt="" class="card-icon" src="https://placedog.net/400/400" />
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </template>
    </SimpleCard>
</div>
:::

::: code-group
```html [Simple icon in title]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
>
    <template v-slot:headerActions>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </template>
</SimpleCard>
```
```html [Simple content actions]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
>
    <template v-slot:content>
        {{exampleText}}
        <SimpleCardActions variant="end">
            <SimpleButton>lorem</SimpleButton>
            <SimpleButton>ipsum</SimpleButton>
            <img alt="" class="card-icon" src="https://placedog.net/400/400" />
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </SimpleCardActions>
        {{exampleText}}
    </template>
</SimpleCard>
```
```html [Simple footer actions]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
>
    <template v-slot:footerActions>
        <SimpleButton>lorem</SimpleButton>
        <SimpleButton>ipsum</SimpleButton>
    </template>
</SimpleCard>
```
```html [Full (complex)]
<SimpleCard>
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
    <template v-slot:actions>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </template>
    <template v-slot:content>
        <small>Ut enim ad minim veniam</small>
        <small>Jan 1997 - Mar 2000</small>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <SimpleCardActions variant="center">
            <SimpleButton>lorem</SimpleButton>
            <SimpleButton>ipsum</SimpleButton>
            <img alt="" class="card-icon" src="https://placedog.net/400/400" />
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </SimpleCardActions>
    </template>
    <template v-slot:footerActions>
        <SimpleButton>ipsum</SimpleButton>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <img alt="" class="card-icon" src="https://placedog.net/400/400" />
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
    title="Using Props"
    :text="exampleText"
  />
  <SimpleCard>
    <template v-slot:title>
        Using Slots
    </template>
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
        <img src="https://placedog.net/500/500" alt="Custom Image" />
    </template>
    <template v-slot:content>
        {{ exampleText }}
    </template>
  </SimpleCard>
  <SimpleCard
    variant="overlay"
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    background="https://placedog.net/1000/400"
    :text="exampleText"
  />
  <SimpleCard
    title="Using Props"
    image="https://placedog.net/500/500"
    imageRatio="4/1"
    :text="exampleText"
  />
  <SimpleCard
    title="Using Slots and Components"
    :text="exampleText"
  >
    <template v-slot:image>
        <SimpleCardMedia 
            class="card-media"
            media="http://placedog.net/500/500"
            ratio="4/1"
        />
    </template>
  </SimpleCard>
</div>
:::

::: code-group

```html [Default (Props)]
<SimpleCard
    image="https://placedog.net/1000/400"
    :text="exampleText"
/>
```

```html [Default (Slots)]
<SimpleCard>
    <template v-slot:image>
        <img src="https://placedog.net/1000/400" alt="Custom Image" />
    </template>
    <template v-slot:content>
        {{ exampleText }}
    </template>
</SimpleCard>
```

```html [Left image (Props)]
<SimpleCard
    image="https://placedog.net/500/500"
    image-alignment="left"
    :text="exampleText"
/>
```

```html [Right image (Slots)]
<SimpleCard image-alignment="right">
    <template v-slot:image>
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
    title="Title of Lorem Ipsum"
    image="https://placedog.net/500/500"
    imageRatio="4/1"
    :text="exampleText"
/>
```
```html [Image ratio (Slots & Components)]
<SimpleCard
    title="Title of Lorem Ipsum"
    :text="exampleText"
>
    <template v-slot:image>
        <SimpleCardMedia
            class="card-media"
            media="http://placedog.net/500/500"
            ratio="4/1"
        />
    </template>
</SimpleCard>
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
@use "../../theme.scss" as theme;
</style>

<script setup>
import { SimpleCard, SimpleCardHeader, SimpleCardFooter, SimpleCardActions, SimpleCardMedia, SimpleButton } from '../../../src/'

const exampleText = 'Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor'
</script>
