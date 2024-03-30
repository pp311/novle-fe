<template>
    <div className="mt-6 lg:mt-8 xl:mt-10 2xl:mt-12">
        <SectionTitle :title="props.title" />
        <div class="mt-2 grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 gap-6">
            <BookCoverListItem v-for="book in books" :key="book.id" v-bind="book" />
        </div>
    </div>

</template>

<script setup lang="ts">
import SectionTitle from './SectionTitle.vue'
import BookCoverListItem from './BookCoverListItem.vue'
import BookApiService from '../../common/book.api.ts'
import { defineProps, watchEffect, ref } from 'vue'

const props = defineProps<{
    title: String
}>()

const books = ref<Book[]>([])
const isLoading = ref(false)

watchEffect(async () => {
    isLoading.value = true
    books.value = await BookApiService.getLatestBooks()
    console.log(books.value)
    isLoading.value = false
})

</script>
