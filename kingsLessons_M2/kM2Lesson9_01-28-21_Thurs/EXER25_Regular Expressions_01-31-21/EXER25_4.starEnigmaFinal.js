function main(numOfStrings, inputs) {
    let letterCountPattern = /[star]/gim;
    let decryptMessage = /@\b(?<planetName>[A-Za-z]+)([^\@\-\!\:\>]*)?\:\2?(?<planetPopulation>\d+)\2?\!\2?(?<attackType>[AD])\2?\!\2?\W?\-\>(?<soldierCount>\d+)/gm;
    let planetsAttacked = [];
    let planetsDestroyed = [];
    let msgs = [];

    inputs.forEach((input) => {
        let key = input.match(letterCountPattern).length;
        msgs.push(
            input
                .split('')
                .map((letter) => String.fromCharCode(letter.charCodeAt() - key))
                .join('')
        );
    });
    
    let validPlanet = decryptMessage.exec(msgs);
    while (validPlanet) {
        switch (validPlanet.groups.attackType) {
            case 'A':
                planetsAttacked.push(validPlanet.groups.planetName);
                break;
            case 'D':
                planetsDestroyed.push(validPlanet.groups.planetName);
                break;
        }
        validPlanet = decryptMessage.exec(msgs);
    }
    planetsAttacked.sort((a, b) => a.localeCompare(b));
    planetsDestroyed.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${planetsAttacked.length}`);
    planetsAttacked.forEach((planet) => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${planetsDestroyed.length}`);
    planetsDestroyed.forEach((planet) => console.log(`-> ${planet}`));
}

main(2, ['STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
main(3, [
    "tt(''DGsvywgerx>6444444444%H% 1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR',
]);
