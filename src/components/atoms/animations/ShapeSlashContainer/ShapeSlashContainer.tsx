import './ShapeSlashContainer.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "ShapeSlashContainer",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>ShapeSlashContainer</h1>
        );
    },
});
