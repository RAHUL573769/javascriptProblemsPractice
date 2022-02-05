// chairWood=3cft/chair;
// tableWood=10cft/chair;
// bedWood=50cft/chair;


function WoodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;
    const chairWoodQuantity=chairQuantity*perChairWood;
    const tableWoodQuantity=tableQuantity*perTableWood;
    const bedWoodQuantity=bedQuantity*perBedWood;

const totalWoodQuantity=chairWoodQuantity*tableWoodQuantity*bedWoodQuantity;
return totalWoodQuantity;
}

const totalPrice=WoodCalculator(3,4,5);
console.log(totalPrice);