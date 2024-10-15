<template>
    <Layout
        :style="rootStyles"
    >
        <template #nav-bar-content-after>
            <input style="margin-left: 1em" id="themeCheckbox" type="checkbox" @change="themeSwitch" />
            <label for="themeCheckbox">Theme toggle</label>
        </template>
    </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme;
import useComponentThemes from '../../../src/composables/componentThemes.ts';

const {
    currentTheme,
    rootStyles,
} = useComponentThemes();

/**
 * TODO change with a cool switch (the vitepress one?)
 * Set current global theme on or off
 */
function themeSwitch(event: Event){
    currentTheme.value = (event.target as HTMLInputElement).checked ? "primary" : "";
}
</script>