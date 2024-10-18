import { defineComponent } from 'vue'
import Media from '../../../abstracts/Media/Media.tsx';

export default defineComponent({
    name: 'SimplePanelMedia',
    extends: Media,

    setup(props, { attrs }) {
        return () =>
            <Media
                {...props}
                {...attrs}
                style={{
                    ...attrs.style || {}
                }}
                class={[attrs.class, "panel-background"]}
            />
    },
})
