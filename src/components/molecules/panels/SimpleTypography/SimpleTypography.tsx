import './SimpleTypography.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "SimpleTypography",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>SimpleTypography</h1>
        );
    },
});
