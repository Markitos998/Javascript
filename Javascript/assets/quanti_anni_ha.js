/*Quanti hanni ha??
Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    -l'età della persona,
    -quanti anni sono necessari per raggiungere i 100.
 Restituisca in output entrammbi i valori.

 Esempio:
 Input: anno corrente = 2018, anno di nascita = 1991
 Output: età: 27, anni mancanti = 73;
 */

var age= 27;
var ageDistance = 73;

var currentYear= 2018;
var bornYear = 1991;

var result = 100 - age;

console.log("L'età è " + age + " anni, gli anni mancanti sono " + ageDistance + " anni")

console.log(result);