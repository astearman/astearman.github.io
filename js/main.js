
/* Animate the hamburger menu from 3 lines to an X */
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuOpen = true;
    menuBtn.classList.add('open');
  } else {
    menuOpen = false;
    menuBtn.classList.remove('open');
  }
});


/* Dim screen when hamburger menu is open */
let toggleDimStatus = false;
let toggleDim = function() {
  let getDimScreen = document.querySelector("#dimmer");

  if (toggleDimStatus === false) {
    getDimScreen.style.background = "#000";
    getDimScreen.style.opacity = "0.3";
    getDimScreen.style.position = "fixed";
    getDimScreen.style.width = "100%";
    getDimScreen.style.height = "100%";
    getDimScreen.style.zIndex = "999";

    toggleDimStatus = true;
  } 
  
  else if (toggleDimStatus === true) {
    getDimScreen.style.position = "initial";

    toggleDimStatus = false;
  }   
}


/* Hamburger Menu Open/Close */
let toggleNavStatus = false;
let toggleNav = function() {
  let getSidebar = document.querySelector(".nav-sidebar");

  if (toggleNavStatus === false) {
    getSidebar.style.visibility = "visible";
    getSidebar.style.width = "275px";
  
    toggleNavStatus = true;
  } 
  
  else if (toggleNavStatus === true) {
    getSidebar.style.visibility ="hidden";
    getSidebar.style.width ="0px";
  
    toggleNavStatus = false;
  }   
}


/* Image Carousel */
const slides = document.querySelectorAll('.banner-slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const nextSlide = () => {

  const current = document.querySelector('.current');
  // Remove Current Class
  current.classList.remove('current');
  // Check for next slide
  if(current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  // Get Current Class
  const current = document.querySelector('.current');
  // Remove Current Class
  current.classList.remove('current');
  // Check for prev slide
  if(current.previousElementSibling && current.previousElementSibling.classList.contains("banner-slide") ) {
    current.previousElementSibling.classList.add("current");
  } else {
  slides[slides.length - 1].classList.add("current");
}
  setTimeout(() => current.classList.remove('current'));
};

// Next and Previous Button Events
next.addEventListener('click', x => {
  nextSlide();
});

prev.addEventListener('click', x => {
  prevSlide();
});


// Price Popup 
var pricePopup = document.getElementById("myPopup");
var priceBtn = document.getElementById("pricing-button");
var priceSpan = document.getElementsByClassName("close")[0];

priceBtn.onclick = function() {
  pricePopup.style.display = "block";
}

priceSpan.onclick = function() {
  pricePopup.style.display = "none";
}


// Price Calculator
const sum = document.getElementById('add');
sum.onclick = calculatePrice;

function calculatePrice() {
    
  let options = document.getElementsByClassName('price');
  let optionsLength = options.length,
  total = 0;
  for (var i = 0; i < optionsLength; ++i) {
    total += parseInt(options[i].value * 1);
      }
  document.getElementById('totalPrice').value = `$${total.toLocaleString()}`;
}


// About Popup 
var aboutPopup = document.getElementById("myPopup2");
var aboutBtn = document.getElementById("about-button");
var aboutSpan = document.getElementsByClassName("close2")[0];

aboutBtn.onclick = function() {
  aboutPopup.style.display = "block";
}

aboutSpan.onclick = function() {
  aboutPopup.style.display = "none";
}


// Adjective Array
const array = [
  "Dynamic", 
  "Stategic", 
  "Resilient", 
  "Influential", 
  "Progressive", 
  "Flexible", 
  "Innovative", 
  "Determined", 
  "Nimble", 
  "Trusting", 
  "Focused", 
  "Stellar"
]

let list = document.getElementById('adjectives');
const last = array.pop();

array.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<li>${item}</li>`;
  list.append(listItem);
});

document.getElementById('last').innerHTML = 'But most importantly, we are ' + '<i>' + last + '</i>' + '&nbsp;' + '&nbsp;' + 'to work for!';

