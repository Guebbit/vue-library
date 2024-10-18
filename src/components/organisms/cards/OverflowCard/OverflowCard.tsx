import './OverflowCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "OverflowCard",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>OverflowCard</h1>
        );
    },
});
