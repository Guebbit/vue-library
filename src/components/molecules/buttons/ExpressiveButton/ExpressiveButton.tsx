import './ExpressiveButton.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "ExpressiveButton",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>ExpressiveButton</h1>
        );
    },
});
