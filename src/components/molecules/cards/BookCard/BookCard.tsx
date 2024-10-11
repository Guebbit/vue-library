import './BookCard.scss';
import { defineComponent, computed } from 'vue';
import type { PropType } from 'vue'
import useComponentGenerics from '../../../../composables/componentGenerics.ts'

/**
 * Outside setup only composable
 */
const {
    animationProps
} = useComponentGenerics()

export default defineComponent({
    name: 'BookCard',

    props: {
        ...animationProps,

        /**
         *
         */
        title: {
            type: String,
            required: false,
        },

        /**
         *
         */
        author: {
            type: String,
            required: false,
        },

        /**
         *
         */
        color: {
            type: String,
            default: () => '#FFFFFF',
        },

        /**
         *
         */
        rotation: {
            type: Number,
            default: () => 3,
            validator: (value: number) => value < 7.5,
        },


        /**
         *
         */
        height: {
            type: Number,
            required: false,
        },

        /**
         *
         */
        width: {
            type: Number,
            required: false,
        },

        /**
         *
         */
        ratio: {
            type: String,
            required: false,
        },

        /**
         *
         */
        image: {
            type: String,
            required: false,
        },

        /**
         *
         */
        spine: {
            type: String,
            required: false,
        },

        /**
         *
         */
        spineWidth: {
            type: String,
            default: () => '50px',
        },

        /**
         *
         */
        logo: {
            type: String,
            required: false,
        },
    },

    setup(props, { slots }) {
        const trueRatio = computed(() => {
            if (!props.ratio) return 1;
            const ratio = props.ratio.split('/');
            return parseFloat((parseFloat(ratio[1]) / parseFloat(ratio[0])).toFixed(2));
        });

        const trueHeight = computed(() => {
            return props.height ? props.height : props.width ? props.width * trueRatio.value : null;
        });

        const trueWidth = computed(() => {
            return props.width ? props.width : props.height ? props.height * trueRatio.value : null;
        });

        const classes = computed(() => ({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'book-card': true,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'book-custom-size': props.width || props.height,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'book-custom-aspect-ratio': props.ratio,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'is-hoverable': props.hover,
        }));

        const styles = computed(() => ({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            '--book-card-height': props.height ? `${trueHeight.value}px` : null,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            '--book-card-width': props.width ? `${trueWidth.value}px` : null,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            '--book-card-ratio': `${trueRatio.value * 100}%`,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            '--book-card-color': props.color,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            '--book-card-rotation': props.rotation,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            '--book-card-spine-width': props.spineWidth,
        }));

        return () => (
            <div
                class={classes.value}
                style={styles.value}
            >
                <div>
                    <div class="book-cover">
                        <div class="content-cover">
                            {slots.default && slots.default()}
                        </div>
                        <img class="book-cover-image" src={props.image} alt={props.title} title={props.title} />
                        {props.title && <p class="card-top">{props.title}</p>}
                        {props.logo ? (
                            <div class="card-bottom">
                                <img src={props.logo} />
                            </div>
                        ) : props.author ? (
                            <p class="card-bottom">{props.author}</p>
                        ) : null}
                    </div>
                    <div class="book-spine">
                        <div class="content-spine">{slots.spine && slots.spine()}</div>
                        <img
                            class="book-spine-image"
                            src={props.spine ? props.spine : props.image}
                            alt={props.author}
                            title={props.author}
                        />
                        {props.title && <p class="card-top">{props.title}</p>}
                        {props.logo ? (
                            <div class="card-bottom">
                                <img src={props.logo} />
                            </div>
                        ) : props.author ? (
                            <p class="card-bottom">{props.author}</p>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    },
});
