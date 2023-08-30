(function () {
    const burger = document.getElementById("menu-toggle"); // Przycisk burgera do otwierania/ukrywania menu
    const header = document.getElementById("header"); // Nagłówek strony
    const nav = document.querySelector(".nav"); // Kontener nawigacji
    const links = document.querySelectorAll(".nav__link"); // Lista wszystkich elementów nawigacyjnych
 
    // Funkcja do przełączania widoczności menu (otwieranie/ukrywanie)
    const toggle = () => {
        burger.classList.toggle("active");
        header.classList.toggle("show");
        nav.classList.toggle("show");
    }

    // Nasłuchujemy zdarzenia kliknięcia na przycisku burgera
    burger.addEventListener("click", () => {
        toggle()
    })

    /* 
        1. Iterujemy przez wszystkie elementy nawigacyjne
        2. Nasłuchujemy zdarzenia kliknięcia na elementach nawigacyjnych
        3. Sprawdzamy szerokość okna przeglądarki
        4. Jeśli szerokość jest mniejsza lub równa 1040 pikseli, wywołujemy funkcję do przełączania widoczności menu
    */
    links.forEach((link) => {
        link.addEventListener("click", ()=> {
            if(window. innerWidth <= 1040) {
                toggle()
            }
        })
    })
})()