import './ScrollDownArrow.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "ScrollDownArrow",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>ScrollDownArrow</h1>
        );
    },
});
