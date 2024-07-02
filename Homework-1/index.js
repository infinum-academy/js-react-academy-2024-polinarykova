function loadReviews() {
  if (!localStorage.getItem("reviews")) localStorage.setItem("reviews", []);
  const reviews = JSON.parse(localStorage.getItem("reviews"));
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

  let reviews = localStorage.getItem("reviews")
    ? JSON.parse(localStorage.getItem("reviews"))
    : [];
  reviews.push(newReview);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  loadReviews();
}
