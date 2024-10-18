import './GearLoad.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "GearLoad",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>GearLoad</h1>
        );
    },
});
