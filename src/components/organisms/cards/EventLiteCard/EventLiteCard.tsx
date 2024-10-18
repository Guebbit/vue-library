import './EventLiteCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "EventLiteCard",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>EventLiteCard</h1>
        );
    },
});
