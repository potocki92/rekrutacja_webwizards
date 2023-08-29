import images from "./images"
const wrapper = document.querySelector(".slider__slides")
let navlinks = document.getElementsByClassName("slider__navlink");

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
const markup = (e) => `
  <img class="slide" srcset="${e.image} 1x, ${e.retina}" alt=${e.alt}/>
`
const items = array.map((e, index) => markup(e, index)).join("")
wrapper.innerHTML += items

document.querySelectorAll(".slider__navlink").forEach(() => {

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide")

  slides.forEach(
    (slide, index) => {
      slide.style.left = `calc(${index * 100}% + ${index * 100}px)`
    }
  )

  const goPrev= () => {
    currentSlide--
    sliderImage()
  }

  const goNext = () => {
    currentSlide++
    sliderImage()
  }

  document.getElementById("nav-button--prev").addEventListener("click", () => {
    goPrev()
  })
  document.getElementById("nav-button--next").addEventListener("click", () => {
    goNext()
  })
  
  const sliderImage = () => {
    slides.forEach(
        (slide) => {
          slide.style.transform = `translateX(-${currentSlide * 100}%)`
        }
    )
  }
});
