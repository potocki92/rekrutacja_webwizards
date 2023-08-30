(() => {
  const check = document.getElementById("check");
  const checkSvg = document.getElementById("check__svg");
  // open the mobile menu
  const openButton = document.getElementById("contact");

  const closeButton = document.getElementById("close");
  // to add / remove class 'is-hidden'
  const mobileMenu = document.querySelector(".modal");

  // click and open mobile menu
  openButton.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);

  // function to add 'is-hidden' class to mobile
  function toggleModal() {
    mobileMenu.classList.toggle("is-hidden");
  }

  check.addEventListener("click", () => {
    checkSvg.classList.toggle("check");
  });
})();
