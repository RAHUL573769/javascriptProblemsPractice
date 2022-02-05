'use strict';

function fruitProcessor(apples,oranges){
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);
    const juice=`Fruit is made with ${applePieces} and ${orangePieces}`;

    return juice;

}


function cutFruitPieces(fruit){
    return fruit*4;
}

let fruitJuice=fruitProcessor(2,4);

console.log(fruitJuice);


if(true){
    let x=9;
    console.log(x);
}
console.log(x);