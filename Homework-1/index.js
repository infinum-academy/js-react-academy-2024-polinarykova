function loadReviews() {
  if (!localStorage.getItem("reviews")) setReviews([]);

  const reviews = JSON.parse(localStorage.getItem("reviews"));

  calculateAverage(reviews ? reviews : []);

  const reviewsElem = document.getElementsByClassName("reviews")[0];

  reviewsElem.innerHTML = "";
  reviews.forEach((review, index) => {
    const description = document.createElement("p");
    description.innerText = review.description;

    const rating = Number(review.rating);
    const ratingStars = document.createElement("div");

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("i");
      star.classList.add("fas", "fa-star", "rating-star");
      i < rating ? (star.style.color = "yellow") : (star.style.color = "white");
      ratingStars.appendChild(star);
    }

    const removeButton = document.createElement("button");
    removeButton.id = "button";
    removeButton.onclick = () => removeReview(index);
    removeButton.innerText = "Remove";

    const reviewEl = document.createElement("div");
    reviewEl.classList = ["review"];

    reviewEl.appendChild(description);
    reviewEl.appendChild(ratingStars);
    reviewEl.appendChild(removeButton);

    reviewsElem.appendChild(reviewEl);
  });
}

function setReviews(reviews) {
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

function handleSubmit(event) {
  event.preventDefault();

  const description = document.getElementById("description").value;
  document.getElementById("description").value = "";

  const rating = document.getElementById("rating").value;
  document.getElementById("rating").value = 0;

  for (let i = 0; i < 5; i++)
    document.getElementsByClassName("star")[i].classList = "fas fa-star star";

  const newReview = { description: description, rating: rating };

  let reviews = localStorage.getItem("reviews")
    ? JSON.parse(localStorage.getItem("reviews"))
    : [];
  reviews.push(newReview);
  setReviews(reviews);

  loadReviews();
}

function removeReview(index) {
  const reviews = localStorage.getItem("reviews")
    ? JSON.parse(localStorage.getItem("reviews"))
    : [];
  reviews.splice(index, 1);

  setReviews(reviews);
  loadReviews();
}

function calculateAverage(reviews) {
  let sum = 0;
  reviews.forEach((review) => (sum += Number(review.rating)));
  document.getElementById("average").innerText =
    (reviews.length ? Number(sum / reviews.length).toFixed(2) : "0") + " / 5";
}

function handleStarClick(index) {
  const stars = document.getElementsByClassName("star");
  for (let i = 0; i < 5; i++) {
    if (i <= index) stars[i].classList = "fas fa-star star star-clicked";
    else stars[i].classList = "fas fa-star star";
  }
  document.getElementById("rating").value = index + 1;
}

function handleHover(index) {
  const stars = document.getElementsByClassName("star");
  for (let i = 0; i < 5; i++) {
    if (i <= index && !stars[i].classList.contains("star-clicked"))
      stars[i].classList = "fas fa-star star star-selected";
  }
}

function handleHoverLeave() {
  const stars = document.getElementsByClassName("star");
  for (let i = 0; i < 5; i++) {
    if (!stars[i].classList.contains("star-clicked"))
      stars[i].classList = "fas fa-star star";
  }
}
