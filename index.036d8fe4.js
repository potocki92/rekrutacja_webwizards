!function(){let e=document.querySelector(".modal__form");// Formularz
document.querySelector("#submitButton");// Przycisk do przesłania formularza
let t=document.querySelector("#errorMessage");// Element wyświetlający komunikat o błędzie
// Nasłuchujemy zdarzenia przesyłania formularza
e.addEventListener("submit",function(e){e.preventDefault();// Pobieramy wartości pól formularza
let l=document.querySelector("#name").value,u=document.querySelector("#surname").value,o=document.querySelector("#email").value,c=document.querySelector("#checkbox").checked;// Sprawdzamy, czy któreś z pól jest puste lub checkbox nie jest zaznaczony i w razie pustego pola wyświetlamy błąd
if(l&&u&&o&&c){t.style.visibility="hidden";// Kodujemy obiekt do formatu JSON z odpowiednim formatowaniem
let e=JSON.stringify({name:l,surname:u,email:o,accept:c},null,2);console.log(e);// Wyświetlamy zakodowane dane w konsoli
}else t.style.visibility="visible"})}();//# sourceMappingURL=index.036d8fe4.js.map

//# sourceMappingURL=index.036d8fe4.js.map
