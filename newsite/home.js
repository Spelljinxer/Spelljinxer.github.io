// Function to generate random number within a range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Create a specified number of stars with parallax effect
  function createStars() {
    var stars = document.getElementById("stars");

    for (var i = 0; i < 500; i++) {
      var star = document.createElement("div");
      star.className = "star";
      star.style.top = getRandomNumber(0, 100) + "%";
      star.style.left = getRandomNumber(0, 100) + "%";
      star.style.animationDelay = getRandomNumber(0, 10) + "s";
      star.style.animationDuration = getRandomNumber(5, 10) + "s";
      star.style.setProperty('--parallax-depth', getRandomNumber(1, 5));
      stars.appendChild(star);
    }
  }

  createStars();

  // Randomly move stars within the container
  var stars = document.getElementsByClassName("star");
  for (var i = 0; i < stars.length; i++) {
    var star = stars[i];
    star.style.animationDelay = getRandomNumber(0, 10) + "s";
    star.style.animationDuration = getRandomNumber(5, 10) + "s";
    star.style.setProperty('--parallax-direction', getRandomNumber(-4, 4) + 'px');
  }