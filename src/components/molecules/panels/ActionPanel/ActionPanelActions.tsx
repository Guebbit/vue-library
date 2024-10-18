import { defineComponent } from 'vue'

/**
 * Template
 */
export default defineComponent({
    name: 'SimplePanelActions',
    setup(props, { slots }) {
        return () =>
            slots.default && <div class="panel-actions">{slots.default()}</div>
    },
})