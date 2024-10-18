import './SolarSystemLoad.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "SolarSystemLoad",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>SolarSystemLoad</h1>
        );
    },
});
