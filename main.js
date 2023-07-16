const menuOpen = document.querySelector(".b-menu");
const navMenu = document.querySelector(".nav-links");

const menuClose = document.querySelector(".b-menu-ouvert");

const temoignageDroite = document.querySelector(".slide-right");
const temoignageGauche = document.querySelector(".slide-left");

const temoignagesSlide = document.querySelectorAll(".testimonials");

menuClose.style.display = "none";

menuOpen.addEventListener("click", function () {
  navMenu.classList.toggle("mobile-menu");
  menuClose.style.display = "block";
  menuOpen.style.display = "none";
});

menuClose.addEventListener("click", function () {
  navMenu.classList.toggle("mobile-menu");
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
});

const theParent = document.querySelector("#temoignages");

theParent.addEventListener("click", passNextTestimon, false);

function passNextTestimon(e) {
  if (e.target !== e.currentTarget) {
    var clickedItem = e.target.id;

    temoignagesSlide.forEach((testimonial) => {
      let containerDimensions = testimonial.getBoundingClientRect();
      let containerWidth = containerDimensions.width;
      if (
        clickedItem === "tem-btn-right" ||
        clickedItem === "tem-btn-right-imane"
      ) {
        testimonial.scrollLeft += containerWidth;
      } else if (
        clickedItem === "tem-btn-left" ||
        clickedItem === "tem-btn-left-imane" ||
        clickedItem === "tem-btn-left-alch"
      ) {
        testimonial.scrollLeft -= containerWidth;
      }
    });
  }
}

const slider = document.querySelector(".soutiens");
const sliderWidth = slider.offsetWidth;
const slideList = document.querySelector(".sponsors-list");
let count = 1;
const items = slideList.querySelectorAll("#sponsors-simplon").length;
const prev = document.querySelector(".v-l");
const next = document.querySelector(".v-r");

const pause = document.querySelector(".icon-stop");

window.addEventListener("resize", function () {
  sliderWidth = slider.offsetWidth;
});

function nextSlide() {
  if (count < items) {
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  } else if ((count = items)) {
    slideList.style.left = "0px";
    count = 1;
  }
}

function prevSlide() {
  if (count > 1) {
    count = count - 2;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  } else if ((count = 1)) {
    count = items - 1;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
}

next.addEventListener("click", function () {
  nextSlide();
});

prev.addEventListener("click", function () {
  prevSlide();
});

let intervalSponsors;

function displaySponsors() {
  if (!intervalSponsors) {
    intervalSponsors = setInterval(function () {
      nextSlide();
    }, 3000);
  }
}

displaySponsors();

pause.addEventListener("click", function () {
  clearInterval(intervalSponsors);
  if (intervalSponsors) {
    intervalSponsors = null;
  } else if (!intervalSponsors) {
    displaySponsors();
  }
});
