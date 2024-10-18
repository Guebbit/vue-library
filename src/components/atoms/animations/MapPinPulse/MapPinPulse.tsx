import './MapPinPulse.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "MapPinPulse",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>MapPinPulse</h1>
        );
    },
});
