import './EventLongCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "EventLongCard",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>EventLongCard</h1>
        );
    },
});
