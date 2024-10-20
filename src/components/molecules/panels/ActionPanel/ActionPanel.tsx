import './ActionPanel.scss'
import { defineComponent, h } from 'vue'

import { THEME_VAR_PREFIX, THEME_CLASS_PREFIX } from '../../../../_vars.ts'
import useComponentGenerics from '../../../../composables/componentGenerics.ts';
import useComponentThemes from '../../../../composables/componentThemes.ts';
import ActionPanelActions from './ActionPanelActions.tsx'
import SimplePanel from '../../../atoms/panels/SimplePanel/SimplePanel.tsx'

/**
 * Outside setup only composable
 */
const {
    animationProps
} = useComponentGenerics();
const {
    props: themeProps
} = useComponentThemes();

export default defineComponent({
    name: 'ActionPanel',
    extends: SimplePanel,

    props: {
        ...animationProps,
        ...themeProps,

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
            default: () => 'h3'
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
        }
    },

    setup(props, { slots, attrs }) {
        /**
         * Setup only composable
         */
        const {
            animationClasses
        } = useComponentGenerics({ props });
        const {
            styles: themeStyles
        } = useComponentThemes({ props }, THEME_VAR_PREFIX + "simple-panel-");

        return () =>
            <SimplePanel
                {...props}
                {...attrs}
                v-slots={slots}
                class={[
                    THEME_CLASS_PREFIX + 'action-panel',
                    animationClasses.value,
                    attrs.class
                ]}
                style={{ ...attrs.style || {}, ...themeStyles.value || {} }}
            >
                {props.title && h(props.titleTag, { class: THEME_CLASS_PREFIX + 'panel-title' }, slots.title ? slots.title() : props.title)}
                {props.text && h(props.textTag, {}, slots.text ? slots.text() : props.text)}
                <ActionPanelActions
                    v-slots={{
                        default: slots.actions
                    }}
                />
                {slots.default?.()}
            </SimplePanel>
    }
})