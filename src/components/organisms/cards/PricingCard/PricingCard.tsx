import './PricingCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "PricingCard",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>PricingCard</h1>
        );
    },
});
