const form = document.querySelector('.modal__form'); // Formularz
const submitButton = document.querySelector('#submitButton'); // Przycisk do przesłania formularza
const errorMessage = document.querySelector('#errorMessage'); // Element wyświetlający komunikat o błędzie

// Nasłuchujemy zdarzenia przesyłania formularza
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Pobieramy wartości pól formularza
  const name = document.querySelector('#name').value;
  const surname = document.querySelector('#surname').value;
  const email = document.querySelector('#email').value;
  const checkbox = document.querySelector('#checkbox').checked;

  // Sprawdzamy, czy któreś z pól jest puste lub checkbox nie jest zaznaczony i w razie pustego pola wyświetlamy błąd
  if (!name || !surname || !email || !checkbox) {
    errorMessage.style.visibility = 'visible';
  } else {
    errorMessage.style.visibility = 'hidden';
    // Tworzymy obiekt zawierający dane formularza
    const formData = {
      name: name,
      surname: surname,
      email: email,
      accept: checkbox
    };
    // Kodujemy obiekt do formatu JSON z odpowiednim formatowaniem
    const encodedFormData = JSON.stringify(formData, null, 2);
    console.log(encodedFormData); // Wyświetlamy zakodowane dane w konsoli
  }
});
