/*
Conta il tempo
    Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e poi stampi il risultato.
    L'output avrà solo numeri interi.

    Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

    CONSIGLI:
        Math.floor= arrotonda per difetto.
        Math.ceil= arrotonda per eccesso.
        Math.round= arrotonda all'intero superiore solo da 0.5 in su.
 */

let input = 12560
let secondsInHours = 3600
let minutesInHours = 60

let totHours = Math.round(input / secondsInHours);
let totMinutes = Math.round((input % secondsInHours) / minutesInHours);
let totSeconds = (input % secondsInHours) % minutesInHours;

let result = " Il risultato è: " + totHours + " ore, "+ totMinutes +" minuti e "+ totSeconds+"secondi";
console.log(result);