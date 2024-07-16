const apiUrl = " https://tv-shows.infinum.academy";
export const swrKeys = {
  register: `${apiUrl}/users`,
  sign_in: `${apiUrl}/users/sign_in`,
  user: `${apiUrl}/users/me`,
  shows: `${apiUrl}/shows`,
  top_rated: `${apiUrl}/shows/top_rated`,
  add_review: `${apiUrl}/reviews`,
  load_reviews: (id: string) => `${apiUrl}/shows/${id}/reviews`,
  delete_review: `${apiUrl}/reviews/`,
};
