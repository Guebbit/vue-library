import './AdvancingMoonReveal.scss';
import { computed, CSSProperties, defineComponent } from 'vue'
import { THEME_VAR_PREFIX, THEME_CLASS_PREFIX } from '../../../../_vars'
import editSlotItems from '../../../../utils/editSlotItems'
import useComponentGenerics from '../../../../composables/componentGenerics'

/**
 * Outside setup only composable
 */
const {
    animationProps
} = useComponentGenerics();

function propsGenerator(instructions: Array<[string, unknown]> = []){
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    return props;
}

function styleGenerator(instructions: Record<string, string | number>){
    const style: Record<string, string | number> = {};
    for(const [ key, value ] of Object.entries(instructions)){
        if(!value)
            continue;
        style[THEME_VAR_PREFIX + key] = value;
    }
    return style;
}

const cssProps = propsGenerator([
    ["duration", Number],
    ["blur-start", String],
    ["blur-end", String],
    ["opacity-start", Number],
    ["opacity-end", Number],
    ["scale-start", Number],
    ["scale-end", Number],
    ["slide-x-start", Number], // string or both
    ["slide-x-end", Number], // string or both
    ["slide-y-start", Number], // string or both
    ["slide-y-end", Number], // string or both
]);

console.log("1111111111111", cssProps)


export default defineComponent({
    name: "AdvancingMoonReveal",

    props: {
        ...animationProps,
        ...cssProps,
    },

    setup(props, { slots }) {
        console.log("2222222222222222", { ...styleGenerator(props) })

        /**
         * Setup only composable
         */
        const {
            animationClasses
        } = useComponentGenerics({ props });

        /**
         *
         */
        const slotDefault = computed(() => editSlotItems(slots.default, {
            styles: {
                ...styleGenerator(props)
            },
            classes: [
                THEME_CLASS_PREFIX  + "advancing-moon-reveal",
                ...animationClasses.value
            ]
        }));

        /**
         * Template
         */
        return () => slotDefault.value;
    },
});
