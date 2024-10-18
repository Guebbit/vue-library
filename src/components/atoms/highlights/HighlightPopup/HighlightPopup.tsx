import './HighlightPopup.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "HighlightPopup",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>HighlightPopup</h1>
        );
    },
});
