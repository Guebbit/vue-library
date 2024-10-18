import './EventMinimalCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "EventMinimalCard",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>EventMinimalCard</h1>
        );
    },
});
