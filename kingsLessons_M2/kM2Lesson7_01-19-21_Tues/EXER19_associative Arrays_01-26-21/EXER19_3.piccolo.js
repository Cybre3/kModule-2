function main(stringArr) {
    let parkingLot = new Map();

    stringArr.forEach((str) => {
        let [direction, carNumber] = str.split(', ');
        let sortNumber = carNumber.slice(2, 6);
        if (direction === 'IN') {
            parkingLot.set(carNumber, sortNumber);
        } else {
            parkingLot.delete(carNumber);
        }
    });

    if (parkingLot.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sortArr = Array.from(parkingLot);
        sortArr.sort((a, b) => a[1] - b[1]);
        sortArr.forEach(car => console.log(car[0]));
    }
}

main([
    'IN, GC2844AA',
    'IN, CA1234TA',
    'OUT, CA1234TA',
    'IN, DA9999TT',
    'IN, CF2866HI',
    'OUT, DA9999TT',
    'IN, RS2844AA',
    'OUT, GC2844AA',
    'IN, BN9876HH',
]);
main(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);
