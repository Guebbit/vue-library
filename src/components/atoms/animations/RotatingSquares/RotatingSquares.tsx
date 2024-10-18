import './RotatingSquares.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "RotatingSquares",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>RotatingSquares</h1>
        );
    },
});
