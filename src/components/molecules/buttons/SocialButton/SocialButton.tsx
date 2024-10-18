import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "SocialButton",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>SocialButton</h1>
        );
    },
});
