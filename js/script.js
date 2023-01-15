const nav = document.querySelector('.header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
    element.addEventListener('click', () => {
        nav.classList.toggle('show');
    })
}

const links = document.querySelectorAll('nav ul li a');

for(const link of links){
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    })
}

const header = document.querySelector('.header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    767: {
        slidesPerView: 4,
        setWrapperSize: true,
    }
  }
});

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
})

scrollReveal.reveal(
  `#home h1, #home p, #home a,
   #game h1, #game .swiper-wrapper,
    #history h1, #history p, #history img,
    #comments .wrapper_comments,
    footer h1, footer p, footer img`,
  {
    interval: 100,
  }
);