import './AdvancingMoon.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "AdvancingMoon",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>AdvancingMoon</h1>
        );
    },
});
