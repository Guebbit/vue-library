import './ParallelogramButton.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "ParallelogramButton",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>ParallelogramButton</h1>
        );
    },
});
