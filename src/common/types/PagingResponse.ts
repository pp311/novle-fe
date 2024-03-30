interface PagingResponse<T> {
    items: T[];
    totalPages: number;
    totalCounts: number;
    pageNumber: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}
