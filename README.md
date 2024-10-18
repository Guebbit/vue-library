# Guebbit VUE Library
Extension of @guebbit/css-ui library


# SCSS theming

## Implement global theme css

- $css-ui-dark-theme-class: In case you want to toggle the dark theme via css class
- $css-ui-var-prefix: In case you want to add a prefix to avoid name conflicts
- $css-ui-root-prefix: Same as $css-ui-var-prefix but for global theme

```scss
@use "@guebbit/css-ui/src/theme" as ui with (
  $css-ui-dark-theme-class: "theme--dark",
  $css-ui-var-prefix: "my-prefix-",
  $css-ui-root-prefix: "g-theme-",
);
```

Example to setup your personalized color scheme through CSS

```scss
$primary-color: #00bcd4 !default;
$secondary-color: #ff9800 !default;
$primary-color--dark: #00bcd4 !default;
$secondary-color--dark: #ff9800 !default;

@use "@guebbit/css-ui/src/theme" as ui with (
  $css-ui-dark-theme-class: "theme--dark",
  $css-ui-var-prefix: "my-prefix-",
  $css-ui-root-prefix: "g-theme-",
  $color: $primary-color,
  $color--dark: $primary-color--dark,
  $active-color: $secondary-color,
  $active-color--dark: $secondary-color--dark,
);

:root{
  @include ui.theme-generic;
  @include ui.theme-dark-builder;
}
.#{ui.$css-ui-dark-theme-class}{
  :root{
    @include ui.theme-dark-builder;
  }
}
@media (prefers-color-scheme: dark) {
  :root{
    @include ui.theme-dark-builder;
  }
}
```

You can use css-toolkit through here since it's a dependency.
You can easily create new colors (css vars + various classes and helpers)
or import default colors from the library

```scss
@use "@guebbit/css-toolkit" as guebbit;

/**
 * Create specific colors (css vars and various classes),
 * unrelated to the componets but of global use
 * (optional)
 */
@include guebbit.create-colors(guebbit.$colors-collection);
@include guebbit.create-colors((
        "primary": guebbit.create-collection($primary-color),
        "secondary": guebbit.create-collection($secondary-color),
        "primary--dark": guebbit.create-collection($primary-color--dark),
        "secondary--dark": guebbit.create-collection($secondary-color--dark)
));
```

Full example of a theme.scss for your repo.

```scss
@use "@guebbit/css-toolkit" as guebbit;
@forward "@guebbit/css-toolkit";


/**
 * "Install" (via CSS) theme colors and settings
 * for all components of this library
 */
@forward "../src/vars";
@use "../src/vars" as theme;
@use "@guebbit/css-ui/src/theme" as ui with (
  $css-ui-dark-theme-class: theme.$css-ui-dark-theme-class,
  $css-ui-var-prefix: theme.$css-ui-var-prefix,
  $css-ui-root-prefix: theme.$css-ui-root-prefix,
  $color: theme.$primary-color,
  $color--dark: theme.$primary-color--dark,
  $active-color: theme.$secondary-color,
  $active-color--dark: theme.$secondary-color--dark,
);

/**
 * Implement theme (insert in the css)
 */
:root{
    @include ui.theme-generic;
    @include ui.theme-dark-builder;
}
.#{ui.$css-ui-dark-theme-class}{
    :root{
        @include ui.theme-dark-builder;
    }
}
@media (prefers-color-scheme: dark) {
    :root{
        @include ui.theme-dark-builder;
    }
}

/**
 * Create specific colors (css vars and various classes),
 * unrelated to the componets but of global use
 */
@include guebbit.create-colors(guebbit.$colors-collection);
@include guebbit.create-colors((
    "primary": guebbit.create-collection(theme.$primary-color),
    "secondary": guebbit.create-collection(theme.$secondary-color),
    "primary--dark": guebbit.create-collection(theme.$primary-color--dark),
    "secondary--dark": guebbit.create-collection(theme.$secondary-color--dark)
));

```
--------------------------

# TODO

 - tests/utils/nightwatchCheckRules.ts: Why rules[i].styles needs !, typescript is not inferring correcly? (html, classes, etc have all the same problem)
 - sometimes nightwatch test fails for no reason (normal?).
 - Nightwatch firefox and firefoxHeadless NOT working
 - SimpleButton social rollup
 - Icon.tsx todo?
 - Create tests
 - Take @guebbit/css-ui component styles and put them as basic props in this repo components

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