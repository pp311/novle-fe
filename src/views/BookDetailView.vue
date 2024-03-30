<template>
    <div class="max-w-[90%] md:max-w-[75%] lg:max-w-[70%] xl:max-w-[60%] mx-auto mt-6">
        <BookDetailHero />

        <div role="tablist"
            class="tabs tabs-lifted tabs-sm xs:tabs-md sm:tabs-lg mx-auto mt-8 justify-center items-end">
            <a v-for="tab in tabContent.length" role="tab" :class="tabNumber === tab - 1 ? 'tab-active' : ''" :key="tab"
                @click="tabNumber = tab - 1" class="tab [--tab-border-color:oklch(var(--p))] border-primary">{{
                tabContent[tab - 1] }}</a>
        </div>

        <div class="rounded-box p-6 border-primary border mt-[-1px]">
            <BookDescription :description="book?.description" />
        </div>
    </div>
</template>

<script setup lang="ts">
import BookDetailHero from '../components/BookDetail/BookDetailHero.vue'
import BookDescription from '../components/BookDetail/BookDescription.vue'
import { ref } from 'vue'
import { useBookDetailStore } from '../stores/book_detail.ts'
import { storeToRefs } from 'pinia'

const store = useBookDetailStore()

const { book } = storeToRefs(store)

const tabNumber = ref(0)
const tabContent = [
    'Giới thiệu',
    'DS Chương',
    'Bình luận',
    'Đánh giá',
]

</script>
