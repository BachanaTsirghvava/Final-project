const navBurger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const nav = document.querySelector(".nav");
const searchForm = document.querySelector(".search-form");
const container = document.querySelector(".container");
const productBurger = document.querySelector(".product-burger");
const productLinks = document.querySelector(".product-ul");

function navActiveToggler() {
    navLinks.classList.toggle("nav-links__active");
    navBurger.classList.toggle("nav-burger__active");
    nav.classList.toggle("nav__active");
    searchForm.classList.toggle("search-form__active");
    container.classList.toggle("active-container");
}


navBurger.addEventListener("click", navActiveToggler);

/*
function productActiveToggler() {
    productBurger.classList.toggle("product-burger__active");
    productLinks.classList.toggle("produc-ul__active");
}

productBurger.addEventListener("click", productActiveToggler); */

const navIndicator = document.getElementById("nav-indicator"); 
const scrollTopButton = document.getElementById("scroll-top");

//function which handles nav indicator size
 function navIndicatorHandler(){
    let winScroll = document.documentElement.scrollTop;
    let height = 
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;

    let scrolled = Math.floor((winScroll / height) * 100);

    console.log(scrolled);

    navIndicator.style.width = scrolled + "%";
} 

//events
window.addEventListener("scroll", navIndicatorHandler);


//function which handles scroll top 
function scrollTopCheck(scroll) {
    if (scroll > 500) {
        scrollTopButton.classList.add("scroll-top__active");
    } else {
        scrollTopButton.classList.remove("scroll-top__active");
    }
}

scrollTopButton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});

//event
window.addEventListener("scroll", function() {
    const scroll_top = document.documentElement.scrollTop;

    scrollTopCheck(scroll_top);
});

//modal 
const modal = document.querySelector('.modal-wrapper')
const closeBtn = document.querySelector('.modal-close')
const openBtn = document.querySelector('.modal-open')



openBtn.addEventListener('click', () => {
    triggerModal(modal)
})
closeBtn.addEventListener('click', () => {
    triggerModal(modal)
})


window.addEventListener('click', (e) => {
    if(e.target == document.querySelector('.modal-wrapper')) {
        triggerModal(modal)
    }
})


function triggerModal (modal) {
    modal.classList.toggle('active')
}

// carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}