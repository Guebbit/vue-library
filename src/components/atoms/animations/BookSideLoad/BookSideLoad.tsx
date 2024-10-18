import './BookSideLoad.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "BookSideLoad",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>BookSideLoad</h1>
        );
    },
});
