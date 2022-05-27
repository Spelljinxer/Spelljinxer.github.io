
const faders = document.querySelectorAll(".fade-in");


const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) 
{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
        
    })
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})
//---------------------------------------------------------------------------------

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 300;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);