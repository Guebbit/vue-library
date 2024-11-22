<template>
    <ComponentTester
        v-model="variantsModel"
        :code="code"
        :options="variantsList"
        multiple
    >
        <SimpleCard
            v-bind="props"
        />

        <template v-slot:configuration>
            <v-checkbox
                v-for="(value, key) in checkboxesRefs"
                v-model="checkboxesRefs[key]"
                :key="key"
                :label="checkboxesLabels[key]"
            />

            <v-select
                v-model="mediaPosition"
                :items="['', 'right', 'left']"
                :label="t('Choose Media Position')"
            ></v-select>

            <v-select
                v-model="borderPosition"
                :items="['top', 'bottom', 'left', 'right', 'full']"
                :label="t('Choose Border Position')"
                multiple
            ></v-select>

            <v-text-field
                v-model="aspectRatio"
                :label="t('Enter Aspect Ratio (e.g. 16/9)')"
            ></v-text-field>
        </template>
    </ComponentTester>
</template>

<script lang="ts" setup>
// TODO https://github.com/vuetifyjs/vuetify/blob/7d42299c1f5f18ae720b6c3c7e10997acaffc9af/packages/docs/src/components/examples/UsageExample.vue#L4
// TODO https://github.com/vuetifyjs/vuetify/blob/7d42299c1f5f18ae720b6c3c7e10997acaffc9af/packages/docs/src/examples/v-card/usage.vue

import { computed, ref } from 'vue';
import ComponentTester from '../docs/.vitepress/components/ComponentTester.vue'
import { propsToString } from '../docs/.vitepress/utils/helpers'
import { ESimpleCardVariants, SimpleCard } from '../src/index'

const name = 'SimpleCard'

//const { t } = useI18n()
function t(val){
    return val
}

/**
 *
 */
const checkboxesLabels = {
    showTitle: t("Set title"),
    showSubtitle: t("Set subtitle"),
    showText: t("Set text"),
    showMedia: t("Set media"),
    showMediaHover: t("Show media on hover"),
    showBackground: t("Set background"),
    showBackgroundHover: t("Show background on hover"),
    toggleVideo: t("Toggle video media"),
};
const checkboxesRefs = ref({
    showTitle: true,
    showSubtitle: true,
    showText: true,
    showMedia: false,
    showMediaHover: false,
    showBackground: false,
    showBackgroundHover: false,
    toggleVideo: false,
});

/**
 *
 */
const variantsModel = ref<ESimpleCardVariants[]>([]);
const variantsList = Object.values(ESimpleCardVariants);

/**
 *
 */
const exampleTitle = "Title of Lorem Ipsum";
const exampleSubtitle = "Subtitle of Lorem Ipsum";
const exampleText = 'Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor Lorem Ipsum sit dolor'
const exampleMediaImage = "https://placedog.net/500/500";
const exampleMediaVideo = "http://assets.guebbit.com/guebbit/video/normal.mp4";
const exampleMediaHover = "https://placedog.net/700/700";
const exampleBackgroundImage = "https://placedog.net/800/800";
const exampleBackgroundVideo = "http://assets.guebbit.com/guebbit/video/normal.mp4";
const exampleBackgroundHover = "https://placedog.net/1000/1000";

/**
 *
 */
const mediaPosition = ref('');
const borderPosition = ref([]);
const aspectRatio = ref('16/9');

/**
 *
 */
const props = computed(() => {
    return {
        //
        variants: variantsModel.value.length > 0 && variantsModel.value.every(element => variantsList.includes(element)) ? variantsModel.value : undefined,
        //
        title: checkboxesRefs.value.showTitle ? exampleTitle : undefined,
        subtitle: checkboxesRefs.value.showSubtitle ? exampleSubtitle : undefined,
        text: checkboxesRefs.value.showText ? exampleText : undefined,
        media: checkboxesRefs.value.showMedia ? (checkboxesRefs.value.toggleVideo ? exampleMediaVideo : exampleMediaImage) : undefined,
        mediaHover: checkboxesRefs.value.showMediaHover ? exampleMediaHover : undefined,
        background: checkboxesRefs.value.showBackground ? (checkboxesRefs.value.toggleVideo ? exampleBackgroundVideo : exampleBackgroundImage) : undefined,
        backgroundHover: checkboxesRefs.value.showBackgroundHover ? exampleBackgroundHover : undefined,
        video: checkboxesRefs.value.toggleVideo ? true : undefined,
        backgroundVideo: checkboxesRefs.value.toggleVideo ? true : undefined,
        type: checkboxesRefs.value.toggleVideo ? "video/mp4" : undefined,
        backgroundType: checkboxesRefs.value.toggleVideo ? "video/mp4" : undefined,
        //
        mediaAlignment: mediaPosition.value,
        borderPosition: borderPosition.value.length > 0 ? borderPosition.value : undefined,
        ratio: aspectRatio.value,
    }
})

/**
 *
 */
const slots = computed(() => {
    let str = '...'
    // TODO
    return str
})
const code = computed(() => {
    return `<${name}${propsToString(props.value)}>${slots.value}</${name}>`
})
</script>

<style>
body {
    max-width: 900px;
    margin: 0 auto !important;
}
</style>
