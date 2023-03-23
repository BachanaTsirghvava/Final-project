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