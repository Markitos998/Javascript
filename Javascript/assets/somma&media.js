// Scrivi un programma che dati 5 numeri restituisca un output la somma e la media!

let a, b, c, d, e;

a=1;
b=3;
c=6;
d=2;
e=7;

var risultatoSomma = a + b + c + d + e;

console.log('Dati 5 valori:' + '\n' + 'a=' + a + ", b=" + b + ', c=' + c + ', d=' + d + ', e=' + e); 
console.log('La somma é: ' + '\n' + risultatoSomma);
console.log('Il tipo della somma è: ' +'\n' + typeof risultatoSomma);

var risultatoMedia = risultatoSomma / 5;

console.log('La media è: ' + risultatoMedia);
console.log('Il tipo della media è: ' + typeof risultatoMedia);