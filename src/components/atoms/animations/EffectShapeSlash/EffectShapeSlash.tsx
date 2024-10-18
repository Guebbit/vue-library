import './EffectShapeSlash.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "EffectShapeSlash",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>EffectShapeSlash</h1>
        );
    },
});
