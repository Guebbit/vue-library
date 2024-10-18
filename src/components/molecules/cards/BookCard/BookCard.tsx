import './BookCard.scss';
import { defineComponent, computed } from 'vue';
import SimpleCard, { ESimpleCardVariants } from '../SimpleCard/SimpleCard.tsx'
import CardFooter from '../SimpleCard/SimpleCardFooter.tsx'
import CardActions from '../SimpleCard/SimpleCardActions.tsx'
import CardContent from '../SimpleCard/SimpleCardContent.tsx'
import CardHeader from '../SimpleCard/SimpleCardHeader.tsx'
import useComponentGenerics from '../../../../composables/componentGenerics.ts'
import useComponentVariants from '../../../../composables/componentVariants.ts'
import useComponentThemes from '../../../../composables/componentThemes.ts'
import editSlotItems from '../../../../utils/editSlotItems.ts'
import CardMedia from '../SimpleCard/SimpleCardMedia.tsx'

export default defineComponent({
    name: 'BookCard',

    extends: SimpleCard,

    props: {

        /**
         * TODO
         */
        author: {
            type: String,
            required: false,
        },

        /**
         * TODO
         */
        rotation: {
            type: Number,
            default: () => 3,
            validator: (value: number) => value < 7.5,
        },

        /**
         *
         */
        cover: {
            type: String,
            required: false,
        },

        /**
         * Cover media ratio
         */
        ratio: {
            type: [Number, String],
            required: false
        },

        /**
         * on props.video only, determine video type of cover
         */
        type: {
            type: String,
            default: () => ''
        },

        /**
         * Doesn't have ratio or video, would be useless
         */
        spine: {
            type: String,
            required: false,
        },

        /**
         *
         */
        spineTitle: {
            type: String,
            required: false,
        },

        /**
         *
         */
        spineTitleTag: {
            type: String,
            default: () => "span"
        },

        /**
         * TODO
         */
        spineWidth: {
            type: String,
            default: () => '50px',
        },
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
        } = useComponentThemes({ props }, "simple-card-");
        const {
            classes: variantsClasses
        } = useComponentVariants<ESimpleCardVariants>({
            props,
            enumItem: ESimpleCardVariants
        }, "card-");

        /**
         * Aggregator of all the classes of component
         */
        const classes = computed(() => [
            'book-card',
            animationClasses.value,
            variantsClasses.value,
            props.disabled ? 'card-disabled' : '',
        ]);

        /**
         *
         */
        const slotCover = editSlotItems(slots.cover, {
            className: "card-media"
        });

        /**
         *
         */
        const slotSpine = editSlotItems(slots.spine, {
            className: "card-background"
        });


        return () => (
            <div
                class={[attrs.class, classes.value]}
                style={{ ...attrs.style || {}, ...themeStyles.value || {} }}
                {...attrs}
            >
                <div>
                    <div class="book-cover">
                        <CardHeader
                            title={props.title}
                            titleTag={props.titleTag}
                            sub={props.subtitle}
                            subTag={props.subtitleTag}
                            v-slots={{
                                actions: slots.headerActions,
                                default: slots.header,
                                sub: slots.subtitle,
                                title: slots.title,
                            }}
                        />
                        {slots.default ? slots.default() : null}
                        <CardContent
                            text={props.text}
                            tag={props.textTag}
                            v-slots={{
                                default: slots.content,
                                actions: slots.contentActions,
                            }}
                        />
                        {
                            slotCover.length > 0 ?
                                slotCover :
                                props.cover ?
                                    <CardMedia
                                        media={props.cover}
                                        ratio={props.ratio}
                                        class="card-media"
                                        type={
                                            props.video ?
                                                (props.type ?
                                                        props.type :
                                                        props.cover.split('.').pop()
                                                ) : undefined
                                        }
                                    />
                                    : null
                        }
                        <CardActions
                            variant="absolute"
                            v-slots={{
                                default: slots.actions,
                            }}
                        />
                        <CardFooter
                            v-slots={{
                                default: slots.footer,
                                actions: slots.footerActions,
                            }}
                        />
                    </div>
                    <div class="book-spine">
                        <CardHeader
                            title={props.spineTitle}
                            titleTag={props.spineTitleTag}
                            v-slots={{
                                default: slots.spineHeader,
                            }}
                        />
                        {
                            slotSpine.length > 0 ?
                                slotSpine :
                                props.spine ?
                                    <CardMedia
                                        media={props.spine}
                                        class="card-background"
                                    />
                                    : null
                        }
                        <CardFooter
                            v-slots={{
                                default: slots.spineFooter,
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
});
