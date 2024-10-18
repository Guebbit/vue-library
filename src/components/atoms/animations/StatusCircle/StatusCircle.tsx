import './StatusCircle.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "StatusCircle",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>StatusCircle</h1>
        );
    },
});
