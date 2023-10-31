/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero1 = parseInt(prompt("Inserisci il primo numero"))
const numero2 = parseInt(prompt("Inserisci il secondo numero"))

let numeroMaggiore 

if(numero1 > numero2){
  numeroMaggiore = numero1
}else{
  numeroMaggiore = numero2
}

alert("Il numero più grande tra " + numero1 + " e " + numero2 + " è " + numeroMaggiore)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroInserito = parseInt(prompt("Inserisci un numero"))
const numero = 5

if(numeroInserito != numero){
  console.log("not equal")
}else{
  console.log("equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroFornito = prompt("Inserisci un numero")

if(numeroFornito % 5 == 0){
  console.log("divisibile per 5")
}else{
  console.log("non divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = parseInt(prompt("Inserisci primo numero"))
const num2 = parseInt(prompt("Inserisci secondo numero"))

if(num1 == 8 || num2 == 8 || num1 + num2 == 8 || num1 - num2 == 8 || num2 - num1 == 8){
  alert("Uno dei 2 numeri è uguale a 8 o la loro addizione/sottrazione è uguale a 8")
}else{
  alert("Condizioni non soddisfatte")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = parseFloat(prompt("Inserisci saldo totale carrello"))
const costoSpedizione = 10
let spesaTotale

if(totalShoppingCart >= 50){
  spesaTotale = totalShoppingCart
}else{
  spesaTotale = totalShoppingCart + costoSpedizione
}

alert("Il totale da pagare è " + spesaTotale)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = parseFloat(prompt("Inserisci saldo totale carrello"))
const costoSpedizione = 10
let spesaTotale

let prezzoScontato = totalShoppingCart*0.2

if(prezzoScontato >= 50){
  spesaTotale = prezzoScontato
}else{
  spesaTotale = prezzoScontato + costoSpedizione
}

alert("Il totale da pagare è " + spesaTotale)


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = parseInt(prompt("Inserisci un numero"))

if(numero % 2 === 0){
    alert("Il numero è pari")
}else{
    alert("Il numero è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = parseInt(prompt("Inserisci un numero"))

if(val <= 10 && val >= 5){
  console.log(val + " è compreso tra 5 e 10")
}else if(val >=0 && val < 5 ){
  console.log(val + " è compreso tra 0 e minore di 5 ")  
}else{
  console.log(val + " è maggiore di 10")
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto'
console.log(me.city) //constrollo su console mi darà il nome Toronto


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me.lastName) //controllo su console mi darà undefined

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2]
console.log(me.skills) //controllo su console il secondo indice sarà vuoto

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let array = []

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //popolo l'array successivamente

console.log(array) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array[9] = 100 //assegno un nuovo valore all'indice 9
console.log(array) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 100]
