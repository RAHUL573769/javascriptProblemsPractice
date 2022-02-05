// chairWood=3cft/chair;
// tableWood=10cft/table;
// bedWood=34cft/bed;

function myCalculator(chair,table,bed){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=34;
    const chairQuantity=perChairWood*chair;
    const tableQuantity=perTableWood*table;
    const bedQuantity=perBedWood*bed;
    const total=chairQuantity+tableQuantity+bedQuantity;
    return total;
}

const quant=myCalculator(10,16,20);
console.log(quant);