const car={
    name:"Fiat",
    color:"blue",
    model:500,
    weight:"850 kg",
    start:function(){
        this.drive();
        console.log("Car is starting");

    }
    drive:function(){
        console.log("Car is driving");
    }

};

console.log(car.start);