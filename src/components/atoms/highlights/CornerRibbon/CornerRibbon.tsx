import './CornerRibbon.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "CornerRibbon",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>CornerRibbon</h1>
        );
    },
});
