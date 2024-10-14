import { defineComponent, type VNode } from 'vue'
import useComponentVariants from '../../../../composables/componentVariants.ts'

export enum ESimpleCardActionsVariants {
    START = 'start',
    CENTER = 'center',
    END = 'end',
    VERTICAL = 'vertical',
}

/**
 * Outside setup only composable
 */
const {
    props: variantsProps
} = useComponentVariants<ESimpleCardActionsVariants>({
    settings: {
        default: () => ESimpleCardActionsVariants.START
    }
})

/**
 * Template
 */
export default defineComponent({
    name: 'SimpleCardActions',
    props: {
        ...variantsProps,
    },
    setup(props, { slots }) {
        /**
         * Setup only composable
         */
        const {
            classes: variantsClasses
        } = useComponentVariants<ESimpleCardActionsVariants>({ props }, 'card-section-');

        /**
         * Template
         */
        const translatedSlot = (() => {
            if(!slots.default)
                return null;
            const transformedVNodesArray: VNode[] = [];
            const foundVNodesArray = slots.default() || [];
            for (let i = 0, len = foundVNodesArray.length; i < len; i++)
                if(foundVNodesArray[i]){
                    foundVNodesArray[i].props = {
                        ...foundVNodesArray[i].props,
                        class: `${foundVNodesArray[i].props?.class || ''} card-icon`
                    }
                    transformedVNodesArray.push(foundVNodesArray[i])
                }
            if(transformedVNodesArray.length > 0)
                return transformedVNodesArray;
            return slots.default()
        })()

        /**
         * Template
         */
        return () =>
            slots.default && <div class={['card-actions', variantsClasses.value]}>{translatedSlot}</div>
    },
})