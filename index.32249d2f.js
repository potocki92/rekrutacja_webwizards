!function(){let e=document.getElementById("menu-toggle"),t=document.getElementById("header"),n=document.querySelector(".nav"),l=document.querySelectorAll(".nav__link"),c=()=>{e.classList.toggle("active"),t.classList.toggle("show"),n.classList.toggle("show")};// Przycisk burgera do otwierania/ukrywania menu
// Nasłuchujemy zdarzenia kliknięcia na przycisku burgera
e.addEventListener("click",()=>{c()}),/* 
        1. Iterujemy przez wszystkie elementy nawigacyjne
        2. Nasłuchujemy zdarzenia kliknięcia na elementach nawigacyjnych
        3. Sprawdzamy szerokość okna przeglądarki
        4. Jeśli szerokość jest mniejsza lub równa 1040 pikseli, wywołujemy funkcję do przełączania widoczności menu
    */l.forEach(e=>{e.addEventListener("click",()=>{window.innerWidth<=1040&&c()})})}();//# sourceMappingURL=index.32249d2f.js.map

//# sourceMappingURL=index.32249d2f.js.map
