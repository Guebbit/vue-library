import './SimpleBlockquote.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "SimpleBlockquote",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>SimpleBlockquote</h1>
        );
    },
});
