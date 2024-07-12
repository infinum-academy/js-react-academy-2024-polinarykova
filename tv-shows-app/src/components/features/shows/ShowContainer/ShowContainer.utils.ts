import { IReviewList } from "@/typings/review";

export function loadFromLocalStorage(id: string) {
  const reviewListLoaded = localStorage.getItem("reviews" + id);
  if (!reviewListLoaded) {
    return { reviews: [] };
  }
  return JSON.parse(reviewListLoaded);
}

export function saveToLocalStorage(reviewListToSave: IReviewList, id: string) {
  localStorage.setItem("reviews" + id, JSON.stringify(reviewListToSave));
}
