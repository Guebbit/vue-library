import './ActionPanel.scss';
import { defineComponent, h } from "vue";
import ActionPanelActions from './ActionPanelActions.tsx';
import SimplePanel from '../../../atoms/panels/SimplePanel/SimplePanel.tsx'

export default defineComponent({
    name: "ActionPanel",
    extends: SimplePanel,

    props: {
        /**
         * Content title (if not slot)
         */
        title: {
            type: String,
            required: false
        },

        /**
         * Tag of title (if not slot)
         */
        titleTag: {
            type: String,
            default: () => "h3"
        },

        /**
         * Content text (if not slot)
         */
        text: {
            type: String,
            default: () => ''
        },

        /**
         * Tag of text (if not slot)
         */
        textTag: {
            type: String,
            default: () => 'p'
        },
    },

    setup(props, { slots, attrs }) {
        return () =>
            <SimplePanel
                class={[attrs.class, "action-panel"]}
                {...props}
                {...attrs}
            >
                {props.title && h(props.titleTag, { class: 'panel-title' }, slots.title ? slots.title() : props.title)}
                {props.text && h(props.textTag, {},slots.text ? slots.text() : props.text)}
                <ActionPanelActions
                    v-slots={{
                        default: slots.actions,
                    }}
                />
                {slots.default?.()}
            </SimplePanel>
    },
});