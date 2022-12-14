/* 
Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz
Consegna:

Scrivi un programma che stampi in console i numeri da 1 a 100: !!OK

ma che per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Note: i bonus sono da considerarsi validi solo E SOLTANTO se avete finito l'esercizio base con successo.
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna
 */




for (let index = 1; index <= 100; index++) {
    console.log(index);

    if (index % 3 === 0 && index % 5 === 0) {
        console.log("fizzbuzz");
        let fizzbuzz = document.getElementById('fizzbuzz');
        fizzbuzz.append('fizzbuzz ');
        fizzbuzz.style.color = "magenta";
    } 
    
    else if (index % 3 === 0) {
        console.log("fizz");
        let fizz = document.getElementById('fizz');
        fizz.append('fizz '); 
        fizz.style.color = "red";  
    } 
    
    else if (index % 5 === 0) {
        console.log("buzz");
        let buzz = document.getElementById('buzz');
        buzz.append('buzz ');  
        buzz.style.color = "blue"; 
    } 
    
    else {
        console.log(index);
    }
};


