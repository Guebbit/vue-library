import './NeonButton.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "NeonButton",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>NeonButton</h1>
        );
    },
});
