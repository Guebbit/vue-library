import './PanelAskewDoors.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "PanelAskewDoors",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>PanelAskewDoors</h1>
        );
    },
});
