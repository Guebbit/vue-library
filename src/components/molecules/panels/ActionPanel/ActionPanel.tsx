import './ActionPanel.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "ActionPanel",


    setup(props, { slots }) {
        return () => (
            <h1>TEST</h1>
        );
    },
});