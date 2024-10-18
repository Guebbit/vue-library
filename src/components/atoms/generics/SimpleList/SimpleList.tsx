import './SimpleList.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "SimpleList",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>SimpleList</h1>
        );
    },
});
