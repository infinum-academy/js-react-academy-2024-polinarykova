const reviews = [];

function loadReviews() {
  document.getElementsByClassName("reviews")[0].innerHTML = "";
  for (review of reviews) {
    const description = document.createElement("p");
    description.innerText = review.description;

    const rating = document.createElement("p");
    rating.innerText = review.rating + "/5";

    const reviewEl = document.createElement("div");
    reviewEl.classList = ["review"];
    reviewEl.appendChild(description);
    reviewEl.appendChild(rating);

    document.getElementsByClassName("reviews")[0].appendChild(reviewEl);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const description = document.getElementById("description").value;
  document.getElementById("description").value = "";
  const rating = document.getElementById("rating").value;
  document.getElementById("rating").value = "";
  const newReview = { description: description, rating: rating };
  reviews.push(newReview);
  loadReviews();
}
