
function checkFactorial(number){

    var factorial=1;
    for(var i=1;i<=number;i++){
     
        factorial=factorial*i;
   
    }
    return factorial;
}

const ch=checkFactorial(6);
console.log(ch);