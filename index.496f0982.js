!function(){let e=document.getElementById("backdrop"),t=document.getElementById("header"),c=document.querySelector(".nav"),n=document.getElementById("menu-toggle"),d=document.getElementById("check"),s=document.getElementById("check__svg"),o=document.getElementById("contact"),l=document.getElementById("close");// Tło modalne
// Funkcja do przełączania widoczności modalu i ukrywania menu
function i(){e.classList.toggle("is-hidden"),n.classList.remove("active"),t.classList.remove("show"),c.classList.remove("show")}// Nasłuchujemy zdarzenia kliknięcia na przycisku otwierającym i zamykającym modal
o.addEventListener("click",i),l.addEventListener("click",i),// Nasłuchiwanie na zdarzenie naciśnięcia klawisza
document.addEventListener("keydown",t=>{("Escape"===t.key||"Esc"===t.key)&&(e.classList.contains("is-hidden")||i())}),// Nasłuchujemy zdarzenia kliknięcia na checkboxie i dodajemy/usuwamy klasę "check" dla SVG checkboxa
d.addEventListener("click",()=>{s.classList.toggle("check")})}();//# sourceMappingURL=index.496f0982.js.map

//# sourceMappingURL=index.496f0982.js.map
