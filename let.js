// let cannot be redeclared

let x=5;
 x=7;
console.log(x);


// let is block scoped


if(true){
    let y=5;
    console.log(y);
}
console.log(y);


if(true){
    var y=50;
    console.log(y);
}
console.log(y);