import './SimpleCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "SimpleCard",

    props: {
        background: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: false,
        },
        subtitle: {
            type: String,
            required: false,
        },
        info: {
            type: Object as PropType<Record<string, string | number>>,
            default: () => ({}),
        },
        textColor: {
            type: String,
            required: false,
        },
        backgroundColor: {
            type: String,
            required: false,
        },
    },

    setup(props, { slots }) {
        return () => (
            <>
                <div class="simple-card grayscale-active grayscale-reverse-on-hover shadow-on-hover">
                    <img class="card-image" src="http://placedog.net/1000/600" />
                    <div class="highlight-belt bend-bottom">
                        <b>Lorem Ipsum</b>
                    </div>
                    <div class="card-content">
                        <h2 class="card-title">Title of lorem ipsum</h2>
                        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                        <br />
                        <div class="card-actions card-actions-center">
                            {[
                                "Lorem Ipsum",
                                "Lorem Ipsum",
                                "Lorem Ipsum",
                                "Lorem Ipsum",
                            ].map((text, index) => (
                                <span
                                    key={index}
                                    class="simple-text-icon icon-highlight column-mode"
                                >
                  <svg class="icon card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                                    {index === 2 ? (
                                        <div class="icon">
                                            <img src="https://placedog.net/50/50" />
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    {text}
                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    class="simple-user-card"
                    style={{
                        "--simple-user-card-color": props.textColor,
                        "--simple-user-card-background": props.backgroundColor,
                    }}
                >
                    {slots.background ? (
                        slots.background()
                    ) : (
                        <img
                            v-show={props.background}
                            class="card-background"
                            src={props.background}
                        />
                    )}

                    <div class="card-content">
                        {slots.image ? (
                            slots.image()
                        ) : (
                            <img
                                v-show={props.image}
                                class="card-image"
                                src={props.image}
                                alt={`${props.title} ${props.subtitle}`}
                            />
                        )}

                        <h4 class="card-title">{props.title}</h4>
                        <p class="card-subtitle">{props.subtitle}</p>

                        {slots.default ? (
                            slots.default()
                        ) : (
                            <ul class="card-info">
                                {Object.entries(props.info).map(([label, number]) => (
                                    <li key={`card-info-${label}${number}`}>
                                        <span class="label">{label}</span>
                                        <span class="value">{number}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </>
        );
    },
});