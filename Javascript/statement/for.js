for (var i=0; i < 11; i++){
    console.log("im working");
}

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    // console.log(`${property}: ${object[property]}`);
    console.log(`${property} : ${object[property]}`);
}


let array;
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for ( let object in array){
    console.log(object);
}

function somma(a,b){
    console.log(a + b);
    if (a > b){
        console.log(`${a} is better than ${b}`)
    } else {
        console.log(`${b} is better than ${a}`)
    }
}
console.log(somma(3 ,2));