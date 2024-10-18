import './ImageSlashCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "ImageSlashCard",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>ImageSlashCard</h1>
        );
    },
});
