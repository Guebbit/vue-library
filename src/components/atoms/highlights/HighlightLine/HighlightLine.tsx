import './HighlightLine.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "HighlightLine",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>HighlightLine</h1>
        );
    },
});
