const e=document.querySelector(".modal__form");// Formularz
document.querySelector("#submitButton");// Przycisk do przesłania formularza
const t=document.querySelector("#errorMessage");// Element wyświetlający komunikat o błędzie
// Nasłuchujemy zdarzenia przesyłania formularza
e.addEventListener("submit",function(e){e.preventDefault();// Pobieramy wartości pól formularza
let l=document.querySelector("#name").value,o=document.querySelector("#surname").value,u=document.querySelector("#email").value,c=document.querySelector("#checkbox").checked;// Sprawdzamy, czy któreś z pól jest puste lub checkbox nie jest zaznaczony i w razie pustego pola wyświetlamy błąd
if(l&&o&&u&&c){t.style.visibility="hidden";// Kodujemy obiekt do formatu JSON z odpowiednim formatowaniem
let e=JSON.stringify({name:l,surname:o,email:u,accept:c},null,2);console.log(e);// Wyświetlamy zakodowane dane w konsoli
}else t.style.visibility="visible"});//# sourceMappingURL=index.57543bfb.js.map

//# sourceMappingURL=index.57543bfb.js.map
