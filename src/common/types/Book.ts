export declare interface Book {
    id: number;
    title: string;
    description: string;
    coverUrl: string;
    authorId: number;
    authorName: string;
    genres: string[];
    status: BookStatus;
    createdOn: Date;
    updatedOn: Date;
}

export declare interface BookDetail extends Book {
    viewCount: number;
    ratingScore: number;
    ratingCount: number;
    archivedCount: number;
    chapterCount: number;
}

export enum BookStatus {
    OnGoing = 1,
    Completed = 2,
    Paused = 3,
    Abandoned = 4,
    Draft = 5,
}

export enum BookSortByOption {
    Id,
    Title,
    LatestUploaded,
    LatestUpdated,
    ViewCount,
    RatingScore,
    RatingCount,
    ArchivedCount,
}

