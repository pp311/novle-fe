<template>
    <div class="hero bg-base-300 rounded-xl xs:justify-start">
        <!-- Skeleton -->
        <div v-if="isLoading" class="hero-content w-full xs:flex-row flex-col flex xs:items-start items-center">
            <div class="skeleton h-64 w-48 bg-base-200"></div>
            <div class="flex flex-col gap-4 w-52">
                <div class="skeleton h-8 w-full bg-base-200"></div>
                <div class="skeleton h-8 w-28 bg-base-200"></div>
                <div class="skeleton h-8 w-full bg-base-200"></div>
                <div class="skeleton h-8 w-full bg-base-200"></div>
            </div>
        </div>
        <!-- Content -->
        <div v-else class="hero-content flex-col items-stretch xs:flex-row overflow-hidden w-full">
            <div
                class='overflow-hidden rounded-xl basis-[30%] md:basis-[35%] lg:basis-[40%] xl:basis-[45%] xs:self-start'>
                <img :src="book.coverUrl"
                    class="w-full h-full sm:w-[400px] object-contain shadow-2xl hover:scale-110 transition-all duration-300" />
            </div>
            <div class="flex flex-col justify-between basis-[70%]">
                <!-- Title -->
                <h2 class="text-2xl md:text-4xl font-bold line-clamp-2 ">{{ book.title }}</h2>

                <!-- Author -->
                <span class="mt-3"><a href="#" class="line-clamp-1 hover:text-primary text-lg md:text-xl inline">{{
            book.authorName
        }}</a></span>
                <div class="flex flex-wrap max-h-[64px] md:max-h-[84px] overflow-hidden">
                    <div class="badge badge-outline badge-lg badge-error mr-2 mt-2 md:mr-4 md:mt-4 cursor-pointer">
                        {{ status }}
                    </div>
                    <div v-for="genre in book.genres"
                        class="badge badge-outline badge-lg badge-success mr-2 mt-2 md:mr-4 md:mt-4 cursor-pointer">
                        {{ genre }}
                    </div>
                </div>
                <div class="flex justify-evenly mt-2 md:mt-4 xl:mt-8">
                    <div class='space-x-1 flex flex-col items-center'>
                        <span class="font-bold">{{ book.chapterCount || 0 }}</span><span>Chương</span>
                    </div>
                    <div class='space-x-1 flex flex-col items-center'>
                        <span class="font-bold">{{ book.viewCount || 0 }}</span><span>Lượt đọc</span>
                    </div>
                    <div class='space-x-1 flex flex-col items-center'>
                        <span class="font-bold">{{ book.archivedCount || 0 }}</span><span>Lượt lưu trữ</span>
                    </div>
                </div>
                <div class="flex items-center space-x-2 mt-3 mb-2 md:mt-5 lg:mt-8">
                    <div class="rating rating-sm lg:rating-md rating-half items-center flex-wrap">
                        <input type="radio" name="rating-1" disabled class="rating-hidden" />
                        <input v-for="i in 10" type="radio" name="rating-1" disabled
                            :checked="Math.round(book.ratingScore * 2) / 2 === i / 2"
                            :class="i % 2 === 1 ? 'mask-half-1' : 'mask-half-2'"
                            class="bg-orange-500 mask mask-star-2" />
                        <span class="ml-2">{{ book.ratingScore || 0 }}/5 ({{ book.ratingCount || 0 }} lượt đánh
                            giá)</span>
                    </div>
                </div>
                <div class='mt-2 sm:grid grid-cols-2 space-x-4 hidden sm:mt-auto mr-4'>
                    <button class="btn btn-active btn-primary w-full">Đọc truyện</button>
                    <button class="btn btn-active btn-secondary w-full">Theo dõi</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Skeleton -->
    <div v-if="isLoading" class="grid grid-cols-2 w-full space-x-4 mt-4 sm:hidden">
        <div class="skeleton h-12 bg-base-200"></div>
        <div class="skeleton h-12 bg-base-200"></div>
    </div>
    <div v-else class="grid grid-cols-2 w-full space-x-4 mt-4 sm:hidden">
        <button class="btn btn-active btn-primary">Đọc truyện</button>
        <button class="btn btn-active btn-secondary">Theo dõi</button>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watchEffect, ref, computed } from 'vue'
import BookApiService from '../../common/book.api.ts'
import type { Book } from '../../common/types/Book'
import { BookStatus } from '../../common/types/Book'
import { useBookDetailStore } from '../../stores/book_detail.ts'
import { storeToRefs } from 'pinia'

const route = useRoute()

const store = useBookDetailStore()

const { book } = storeToRefs(store)
const isLoading = ref(true)

const status = computed(() => {
    switch (book?.value?.status) {
        case BookStatus.OnGoing:
            return 'Đang ra'
        case BookStatus.Completed:
            return 'Hoàn thành'
        case BookStatus.Paused:
            return 'Tạm dừng'
        case BookStatus.Abandoned:
            return 'Dừng'
        case BookStatus.Draft:
            return 'Nháp'
        default:
            return 'Chưa xác định'
    }
})

watchEffect(async () => {
    isLoading.value = true
    await store.getBookDetail(route.params.id)
    isLoading.value = false
})

</script>
