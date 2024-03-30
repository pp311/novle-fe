import ApiService from './api';
import { BookSortByOption } from './types/Book';
import type { Book, BookDetail } from './types/Book';

class BookApiService {
    public async getLatestBooks(): Promise<Book[]> {
        let sortBy = BookSortByOption[BookSortByOption.LatestUploaded]
        let pageNumber = 1
        let pageSize = 12
        let isDescending = false

        const data: PagingResponse<Book> = await ApiService.axiosCall<PagingResponse<Book>>(
            {
                method: 'GET',
                url: `/books?sortBy=${sortBy}&pageNumber=${pageNumber}&pageSize=${pageSize}&isDescending=${isDescending}`,
            });

        return data.items;
    }

    public async getBookById(id: number): Promise<BookDetail> {
        return await ApiService.axiosCall<BookDetail>(
            {
                method: 'GET',
                url: `/books/${id}`,
            });
    }
}

export default new BookApiService();

