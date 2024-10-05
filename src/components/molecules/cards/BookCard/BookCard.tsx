import './BookCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "SimpleCard",


    setup(props, { slots }) {
        return () => (
            <h1>TEST</h1>
        );
    },
});