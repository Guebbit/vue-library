import './OpeningHoursList.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "OpeningHoursList",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>OpeningHoursList</h1>
        );
    },
});
