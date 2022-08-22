let rateValue = 0;
let activeRate = false;
function ratingFunction() {
  rateValue = document.activeElement.value;
  document.getElementById("rate").innerHTML = rateValue;
  activeRate = true;
}

function displayThanks() {
  if (activeRate === false) {
    alert("Please, rate us from 1 to 5!");
  } else {
    document.getElementById("thanks-card").classList.toggle("hidden");
    document.getElementById("rating-main").classList.toggle("hidden");
  }
}
