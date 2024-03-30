import { defineStore } from 'pinia'
import type { BookDetail } from '../common/types/Book'
import BookApiService from '../common/book.api'

export const useBookDetailStore = defineStore('book_detail', {
    state: () => ({ book: null as BookDetail | null }),
    getters: {},
    actions: {
        async getBookDetail(id: number) {
            this.book = await BookApiService.getBookById(id)
        }
    },
})
