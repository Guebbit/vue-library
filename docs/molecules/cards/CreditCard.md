# Action Panel
<Badge type="info">Card</Badge>

## Code

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

```html
<CreditCard
    name = "owner's name"
    logo = "http://localhost:8080/logo.svg"
    background = "#ffff33"
    color = "#000000"
    cardNumber = "5200828282828210"
    cardEmail = "credit-card@gmail.com"
    cardExpire = "10/25"
/>
```

## API

The BASIC Panel component

| Prop                          | Description                                             | Accepted Values | Default         |
|:------------------------------|:--------------------------------------------------------|:----------------|:----------------|
| `logo`                        | Image on top right corner                               | `string`        | `empty`         |
| `name`                        | Name of owner                                           | `string`        | `empty`         |
| `background`                  | Color of card                                           | `string`        | `empty`         |
| `color`                       | Color of icon                                           | `string`        | `empty`         |
| `cardNumber`                  | Card's number                                           | `string`        | `empty`         |
| `cardExpire`                  | Card expiration date                                    | `string`        | `empty`         |
| `cardEmail`                   | Card email (if cardNumber is not present)               | `string`        | `empty`         |
| `flipped`                     | If showing the back of the card (animated when changed) | `boolean`       | `false`         |
| `cardTextNumber`              | Label text of `name`                                    | `string`        | `card number`   |
| `cardTextEmail`               | Label text of `email`                                   | `string`        | `email`         |
| `cardTextSecurityCode`        | Label text of `security code`                           | `string`        | `security code` |
| `cardTextSecurityPlaceholder` | Label text of `security code's placeholder`             | `string`        | `XXX`           |
| `cardTextValid`               | Constant                                                | `string`        | `VALID`         |
| `cardTextThru`                | Constant                                                | `string`        | `THRU`          |


## Slots

| Slot      | Description                                 |
|:----------|:--------------------------------------------|
| `default` | Logo of card (like paypal, mastercard, etc) |

<style lang="scss">
@import "../../theme.scss";
</style>

<script setup>
import { ref } from "vue";
import { CreditCard } from "../../../src/";

const flippedCreditCard = ref(false);
const flippedCreditCard2 = ref(false);
</script>
