var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    section1 = document.querySelector('.section1'),
    windowWidth = window.innerWidth,
    windowHeight = window.innerHeight,
    mouseX = windowWidth / 2,
    mouseY = windowHeight / 2;

gsap.set(cursor, {
    css: {
        left: mouseX,
        top: mouseY
    }
});

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
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