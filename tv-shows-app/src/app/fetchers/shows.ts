import { IShow, IShowList } from "@/typings/show";
import { fetcher } from "./fetcher";

export function getShows() {
  return fetcher<IShowList>("/api/shows");
}

export function getTopRatedShows() {
  return fetcher<IShowList>("/api/shows/top-rated");
}

export function getShow(id: string) {
  return fetcher<IShow>(`/api/shows/${id}`);
}
