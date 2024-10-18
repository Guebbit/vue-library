import './SvgTitle.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "SvgTitle",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>SvgTitle</h1>
        );
    },
});
