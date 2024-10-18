import './HighlightRollup.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "HighlightRollup",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>HighlightRollup</h1>
        );
    },
});
