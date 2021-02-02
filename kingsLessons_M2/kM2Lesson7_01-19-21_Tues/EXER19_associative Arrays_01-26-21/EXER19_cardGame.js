function main(cardsDrawnArr) {
    let playerInfo = new Map();
    let cardType = {
        S: 4,
        H: 3,
        D: 2,
        C: 1,
    };
    let cardPower = {
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
    };

    cardsDrawnArr.forEach((person) => {
        let [personName, ...cardSetDrawn] = person.split(': ');
        if (!playerInfo.has(personName)) {
            playerInfo.set(personName, cardSetDrawn);
        } else {
            let validCards = new Set();
            let fullCardSet = playerInfo
                .get(personName)
                .concat(cardSetDrawn)
                .join(', ')
                .split(', ');
            fullCardSet.forEach((set) => validCards.add(set));
            validCards = Array.from(validCards);
            playerInfo.set(personName, validCards);
        }
    });

    let test = Array.from(playerInfo);
    for (let [player, cards] of test) {
        let total = 0;
        cards.forEach((card) => {
            card = Array.from(card);
            let type = card.pop();
            type = cardType[type];
            let power = card.join('');
            total += type * power;
            if(power === 'something'){
                power = cardPower[power];
            }
            // console.log(typeNum);
            console.log(power);
        });
    }
}

main([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD',
]);
