/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

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
console.log(numeri_casuali)

// visualizzo i numeri nella pagina
const numberslistEL = document.getElementById("numbers-list");
let lista_numeri = "Numeri casuali: ";
for (let i = 0; i < numeri_casuali.length; i++) {
  lista_numeri += numeri_casuali[i];
  if (i < numeri_casuali.length - 1) {
    lista_numeri += ", ";
  }
}
numberslistEL.innerHTML = lista_numeri;
console.log(lista_numeri)

