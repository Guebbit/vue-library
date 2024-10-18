import './EffectColorPopup.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "EffectColorPopup",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>EffectColorPopup</h1>
        );
    },
});
