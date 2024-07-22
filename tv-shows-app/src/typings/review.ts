export interface IReviewList {
  reviews: Array<IReview>;
}

export interface IReview {
  id: number;
  rating: number;
  comment: string;
  user: IUser;
}

export interface IUser {
  id: number;
  email: string;
  image_url: string;
}

export interface IReviewFormInputs {
  show_id: string;
  comment: string;
  rating: number;
}
