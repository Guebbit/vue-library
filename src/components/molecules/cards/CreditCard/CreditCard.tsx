import './CreditCard.scss'
import { defineComponent } from 'vue'

import { THEME_VAR_PREFIX, THEME_CLASS_PREFIX } from '../../../../_vars.ts'
import useComponentGenerics from '../../../../composables/componentGenerics.ts'
import useComponentThemes from '../../../../composables/componentThemes.ts'
import editSlotItems from '../../../../utils/editSlotItems.ts'

/**
 * Outside setup only composable
 */
const {
    animationProps
} = useComponentGenerics({
    settings: {
        animated: {
            default: () => false,
        }
    }
});

const {
    props: themeProps
} = useComponentThemes()

export default defineComponent({
    name: 'CreditCard',

    props: {
        ...animationProps,
        ...themeProps,

        /**
         * Owner name
         */
        name: {
            type: String,
            required: false
        },

        /**
         *
         */
        logo: {
            type: String,
            required: false
        },

        /**
         *
         */
        background: {
            type: String,
            required: false
        },

        /**
         * Credit card number
         */
        number: {
            type: String,
            required: false
        },

        /**
         * Card expiration date
         */
        expire: {
            type: String,
            required: false
        },

        /**
         * Show back (animate on change)
         */
        back: {
            type: Boolean,
            default: () => false
        },

        /**
         * Regular "card number" text
         */
        cardNumberLabel: {
            type: String,
            default: () => 'card number'
        },

        /**
         * Regular "cardholder name" text
         */
        cardHolderLabel: {
            type: String,
            default: () => 'cardholder name'
        },

        /**
         * Regular "security code" text
         */
        securityCodeLabel: {
            type: String,
            default: () => 'security code'
        },

        /**
         * Regular "security code" text
         */
        securityCodePlaceholder: {
            type: String,
            default: () => 'XXX'
        },

        /**
         * Regular "card number" text
         */
        expirationLabel: {
            type: String,
            default: () => 'expiration'
        },

        /**
         * Regular "VALID" text
         */
        validLabel: {
            type: String,
            default: () => 'VALID'
        },

        /**
         * Regular "THRU" text
         */
        thruLabel: {
            type: String,
            default: () => 'THRU'
        },
    },

    setup(props, { slots, attrs }) {
        /**
         * Setup only composable
         */
        const {
            animationClasses
        } = useComponentGenerics({ props })
        const {
            styles: themeStyles
        } = useComponentThemes({ props }, THEME_VAR_PREFIX + 'credit-card-')

        /**
         *
         */
        const slotLogo = editSlotItems(slots.logo, {
            classes: ["credit-card-logo"]
        })

        const slotChip = slots.chip ?
            editSlotItems(slots.chip, {
                classes: ["credit-card-chip"]
            }) :
            <g class="credit-card-chip">
                <g>
                    <path class="st2"
                        d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3 c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"></path>
                </g>
                <g>
                    <g>
                        <rect x="82" y="70" class="st12" width="1.5" height="60"></rect>
                    </g>
                    <g>
                        <rect x="167.4" y="70" class="st12" width="1.5" height="60"></rect>
                    </g>
                    <g>
                        <path class="st12"
                            d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3 c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3 C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5 c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5 c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"></path>
                    </g>
                    <g>
                        <rect x="82.8" y="82.1" class="st12" width="25.8" height="1.5"></rect>
                    </g>
                    <g>
                        <rect x="82.8" y="117.9" class="st12" width="26.1" height="1.5"></rect>
                    </g>
                    <g>
                        <rect x="142.4" y="82.1" class="st12" width="25.8" height="1.5"></rect>
                    </g>
                    <g>
                        <rect x="142" y="117.9" class="st12" width="26.2" height="1.5"></rect>
                    </g>
                </g>
            </g>

        /**
         * Template
         */
        return () =>
            <div
                class={[
                    THEME_CLASS_PREFIX + 'credit-card',
                    animationClasses.value,
                    props.back ? "animate-active" : ""
                ]}
                style={{ ...attrs.style || {}, ...themeStyles.value || {} }}
                {...attrs}
            >
                <div class="credit-card-true">
                    <div class="front">
                        {slotLogo}
                        <svg version="1.1" class="credit-card-front" x="0px" y="0px" viewBox="0 0 750 471">
                    <g>
                      <g>
                        <g>
                          <g>
                            <path class="top-card"
                                d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40 C0,17.9,17.9,0,40,0z"></path>
                          </g>
                        </g>
                          <path class="bottom-card"
                              d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"></path>
                      </g>
                        <text transform="matrix(1 0 0 1 60.106 295.0121)"
                            class="svg-label-identification st2 st3 st4">{(props.number || "").replace(/(.{4})/g, '$1 ')}</text>
                        <text transform="matrix(1 0 0 1 54.1064 428.1723)"
                            class="svg-label-name st2 st5 st6">{props.name}</text>
                        <text transform="matrix(1 0 0 1 54.1074 389.8793)"
                            class="svg-label-holder st7 st5 st8">{props.cardHolderLabel}</text>
                        <text transform="matrix(1 0 0 1 479.7754 388.8793)"
                            class="svg-label-expiration st7 st5 st8">{props.expirationLabel}</text>
                        <text transform="matrix(1 0 0 1 65.1054 241.5)"
                            class="st7 st5 st8">{props.cardNumberLabel}</text>
                        <g>
                        <text transform="matrix(1 0 0 1 574.4219 433.8095)"
                            class="svg-value-expiration st2 st5 st9">{props.expire}</text>
                            <text transform="matrix(1 0 0 1 479.3848 417.0097)"
                                class="svg-label-expiration st2 st10 st11">{props.validLabel}</text>
                            <text transform="matrix(1 0 0 1 479.3848 435.6762)"
                                class="svg-label-expiration st2 st10 st11">{props.thruLabel}</text>
                            <polygon class="svg-label-expiration st2"
                                points="554.5,421 540.4,414.2 540.4,427.9"></polygon>
                      </g>
                        {slotChip}
                    </g>
                            <g></g>
                  </svg>
                    </div>
                    <div class="back">
                        <svg version="1.1" class="credit-card-back" x="0px" y="0px" viewBox="0 0 750 471">
                    <g>
                      <line class="st0" x1="35.3" y1="10.4" x2="36.7" y2="11"></line>
                    </g>
                            <g>
                      <g>
                        <g>
                          <path class="back-card"
                              d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40 C0,17.9,17.9,0,40,0z"></path>
                        </g>
                      </g>
                                <rect y="61.6" class="st2" width="750" height="78"></rect>
                                <g>
                        <path class="st3"
                            d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5 C707.1,246.4,704.4,249.1,701.1,249.1z"></path>
                                    <path class="svg-label-expiration st5"
                                        d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"></path>
                      </g>
                                <text transform="matrix(1 0 0 1 621.999 227.2734)"
                                    class="svg-value-security st6 st7">{props.securityCodePlaceholder}</text>
                                <g class="st8">
                        <text transform="matrix(1 0 0 1 518.083 280.0879)"
                            class="svg-label-security st9 st6 st10">{props.securityCodeLabel}</text>
                      </g>
                                <rect x="58.1" y="378.6" class="st11" width="375.5" height="13.5"></rect>
                                <rect x="58.1" y="405.6" class="st11" width="421.7" height="13.5"></rect>
                                <text transform="matrix(1 0 0 1 59.5073 228.6099)" class="st12 st13 owner-name-back-slot">{props.name}</text>
                    </g>
                  </svg>
                    </div>
                </div>
            </div>
    }
})