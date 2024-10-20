import './BookFrontLoad.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "BookFrontLoad",

    props: {},

    setup(props, { slots }) {
        return () => (
            <h1>BookFrontLoad</h1>
        );
    },
});

