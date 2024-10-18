import './CountdownCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "CountdownCard",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>CountdownCard</h1>
        );
    },
});
