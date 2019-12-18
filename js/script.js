// Calcolo prezzo del treno:
// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.

// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.

// Controllo
// alert('ciao');

// 1. Chiediamo all’utente il numero di chilometri che vuole percorrere;
var numeroChilometri = parseInt(prompt('Inserisci il numero di chilometri da percorrere'));
console.log(numeroChilometri);

// 2. Chiediamo l’età del passeggero;
var etaPasseggero = parseInt(prompt("Inserisci l'età"));
console.log(etaPasseggero);

// 3. Costo del biglietto è di 0.21 € al km;
