import './SpecialTitle.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "SpecialTitle",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>SpecialTitle</h1>
        );
    },
});
