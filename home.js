
var cursor = document.querySelector('.cursor');
var cursorScale = document.querySelectorAll('.cursor-scale');
var section1 = document.querySelector('.section1');
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var mouseX = windowWidth / 2;
var mouseY = windowHeight / 2;

gsap.set(cursor, {
  css: {
    left: mouseX,
    top: mouseY
  }
});

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});

window.addEventListener("mousemove", function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;


  if (!section1.contains(e.target)) {
    cursor.style.display = 'none';
  } else {
    cursor.style.display = 'block';
  }
});

cursorScale.forEach(link => {
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow');
    cursor.classList.remove('grow-small');
  });
  link.addEventListener('mousemove', (e) => {
    cursor.classList.add('grow');
    if (e.target.classList.contains('small')) {
      cursor.classList.remove('grow');
      cursor.classList.add('grow-small');
    }
  });
});

// Trigger the mousemove event after page load
window.addEventListener("load", function() {
  var event = new MouseEvent("mousemove", {
    clientX: windowWidth / 2,
    clientY: windowHeight / 2
  });
  window.dispatchEvent(event);
});

// Fade in elements

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}

function fadeSectionIn(section) {
  if (isInViewport(section)) {
    section.classList.add('fade-in');
  } else {
    section.classList.remove('fade-in');
  }
}

var section2 = document.querySelector('.section2');
var section3 = document.querySelector('.section3');
var section4 = document.querySelector('.section4');
var section5 = document.querySelector('.section5');

function handleScroll() {
  fadeSectionIn(section2);
  fadeSectionIn(section3);
  fadeSectionIn(section4);
  fadeSectionIn(section5);
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('DOMContentLoaded', handleScroll);

// footer fix
document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition + windowHeight >= documentHeight) {
    document.body.classList.add("show-footer");
  } else {
    document.body.classList.remove("show-footer");
  }
});

//scroll down animation in section 1
window.addEventListener('DOMContentLoaded', function() {
  var scrollAnimation = document.getElementById('scroll-down-animation');
  var scrollAnimationTwo = document.getElementsByClassName('box');
  scrollAnimation.style.opacity = '0';
  scrollAnimationTwo[0].style.opacity = '0';
});






// Javascript is used to set the clock to your computer time.

var currentSec = getSecondsToday();

var seconds = (currentSec / 60) % 1;
var minutes = (currentSec / 3600) % 1;
var hours = (currentSec / 43200) % 1;

setTime(60 * seconds, "second");
setTime(3600 * minutes, "minute");
setTime(43200 * hours, "hour");

function setTime(left, hand) {
  $(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
}

function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; 
  return Math.round(diff / 1000);
}