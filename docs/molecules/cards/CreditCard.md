# Credit Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

## Instructions

```ts
import { CreditCard } from "@guebbit/vue-library";
```


<CreditCard
    name = "owner's name"
    logo = "http://localhost:8080/logo.svg"
    background = "#ffff33"
    color = "#000000"
    cardNumber = "5200828282828210"
    cardExpire = "10/25"
    :flipped="flippedCreditCard"
    @click="flippedCreditCard = !flippedCreditCard"
/>
<CreditCard
    name = "owner's name"
    logo = "http://localhost:8080/logo.svg"
    background = "#231F20"
    color = "#f0f0f0"
    cardEmail = "credit-card@gmail.com"
    cardExpire = "10/25"
    :flipped="flippedCreditCard2"
    @click="flippedCreditCard2 = !flippedCreditCard2"
/>




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
import { ref } from "vue";
import { CreditCard } from '../../../src/';

const flippedCreditCard = ref(false);
const flippedCreditCard2 = ref(false);
</script>
