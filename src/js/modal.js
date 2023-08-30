const backdrop = document.getElementById("backdrop"); // Tło modalne
const header = document.getElementById("header"); // Nagłówek strony
const nav = document.querySelector(".nav"); // Kontener nawigacji
const burger = document.getElementById("menu-toggle"); // Przycisk burgera
const check = document.getElementById("check"); // Checkbox
const checkSvg = document.getElementById("check__svg"); // SVG checkboxa
const openButton = document.getElementById("contact"); // Przycisk otwierający modal
const closeButton = document.getElementById("close"); // Przycisk zamykający modal

 // Nasłuchujemy zdarzenia kliknięcia na przycisku otwierającym i zamykającym modal
 openButton.addEventListener("click", toggleModal);
 closeButton.addEventListener("click", toggleModal);

  // Nasłuchiwanie na zdarzenie naciśnięcia klawisza
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.key === "Esc") {
      closeIfOpen();
    }
  });
  
 // Funkcja do przełączania widoczności modalu i ukrywania menu
 function toggleModal() {
   backdrop.classList.toggle("is-hidden"); 
   burger.classList.remove("active"); 
   header.classList.remove("show"); 
   nav.classList.remove("show"); 
 }

 // Funkcja do zamknięcia modalu tylko wtedy, gdy jest otwarty
 function closeIfOpen() {
  if (!backdrop.classList.contains("is-hidden")) {
    toggleModal();
  }
}

 // Nasłuchujemy zdarzenia kliknięcia na checkboxie i dodajemy/usuwamy klasę "check" dla SVG checkboxa
 check.addEventListener("click", () => {
   checkSvg.classList.toggle("check");
 });