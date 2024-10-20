import { defineComponent } from 'vue'
import { THEME_CLASS_PREFIX } from '../../../../_vars.ts'
import Media from '../../../abstracts/Media/Media.tsx';

export default defineComponent({
    name: 'SimplePanelMedia',
    extends: Media,

    setup(props, { attrs, slots }) {
        return () =>
            <Media
                {...props}
                {...attrs}
                style={{
                    ...attrs.style || {}
                }}
                class={[attrs.class, THEME_CLASS_PREFIX + "panel-background"]}
                v-slots={slots}
            />
    },
})
