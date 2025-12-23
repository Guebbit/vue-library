<script setup lang="ts" generic="T">
    import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

    const {
    items = [],
    pageSize = 9,
    infinite,
    online,
} = defineProps<{
    /**
    * The items that need to be added to pagination
    */
    items?: T[]

    /**
    * How many items do you want to see
    */
    pageSize?: number

    /**
    * Enable infinite scroll
    */
    infinite?: boolean

    /**
    * Enable infinite scroll with pagination managed from BE
    * The inner pagination will NOT work anymore,
    * :items to the slot will be given fully
    *
    * WARNING:
    * - pageSize will NOT be used
    * - currentPage become more like "number of pages loaded"
    */
    online?: boolean
    }>()

    const emit = defineEmits<{
    'update:scroll': [page: number]
    }>()

    /**
    * Current page of scroll
    */
    const currentPage = defineModel<number>({
    default: 1,
})

    /**
    * Alert that page has changed
    * (could be useful to start a fetch request)
    */
    watch(currentPage, (page) => emit('update:scroll', page))

    /**
    * Current items of current page
    */
    const pageItems = computed(() => {
        // Read online prop
        if (online) {
        return items
    }
        const start = (currentPage.value - 1) * pageSize
        const end = start + pageSize
        return items.slice(start, end)
    })

    /**
    * Total number of pages
    */
    const totalPages = computed(() => Math.ceil(items.length / pageSize))

    /**
    * Ref of HTML element
    */
    const paginationWrapperRef = ref<HTMLElement | null>(null)

    /**
    * Handle infinite scroll (when active).
    * When user reach bottom of div, go to next page
    */
    const handleScroll = () => {
        if (!paginationWrapperRef.value || !infinite) {
        return
    }

        const bottomScroll =
        paginationWrapperRef.value.scrollTop +
        paginationWrapperRef.value.clientHeight
        const bottomReached =
        bottomScroll >= paginationWrapperRef.value.scrollHeight - 10 // tolerance

        if (bottomReached && currentPage.value < totalPages.value) {
        currentPage.value += 1
    }
    }

    /**
    * Infinite scroll needs to be added and removed to clean the resources
    */
    onMounted(() => {
        if (infinite) {
        paginationWrapperRef.value?.addEventListener('scroll', handleScroll)
    }
    })

    onUnmounted(() => {
        paginationWrapperRef.value?.removeEventListener('scroll', handleScroll)
    })
</script>

<template>
    <div id="paginationManager" ref="paginationWrapperRef">
        <slot :items="pageItems" :current-page :total-pages />
    </div>
</template>




function infiniteScroll(filterPagina = 1) {
return fetchModels({
    filterPkConsumer: getConsumer.value?.pk_consumer,
    filterPagina,
    filterStyleFilter:
        (Object.values(selectedFilter.value ?? {})[0] as string) ?? '',
    ...selectedFilter.value,
})
}


<PaginationManager
    class="infinite-scroll-wrapper"
  :items="productsList"
infinite
online
@update:scroll="infiniteScroll"
>
<template #default="{ items }">