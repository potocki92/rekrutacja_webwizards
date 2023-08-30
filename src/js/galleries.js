import _throttle from 'lodash/throttle';
import images from "./images";

// Tworzenie danych dla slajdów
const array = [
  {
    alt: "House",
    image: images.image,
    retina: images.image_retina,
  },
  {
    alt: "Car",
    image: images.image2,
    retina: images.image2_retina,
  },
  {
    alt: "Shoes",
    image: images.image3,
    retina: images.image3_retina,
  },
  {
    alt: "Trees",
    image: images.image4,
    retina: images.image4_retina,
  },
];
// Wybór kontenera slajdów i funkcja generująca kod dla pojedynczego slajdu
const wrapper = document.querySelector(".galleries__slides");
const markup = (e) => `
  <img class="slide" loading="lazy" srcset="${e.image} 1x, ${e.retina} 2x" alt="${e.alt}"/>
`;

// Wstawienie wygenerowanych slajdów do kontenera
array.forEach((item) => {
  wrapper.innerHTML += markup(item);
});

// Pobranie wszystkich slajdów oraz nawigacji i przypisanie ich do zmiennej
const slides = document.querySelectorAll(".slide");
const navlinks = document.querySelectorAll(".galleries__navlink");

// Pobranie przycisków nawigacyjnych
const prevButton = document.getElementById("nav-button--prev");
const nextButton = document.getElementById("nav-button--next");

// Inicjalizacja bieżącego slajdu
let currentSlide = 0;

// Ustawienie początkowej pozycji slajdów
slides.forEach((slide, index) => {
  slide.style.left = `calc(${index * 100}% + ${index * 100}px)`;
  if (index !== currentSlide) {
    slide.style.opacity = 0.2; // Ustawienie opacity dla pierwszego slajdu
  }
});

// Funkcja aktualizująca położenie slajdów
const sliderImage = () => {
  slides.forEach((slide, index) => {
    index === currentSlide ? slide.style.opacity = 1 : slide.style.opacity = 0.2; // Ustawiamy opacity dla slajdu
    
    slide.style.transform = `translateX(calc(-${currentSlide * 100}% - ${
      currentSlide * 100
    }px))`;
    });
};

// Funkcja przesuwająca na wybrany slajd
const goSlide = (slideIndex) => {
  currentSlide = slideIndex;
  sliderImage();

  currentSlide <= 0
    ? prevButton.classList.remove("active")
    : prevButton.classList.add("active");

  currentSlide === slides.length - 1
    ? nextButton.classList.remove("active")
    : nextButton.classList.add("active");
};

// Nasłuchiwacz na przycisk poprzedniego slajdu
prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    goSlide(currentSlide - 1);
    activeCircle(currentSlide);
  }
});

// Nasłuchiwacz na przycisk następnego slajdu
nextButton.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    goSlide(currentSlide + 1);
    activeCircle(currentSlide);
  }
});

// Funkcja aktywująca odpowiednią nawigację
const activeCircle = (slide) => {
  navlinks.forEach((link, index) => {
    index === slide
      ? link.classList.add("active")
      : link.classList.remove("active");
  });
};

// Nasłuchiwacze na nawigację za pomocą kropek
navlinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    currentSlide = index;
    goSlide(currentSlide);
    activeCircle(index);
  });
});

// Dodajemy zmienną do przechowywania pozycji dotknięcia
let touchStartX = 0;
let touchEndX = 0;

wrapper.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

wrapper.addEventListener("touchmove", (event) => {
  touchEndX = event.touches[0].clientX;
});

wrapper.addEventListener("touchend", () => {
  const touchDistance = touchEndX - touchStartX;
  const threshold = 50; // Minimalny dystans przesunięcia, aby uznać za przewinięcie

  if (touchDistance > threshold) {
    // Przesunięcie w prawo - idź do poprzedniego slajdu
    if (currentSlide > 0) {
      goSlide(currentSlide - 1);
      activeCircle(currentSlide);
    }
  } else if (touchDistance < -threshold) {
    // Przesunięcie w lewo - idź do następnego slajdu
    if (currentSlide < slides.length - 1) {
      goSlide(currentSlide + 1);
      activeCircle(currentSlide);
    }
  }
});