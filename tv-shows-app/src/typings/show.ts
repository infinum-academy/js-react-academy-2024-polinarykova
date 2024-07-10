export interface IShow {
  id: number;
  title: string;
  description: string;
  averageRating?: number;
  imageUrl?: string;
}

export interface IShowList {
  shows: Array<IShow>;
}
