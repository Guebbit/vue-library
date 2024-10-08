import './AspectRatio.scss';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

/**
 * Component
 */
export default defineComponent({
    name: 'AspectRatio',

    props: {
        /**
         * Wanted ratio
         */
        ratio: {
            type: Number as PropType<number>,
            default: 100,
        },
    },

    setup(props, { slots }) {
        return () => (
          // eslint-disable-next-line @typescript-eslint/naming-convention
          <div class="aspect-ratio-container" style={{ '--aspect-ratio': `${props.ratio}%` }}>
              {slots.default?.()}
          </div>
        );
    },
});
