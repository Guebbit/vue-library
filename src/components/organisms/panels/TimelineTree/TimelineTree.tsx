import './TimelineTree.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "TimelineTree",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>TimelineTree</h1>
        );
    },
});
