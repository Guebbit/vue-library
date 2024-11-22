import { defineComponent } from 'vue'
import { THEME_CLASS_PREFIX } from '../../../../_vars'
// https://vuetifyjs.com/en/components/overlays/
// https://github.com/vuetifyjs/vuetify/blob/d31a30020a5e5ad894e12c853bec3576df3dd246/packages/vuetify/src/components/VOverlay/VOverlay#L363
export default defineComponent({
    name: 'Overlay',
    setup(_, { slots }) {
        return () => <h1>{THEME_CLASS_PREFIX}</h1>
    },
})
