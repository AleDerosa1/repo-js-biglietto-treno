/*
RACCOLTA DATI
1.Chiedere all'utente il numero di km che vuole percorrere
2.Chiedere all'utente l'età del passeggero
*/
const km = prompt("Quanti km devi percorrere?");
const age = prompt("Qual'è la tua età?");
console.log("kilometri: " + km);
console.log("età: " + age);

/*
ESECUZIONE DATI
3.il prezzo del biglietto è definito in base ai km (0.21 € al km)
4.Se il passeggero è minorenne verrà applicato uno sconto del 20% sul prezzo del biglietto
5.Altrimenti se il passeggero ha un età >= a 65 anni verrà applicato uno sconto del 40% sul prezzo del biglietto
6.Altrimenti il prezzo del biglietto rimarrà invariato
*/
    let price = km * 0.21;
console.log("prezzo intero: " + price);
const kmstr = parseInt(km);
const agestr = parseInt(age);
let discount;
if (isNaN(km),isNaN(age)) {
    console.log("Inserisci valori numerici");
} else 

    if (age<18 ) {
    discount = 20;
} else if (age>=65) {
    discount = 40;
} else {
    discount = 0;
}
 
price = (price - ((price * discount) / 100)).toFixed(2);
console.log("prezzo scontato: " + price);

