# Simple Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

## Instructions

```ts
import { SimpleCard } from "@guebbit/vue-library";
import { Card } from "@guebbit/vue-library";
```


<SimpleCard
  title="John Doe"
  subtitle="Software Engineer"
  image="https://placedog.net/500/500"
  background="https://placedog.net/1000/400"
  textColor="#333"
  backgroundColor="#f9f9f9"
  info={userInfo}
>
  <template v-slot:default>
    <ul>
      <li>Hobby: Programming</li>
      <li>Likes: Vue.js, TypeScript</li>
    </ul>
  </template>
</SimpleCard>

<SimpleCard title="Jane Doe" subtitle="Graphic Designer" info={userInfo}>
  <template v-slot:image>
    <img src="https://placedog.net/400/400" alt="Custom Image" />
  </template>
  <template v-slot:default>
    <p>
      Jane is a passionate graphic designer who loves creating digital art.
    </p>
  </template>
</SimpleCard>



## PROPS
TODO

## SLOTS
TODO

## EVENTS
TODO

<style lang="scss">
@use "../../theme.scss";
</style>

<script setup>
import { SimpleCard } from '../../../src/'
</script>
