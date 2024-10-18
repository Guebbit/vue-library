import './ScrollDownMouse.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "ScrollDownMouse",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>ScrollDownMouse</h1>
        );
    },
});
