import './ChooseOptionCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "ChooseOptionCard",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>ChooseOptionCard</h1>
        );
    },
});
