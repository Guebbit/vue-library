import './AdvancingMoonReveal.scss';
import { defineComponent } from "vue";
import editSlotItems from '../../../../utils/editSlotItems.ts'
import useComponentGenerics from '../../../../composables/componentGenerics.ts'

/**
 * Outside setup only composable
 */
const {
    animationProps
} = useComponentGenerics();

function propsToVars(instructions: Array<string, StringConstructor | NumberConstructor | BooleanConstructor> = []){
    const props :Record<string, any> = {};
    for(let i = instructions.length; i--; ){
        if(!instructions[i])
            continue;
        const [ name, type = Number ] = instructions[i];
        props[name] = {
            type,
            default: () => false
        }
    }
}

const cssProps = propsToVars([
    ["duration", Number],
    ["blur-start", String],
    ["blur-end", String],
    ["opacity-start", Number],
    ["opacity-end", Number],
    ["scale-start", Number],
    ["scale-end", Number],
    ["slide-x-start", Number],
    ["slide-x-end", Number],
    ["slide-y-start", Number],
    ["slide-y-end", Number],
])

export default defineComponent({
    name: "AdvancingMoonReveal",
    
    props: {
        ...cssProps,
    },

    setup(props, { slots }) {
        /**
         * Setup only composable
         */
        const {
            animationClasses
        } = useComponentGenerics({ props });

        console.log("AAAAAAAAAAAAAAAAA", animationClasses.value)

        /**
         * Template
         */
        return () => editSlotItems(slots.default, {
            classes: [
                "advancing-moon-reveal",
                animationClasses.value
            ]
        });
    },
});
