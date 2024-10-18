# Credit Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

## Instructions

```ts
import { CreditCard } from "@guebbit/vue-library";
```

<div class="dev-section">
    <CreditCard
        name = "Owner's name"
        number = "5200828282828210"
        expire = "10/25"
        :back="flippedCreditCard"
        @click="flippedCreditCard = !flippedCreditCard"
    >
        <template #logo>
            <img src="http://localhost:8080/logo.svg" />
        </template>
    </CreditCard>
</div>


```html
import { ref } from 'vue'
const flippedCreditCard = ref(false)

<CreditCard
    name = "Owner's name"
    number = "5200828282828210"
    expire = "10/25"
    :back="flippedCreditCard"
    @click="flippedCreditCard = !flippedCreditCard"
>
    <template #logo>
        <img src="http://localhost:8080/logo.svg" />
    </template>
</CreditCard>
```

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
import { ref } from 'vue'
import { CreditCard } from '../../../src/'

const flippedCreditCard = ref(false)
</script>
