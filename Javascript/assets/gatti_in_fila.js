/*
Gatti in fila
Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero di gatti presenti in ogni fila
Restituisca in output:
    -Il numero delle file risultanti
    -Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla;

    Esempio:
        Input: numero di gatti = 44, gatti per fila = 6
        Output: numero di file = 8 , gatti mancanti = 4

    Consigli:
    Per l'arrotondamento è consigliato l'utilizzo di Math.round (arrotonda all'intero superiore solo da .5 in su)
    utilizza Math.cell (arrotonda sempre all'intero superiore).
 */

let cats = 44;
let catsForRow = 6;

let rowNumber = cats / catsForRow;
let roundedRowNumber = Math.ceil(rowNumber);
let remainder = cats % catsForRow;
let missing = catsForRow - remainder;

let result = "numero di file =" + roundedRowNumber +" , gatti mancanti = "+missing;

console.log(result);