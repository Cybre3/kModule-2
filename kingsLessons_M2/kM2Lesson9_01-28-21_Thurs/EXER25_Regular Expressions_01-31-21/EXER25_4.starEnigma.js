function main(string) {
    let letterCountPattern = /(s|t|a|r)/gim;
    let decryptMessage = /\@(?<planetName>[A-Za-z]+)([^\@\-\!\:\>])?\:\2?(?<planetPopulation>\d+)\2?\!\2?(?<attackType>[A|D])\2?\!\2?\ ?\-\>\2?(?<soldierCount>\d+)\2?/gm;
    let inputs = string.split(/\,\s/gm);
    let map = new Map();
    let attacked = [];
    let destroyed = [];

    inputs.forEach((input) => {
        let count = input.match(letterCountPattern);
        if (count) {
            key = count.length;
            map.set(input, key);
        }
    });

    let extract = Array.from(map);
    for (let [code, key] of extract) {
        let message = code.split('').map((letter) => {
            if (letter.charCodeAt() - key < 32) {
                return String.fromCharCode(32);
            } else {
                return String.fromCharCode(letter.charCodeAt() - key);
            }
        });
        let validPlanet = decryptMessage.exec(message.join(''));
        while (validPlanet) {
            switch (validPlanet.groups.attackType) {
                case 'A':
                    attacked.push(validPlanet.groups.planetName);
                    break;
                case 'D':
                    destroyed.push(validPlanet.groups.planetName);
                    break;
            }
            validPlanet = decryptMessage.exec(message.join(''));
        }
    }
    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach((planet) => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.forEach((planet) => console.log(`-> ${planet}`));
}

main('2, STCDoghudd4=63333$D$0A53333, EHfsytsnhf?8555&I&2C9555SR');
main(
    "3, tt(''DGsvywgerx>6444444444%H% 1B9444, GQhrr|A977777(H(TTTT, EHfsytsnhf?8555&I&2C9555SR"
);
