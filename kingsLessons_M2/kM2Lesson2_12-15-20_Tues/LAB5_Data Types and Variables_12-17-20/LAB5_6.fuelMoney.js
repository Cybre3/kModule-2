function main(distance, passengers, pricePerLiter) {
   
    // let emptyBusFuel = (distance / 100) * 7;
    // let fuelConsumption = passengers * 0.1;
    // let busOccupyFuel = emptyBusFuel + fuelConsumption;
    // let neededMoney = busOccupyFuel * pricePerLiter;

    let tripFuel = (distance / 100) * 7;
    tripFuel += passengers * 0.1;
    let neededMoney = tripFuel * pricePerLiter;


    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}

main(260, 9, 2.49);
main(90, 14, 2.88);