export interface IReviewList {
  reviews: Array<IReview>;
}

export interface IReview {
  email: string;
  avatar_url: string;
  rating: number;
  comment: string;
}
