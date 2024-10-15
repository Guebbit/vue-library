## Simple
Custom CSS (or SCSS) variables to change style

::: raw
<div class="dev-section">
    <SimpleCard
        variant="elevated"
        :theme="{
            'icon-color': 'rgb(255 152 0)',
            'border-color': 'rgb(0 188 212)',
            'shadow-color': '255 152 0',
        }"
        :text="exampleText"
        border-full
    >
        <SimpleCardHeader>
            <SimpleCardActions>
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </SimpleCardActions>
            <span class="card-title">Lorem Ipsum</span>
            <SimpleCardActions>
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </SimpleCardActions>
        </SimpleCardHeader>
    </SimpleCard>
    <SimpleCard
        variant="elevated"
        :theme="{
            'title-color': 'rgb(255 152 0)',
            'active-title-color': 'inherit',
            'active-background': 'rgba(0 188 212 / 0.4)',
            'active-shadow-color': '255 152 0',
        }"
        title="Title of lorem ipsum"
        subtitle="Subtitle of lorem ipsum"
        :text="exampleText"
    />
    <SimpleCard
        variant="overlay"
        title="Title of Lorem Ipsum"
        subtitle="Subtitle of Lorem Ipsum"
        background="https://placedog.net/600/600"
        :text="exampleText"
    >
        <template v-slot:footer>
            <SimpleButton
                size="small"
                :theme="{
                    'background': 'rgb(0 188 212)',
                    'active-background': 'rgb(255 152 0)',
                }"
            >
                1000 €
            </SimpleButton>
        </template>
    </SimpleCard>
    <SimpleCard>
        <div class="card-container card-has-overlay">
            <div class="card-overlay"></div>
            <SimpleCardMedia
                media="https://placedog.net/700/700"
                background
            />
            <SimpleCardContent :text="exampleText" />
        </div>
        <SimpleCardMedia
            media="http://assets.guebbit.com/guebbit/video/normal.mp4"
            video
            type="video/mp4"
        />
        <div class="card-container card-has-overlay">
            <div class="card-overlay"></div>
            <SimpleCardMedia
                media="https://placedog.net/800/400"
                background
            />
            <SimpleCardHeader>
                <SimpleCardActions>
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </SimpleCardActions>
                <span class="card-title">Lorem Ipsum</span>
                <SimpleCardActions>
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </SimpleCardActions>
            </SimpleCardHeader>
            <SimpleCardContent>{{ exampleText }}</SimpleCardContent>
            <SimpleCardFooter>
                Footer
            </SimpleCardFooter>
        </div>
    </SimpleCard>
</div>
:::

::: code-group
```html [border and icons mixed colors]
<SimpleCard
    variant="elevated"
    :theme="{
        'icon-color': 'rgb(255 152 0)',
        'border-color': 'rgb(0 188 212)',
        'shadow-color': '255 152 0',
    }"
    :text="exampleText"
    border-full
>
    <SimpleCardHeader>
        <SimpleCardActions>
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </SimpleCardActions>
        <span class="card-title">Lorem Ipsum</span>
        <SimpleCardActions>
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </SimpleCardActions>
    </SimpleCardHeader>
</SimpleCard>
```
```html [HOVER background and shadow mixed colors]
<SimpleCard
    variant="elevated"
    :theme="{
        'title-color': 'rgb(255 152 0)',
        'active-title-color': 'inherit',
        'active-background': 'rgba(0 188 212 / 0.4)',
        'active-shadow-color': '255 152 0',
    }"
    title="Title of lorem ipsum"
    subtitle="Subtitle of lorem ipsum"
    :text="exampleText"
/>
```
```html [Descriptive background card]
<SimpleCard
    variant="overlay"
    title="Title of Lorem Ipsum"
    subtitle="Subtitle of Lorem Ipsum"
    background="https://placedog.net/600/600"
    :text="exampleText"
>
    <template v-slot:footer>
        <SimpleButton
            size="small"
            :theme="{
                'background': 'rgb(0 188 212)',
                'active-background': 'rgb(255 152 0)',
            }"
        >
            1000 €
        </SimpleButton>
    </template>
</SimpleCard>
```
```html [Mix of various media and combinations]
<SimpleCard>
    <div class="card-container card-has-overlay">
        <div class="card-overlay"></div>
        <SimpleCardMedia
            media="https://placedog.net/700/700"
            background
        />
        <SimpleCardContent :text="exampleText" />
    </div>
    <SimpleCardMedia
        media="http://assets.guebbit.com/guebbit/video/normal.mp4"
        video
        type="video/mp4"
    />
    <div class="card-container card-has-overlay">
        <div class="card-overlay"></div>
        <SimpleCardMedia
            media="https://placedog.net/800/400"
            background
        />
        <SimpleCardHeader>
            <SimpleCardActions>
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </SimpleCardActions>
            <span class="card-title">Lorem Ipsum</span>
            <SimpleCardActions>
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </SimpleCardActions>
        </SimpleCardHeader>
        <SimpleCardContent>{{ exampleText }}</SimpleCardContent>
        <SimpleCardFooter>
            Footer
        </SimpleCardFooter>
    </div>
</SimpleCard>
```
:::
