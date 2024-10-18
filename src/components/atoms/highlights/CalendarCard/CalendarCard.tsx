import './CalendarCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "CalendarCard",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>CalendarCard</h1>
        );
    },
});
