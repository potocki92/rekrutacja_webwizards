import images from "./images"
const wrapper = document.querySelector(".slider__slides")
let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;

const array = [
  {
    "alt": "House",
    "image": images.image,
    "retina": images.image_retina
  },
  {
    "alt": "Car",
    "image": images.image2,
    "retina": images.image2_retina
  },
  {
    "alt": "Shoes",
    "image": images.image3,
    "retina": images.image3_retina
  },
  {
    "alt": "Trees",
    "image": images.image4,
    "retina": images.image4_retina
  }
]
const markup = (e, index) => `
  <div class="slider__slide ${index === 0 ? "active" : ""}">
    <img srcset="${e.image} 1x, ${e.retina}" alt=${e.alt}/>
  </div>
`
const items = array.map((e, index) => markup(e, index)).join("")
wrapper.innerHTML = items

document.getElementById("nav-button--next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

document.getElementById("nav-button--prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("active");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("active");

  currentSlide = moveTo;
}

document.querySelectorAll(".slider__navlink").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
});
