## Icons

::: tip Included in the example:
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

::: raw
<div class="dev-section">
    <SimpleCard
        :color="pageTheme"
        title="Title of Lorem Ipsum"
        subtitle="Subtitle of Lorem Ipsum"
        :text="exampleText"
    >
        <template v-slot:headerActions>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </template>
    </SimpleCard>
    <SimpleCard
        :color="pageTheme"
        title="Title of Lorem Ipsum"
        subtitle="Subtitle of Lorem Ipsum"
        :text="exampleText"
    >
        <template v-slot:content>
            {{exampleText}}
            <SimpleCardActions variant="end">
                <SimpleButton>lorem</SimpleButton>
                <SimpleButton>ipsum</SimpleButton>
                <img alt="" class="card-icon" src="https://placedog.net/400/400" />
                <svg class="card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </SimpleCardActions>
            {{exampleText}}
        </template>
    </SimpleCard>
    <SimpleCard
        :color="pageTheme"
    >
        <template v-slot:title>
            Title of Lorem Ipsum
        </template>
        <template v-slot:headerActions>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </template>
        <template v-slot:subtitle>
            Subtitle of Lorem Ipsum
        </template>
        <template v-slot:actions>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </template>
        <template v-slot:content>
            <small>Ut enim ad minim veniam</small>
            <small>Jan 1997 - Mar 2000</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <SimpleCardActions variant="center">
                <SimpleButton>lorem</SimpleButton>
                <SimpleButton>ipsum</SimpleButton>
                <img alt="" class="card-icon" src="https://placedog.net/400/400" />
                <svg class="card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </SimpleCardActions>
        </template>
        <template v-slot:footerActions>
            <SimpleButton>ipsum</SimpleButton>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <img alt="" class="card-icon" src="https://placedog.net/400/400" />
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </template>
    </SimpleCard>
</div>
:::

::: code-group
```html [Simple icon in title]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
>
    <template v-slot:headerActions>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </template>
</SimpleCard>
```
```html [Simple content actions]
<SimpleCard
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    :text="exampleText"
>
    <template v-slot:content>
        {{exampleText}}
        <SimpleCardActions variant="end">
            <SimpleButton>lorem</SimpleButton>
            <SimpleButton>ipsum</SimpleButton>
            <img alt="" class="card-icon" src="https://placedog.net/400/400" />
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </SimpleCardActions>
        {{exampleText}}
    </template>
</SimpleCard>
```
```html [Full (complex)]
<SimpleCard>
    <template v-slot:title>
        Title of Lorem Ipsum
    </template>
    <template v-slot:headerActions>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </template>
    <template v-slot:subtitle>
        Subtitle of Lorem Ipsum
    </template>
    <template v-slot:actions>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </template>
    <template v-slot:content>
        <small>Ut enim ad minim veniam</small>
        <small>Jan 1997 - Mar 2000</small>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <SimpleCardActions variant="center">
            <SimpleButton>lorem</SimpleButton>
            <SimpleButton>ipsum</SimpleButton>
            <img alt="" class="card-icon" src="https://placedog.net/400/400" />
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </SimpleCardActions>
    </template>
    <template v-slot:footerActions>
        <SimpleButton>ipsum</SimpleButton>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <img alt="" class="card-icon" src="https://placedog.net/400/400" />
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </template>
</SimpleCard>
```
:::