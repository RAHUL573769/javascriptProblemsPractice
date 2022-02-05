var aliaMarks=95;
var daliaMarks=66;
var saliyaMarks=80;
var jaliyaMarks=77;


function marksCalculator(marks){


if(marks>=90){
    console.log("Congratulatulations!!!You Got A+");
}

else if(marks>=80){
console.log("You got A");
}
else if(marks>=70){
    console.log("You got B");
    }
else if(marks>=60){
    console.log("You got C");
    }
else if(marks>=50){
    console.log("You got C");
    }
    else{
        console.log("You Failed")
    }

}
let grade=marksCalculator(10);
console.log(grade);