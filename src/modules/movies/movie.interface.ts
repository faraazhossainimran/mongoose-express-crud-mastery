
type TReview = {
    email: string;
    rating: number;
    comment: string;
  };
  
export type TMovie = {
    title: string;
    description: string;
    releaseDate: string; // ISO 8601 date string
    genre: string;
    isDeleted: boolean;
    viewCount: number;
    reviews: TReview[];
  };