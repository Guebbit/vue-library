import './IconFocusButton.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "IconFocusButton",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>IconFocusButton</h1>
        );
    },
});
