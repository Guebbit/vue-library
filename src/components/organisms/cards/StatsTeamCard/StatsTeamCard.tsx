import './StatsTeamCard.scss';
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "StatsTeamCard",

    props: {
        
    },

    setup(props, { slots }) {
        return () => (
            <h1>StatsTeamCard</h1>
        );
    },
});
