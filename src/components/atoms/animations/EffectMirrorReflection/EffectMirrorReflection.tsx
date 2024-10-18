import './EffectMirrorReflection.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "EffectMirrorReflection",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>EffectMirrorReflection</h1>
        );
    },
});
