import './PopupCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "PopupCard",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>PopupCard</h1>
        );
    },
});
