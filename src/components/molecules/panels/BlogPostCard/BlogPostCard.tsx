import './BlogPostCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "BlogPostCard",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>BlogPostCard</h1>
        );
    },
});
