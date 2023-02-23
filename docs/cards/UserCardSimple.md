# User Card Simple
<Badge type="info">Card</Badge>

## Code

<div class="dev-section">
    <UserCardSimple
        background="http://placekitten.com/1200/800"
        image="http://placekitten.com/400/600"
        title="Lorem Ipsum"
        subtitle="Creative Manager"
        backgroundColor="#f0f0f0"
        :info="{
            followers: 323,
            following: 290,
            stories: 22,
        }"
    />
    <UserCardSimple
        image="http://placekitten.com/400/400"
        title="Lorem Ipsum"
        subtitle="Creative Manager"
        backgroundColor="#f0f0f0"
        :info="{
            followers: 323
        }"
    />
    <UserCardSimple
        title="Lorem Ipsum"
        subtitle="Creative Manager"
        backgroundColor="#f0f0f0"
        :info="{
            followers: 323,
            following: 290
        }"
    />
</div>

```html
<UserCardSimple
    background="http://placekitten.com/1200/800"
    image="http://placekitten.com/400/400"
    title="Lorem Ipsum"
    subtitle="Creative Manager"
    :info="{
        followers: 323,
        following: 290,
        stories: 22,
    }"
/>
<UserCardSimple
    image="http://placekitten.com/400/400"
    title="Lorem Ipsum"
    subtitle="Creative Manager"
    :info="{
        followers: 323
    }"
/>
<UserCardSimple
    title="Lorem Ipsum"
    subtitle="Creative Manager"
    :info="{
        followers: 323,
        following: 290
    }"
/>
```

## API

| Prop              | Description                              | Accepted Values | Default   |
|:------------------|:-----------------------------------------|:----------------|:----------|
| `background`      | Background image                         | `string`        | `empty`   |
| `image`           | Front image                              | `string`        | `empty`   |
| `title`           | Primary text                             | `string`        | `empty`   |
| `subtitle`        | Secondary text                           | `string`        | `empty`   |
| `info`            | Object with key-value pair as label-info | `Object`        | `empty`   |
| `textColor`       | Text color                               | `string`        | `#303336` |
| `backgroundColor` | Background color                         | `string`        | `#ffffff` |

## Slots

| Slot         | Description      |
|:-------------|:-----------------|
| `default`    | Body of the card |
| `background` | Background image |
| `image`      | Front image      |

## SCSS Variables

| Variable                       | Description      |
|:-------------------------------|:-----------------|
| `$simple-user-card-background` | Background color |
| `$simple-user-card-color`      | Text color       |

<style lang="scss">
@import "../theme.scss";

.simple-user-card{
    max-width: 300px;
    margin: 12px;
}
</style>

<script setup>
import { UserCardSimple } from "../../src/";
</script>
