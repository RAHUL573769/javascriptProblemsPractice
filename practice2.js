function roadSignal(signal){
    if(signal==="green"){
        console.log("You May cross the road");
    }
    else if(signal==="yellow")
    {
        console.log("You May wait for some Time");
    }
    else  {
        console.log("Don't cross the road");
    }
}


var safe=roadSignal("yellow");
console.log(safe);