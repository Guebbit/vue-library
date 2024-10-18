import './CyberpunkButton.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "CyberpunkButton",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>CyberpunkButton</h1>
        );
    },
});
