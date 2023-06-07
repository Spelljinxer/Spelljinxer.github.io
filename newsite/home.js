// Function to generate random number within a range
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Create a specified number of stars with parallax effect
function createStars() {
  var starsContainer = document.getElementById("stars");

  for (var i = 0; i < 650; i++) {
    var star = document.createElement("div");
    star.className = "star";
    star.style.top = getRandomNumber(0, 100) + "%";
    star.style.left = getRandomNumber(0, 100) + "%";
    star.style.animationDelay = getRandomNumber(-10, 0) + "s"; // Adjusted the delay range to negative values
    star.style.animationDuration = getRandomNumber(5, 10) + "s";
    star.style.setProperty("--parallax-depth", getRandomNumber(1, 5));
    star.style.setProperty("--parallax-direction-x", getRandomNumber(-10, 10) + "px");
    star.style.setProperty("--parallax-direction-y", getRandomNumber(-10, 10) + "px");
    starsContainer.appendChild(star);
  }
}

createStars();