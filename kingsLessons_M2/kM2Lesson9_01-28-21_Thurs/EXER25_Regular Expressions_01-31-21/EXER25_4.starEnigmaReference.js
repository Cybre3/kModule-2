function main(num, inputs) {
    let attackedPlanets = [];
    let destroyedPlanets = [];
    let msgs = [];

    let keyPattern = /[s,t,a,r]/gim;
    let attackPattern = /\@(?<name>[A-Z][a-z]+)\d?\:(?<pop>[0-9]*)\!(?<type>[A,D])\W+?->(?<soldiers>[\d]+)\B/gm;

    inputs.forEach((msg) => {
        let key = msg.match(keyPattern).length;
        let decrypt = msg
            .split('')
            .map((letter) => String.fromCharCode(letter.charCodeAt() - key))
            .join('');
        msgs.push(decrypt);
    });
    let messages = msgs.join('');
    for (let i = 0; i < num; i++) {
        let match = attackPattern.exec(messages);
        if (match) {
            if (match.groups.type === 'D') {
                destroyedPlanets.unshift(match.groups.name);
            } else if (match.groups.type === 'A') {
                attackedPlanets.unshift(match.groups.name);
            }
        }
    }
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach((planet) => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach((planet) => console.log(`-> ${planet}`));
}

main(2, ['STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
main(3, [
    "tt(''DGsvywgerx>6444444444%H% 1B9444", "GQhrr|A977777(H(TTTT", "EHfsytsnhf?8555&I&2C9555SR",
]);
