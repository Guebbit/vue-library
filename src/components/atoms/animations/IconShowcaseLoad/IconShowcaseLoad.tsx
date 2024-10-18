import './IconShowcaseLoad.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "IconShowcaseLoad",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>IconShowcaseLoad</h1>
        );
    },
});
