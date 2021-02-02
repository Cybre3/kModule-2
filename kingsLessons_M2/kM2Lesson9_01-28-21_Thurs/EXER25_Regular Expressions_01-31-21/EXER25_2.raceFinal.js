function main(stringArr) {
    let lettersPattern = /[A-Za-z]/gi;
    let numsPattern = /\d/g;
    let race = new Map();
    let [participants, ...characters] = stringArr;
    
    characters.forEach((racer) => {
        let racerName = racer.match(lettersPattern).join('');
        let numbers = racer.match(numsPattern);
        let sum = 0;

        if (racer !== 'end of race') {
            numbers.forEach((num) => {
                sum += +num;
            });
        }

        participants.split(', ').forEach((validRacer) => {
            if (racerName === validRacer && !race.has(validRacer)) {
                race.set(validRacer, +sum);
            } else if (racerName === validRacer && race.has(validRacer)) {
                race.set(validRacer, race.get(validRacer) + +sum);
            }
        });
    });

    let validRace = Array.from(race).sort((a, b) => b[1] - a[1]);

    for (let racer in validRace) {
        let [racerName, distance] = validRace[racer];
        switch (racer) {
            case '0':
                console.log(`1st place: ${racerName}`);
                break;
            case '1':
                console.log(`2nd place: ${racerName}`);
                break;
            case '2':
                console.log(`3rd place: ${racerName}`);
                break;
        }        
    }
}
main([
    `George, Peter, Bill, Tom`,
    `G4e@55or%6g6!68e!!@`,
    `R 1@!3a$y4456@`,
    `B 5@i@#123ll`,
    `G@e54o$r6ge#`,
    `7P%et^#e5346r`,
    `T$o553m&6`,
    `end of race`,
]);
