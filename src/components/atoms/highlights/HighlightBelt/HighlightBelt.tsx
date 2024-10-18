import './HighlightBelt.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "HighlightBelt",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>HighlightBelt</h1>
        );
    },
});
