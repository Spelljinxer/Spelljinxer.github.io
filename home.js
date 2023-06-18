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
  link.addEventListener('mousemove', () => {
    cursor.classList.add('grow');
    if (link.classList.contains('small')) {
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
