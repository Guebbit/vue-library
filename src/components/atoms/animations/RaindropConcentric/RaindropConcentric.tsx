import './RaindropConcentric.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "RaindropConcentric",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>RaindropConcentric</h1>
        );
    },
});
