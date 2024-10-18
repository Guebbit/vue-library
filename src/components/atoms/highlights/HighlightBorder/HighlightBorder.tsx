import './HighlightBorder.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "HighlightBorder",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>HighlightBorder</h1>
        );
    },
});
