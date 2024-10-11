# Guebbit VUE Library
Extension of @guebbit/css-ui library

## Implement global theme css

```scss
@use "@guebbit/vue-library/src/assets/theme" as theme;

:root{
    @include theme.theme-generic;
    @include theme.theme-dark-builder;
}
.#{theme.$css-ui-dark-theme-class}{
    :root{
        @include theme.theme-dark-builder;
    }
}
@media (prefers-color-scheme: dark) {
    :root{
        @include theme.theme-dark-builder;
    }
}

```



TODO
 - tests/utils/nightwatchCheckRules.ts: Why rules[i].styles needs !, typescript is not inferring correcly? (html, classes, etc have all the same problem)
 - sometimes nightwatch test fails for no reason (normal?).
 - Nightwatch firefox and firefoxHeadless NOT working
 - SimpleButton social rollup

Vue3
https://blog.vuejs.org/posts/vue-3-2
https://blog.vuejs.org/posts/vue-3-3
https://blog.vuejs.org/posts/vue-3-4
https://blog.stackademic.com/learn-these-new-features-in-vue-3-5-now-2909e24aa58d
https://vuejs.org/guide/components/v-model.html

Typescript
https://vuejs.org/guide/typescript/overview.html
https://vuejs.org/guide/typescript/composition-api.html
https://github.com/vuetifyjs/vuetify/discussions/13553

Check
https://lighthouse-metrics.com/lighthouse/checks/0a63a778-592d-4ae0-bf68-22c3cf8524a3
https://medium.com/@blessingmba3/micro-frontends-with-vue-js-breaking-down-monolithic-structures-aac15f053047