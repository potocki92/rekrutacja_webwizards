!function(){let e=document.getElementById("backdrop"),t=document.getElementById("header"),c=document.querySelector(".nav"),n=document.getElementById("menu-toggle"),s=document.getElementById("check"),d=document.getElementById("check__svg"),o=document.getElementById("contact"),i=document.getElementById("close"),l=document.querySelector("#errorMessage");// Tło modalne
// Funkcja do przełączania widoczności modalu i ukrywania menu
function m(){e.classList.toggle("is-hidden"),n.classList.remove("active"),t.classList.remove("show"),c.classList.remove("show"),l.style.visibility="hidden"}// Nasłuchujemy zdarzenia kliknięcia na przycisku otwierającym i zamykającym modal
o.addEventListener("click",m),i.addEventListener("click",m),// Nasłuchiwanie na zdarzenie naciśnięcia klawisza
document.addEventListener("keydown",t=>{("Escape"===t.key||"Esc"===t.key)&&(e.classList.contains("is-hidden")||m())}),// Nasłuchujemy zdarzenia kliknięcia na checkboxie i dodajemy/usuwamy klasę "check" dla SVG checkboxa
s.addEventListener("click",()=>{d.classList.toggle("check")})}();//# sourceMappingURL=index.9fbfe0d4.js.map

//# sourceMappingURL=index.9fbfe0d4.js.map
