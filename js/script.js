/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

alert("Hai 30 secondi di tempo per memorizzare 5 numeri");

// creo un'array per memorizzare i numeri casuali
const numeri_casuali = [];

// definisco i valori minimi e massimi per i numeri casuali
const num_elementi = 5;
const min = 1;
const max = 50;

// genero 5 numeri casuali da inserire nell'array
for (let i = 0; i < num_elementi; i++) {
  const numero_casuale = Math.floor(Math.random() * (max - min + 1)) + min;
  numeri_casuali.push(numero_casuale);
}
console.log(numeri_casuali);

// visualizzo i numeri nella pagina
const numberslistEL = document.getElementById("numbers-list");
let lista_numeri = "Numeri casuali: ";
const countdown_ms = 31000;
setTimeout(() => {
  for (let i = 0; i < numeri_casuali.length; i++) {
    setTimeout(function () {
      lista_numeri += numeri_casuali[i];
      if (i < numeri_casuali.length - 1) {
        lista_numeri += ", ";
      }
      numberslistEL.innerHTML = lista_numeri;
    }, i * 1000);
  }
}, 1000);

// creo un timing per far comparire e scomparire i numeri casuali
const answersFormEL = document.getElementById("answers-form");

setTimeout(nascondi_numeri, countdown_ms);
function nascondi_numeri() {
  numberslistEL.classList.add("d-none");
  answersFormEL.classList.remove("d-none");
}

// creo un countdown di 30 secondi
let display = document.getElementById("countdown");
function countdown(duration, display) {
  let timer = duration;
  let interval = setInterval(function () {
    display.textContent = timer;
    if (--timer < 0) {
      clearInterval(interval);
      console.log("Tempo scaduto!");
      display.textContent = "Inserisci i 5 numeri!";
    }
  }, 1000);
}
let duration = 30;
countdown(duration, display);

// mi preparo a leggere i dati dal form
const inputGroupEl = document.getElementById("input-group");
const inputsEl = inputGroupEl.querySelectorAll("input");
const answerFormEl = document.getElementById("answers-form");
const messageEl = document.getElementById("message");
const tastoResetEl = document.querySelector(".tasto_reset");

answerFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  //* creo una variabile per il punteggio dell'utente
  let punteggio_utente = 0;
  //* creo un array vuoto per i numeri dell'utente
  const numeri_utente = [];

  //* creo un ciclo for per pushare i numeri dentro l'array
  for (let i = 0; i < inputsEl.length; i++) {
    numeri_utente.push(Number(inputsEl[i].value));
  }

  //* creo un ciclo for per verificare quanti numeri dell'array sono presenti nei numeri casuali
  for (let i = 0; i < numeri_casuali.length; i++) {
    if (numeri_utente.includes(numeri_casuali[i])) {
      punteggio_utente++;
    }
  }
  // calcolo il punteggio dell'utente
  if (punteggio_utente > 0) {
    console.log("Hai memorizzato " + punteggio_utente + " numeri!");
    messageEl.innerText = "Hai memorizzato " + punteggio_utente + " numeri!";
  } else {
    messageEl.innerText = "Hai sbagliato tutti i numeri!";
  }
});

// tasto reset
tastoResetEl.addEventListener("click", () => location.reload());
