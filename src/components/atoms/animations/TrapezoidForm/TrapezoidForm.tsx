import './TrapezoidForm.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "TrapezoidForm",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>TrapezoidForm</h1>
        );
    },
});
