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
        let cardsArr = String(cardSetDrawn).split(', ');
        if (!playerInfo.has(personName)) {
            playerInfo.set(personName, cardsArr);
        } else {
            playerInfo.set(
                personName,
                playerInfo.get(personName).concat(cardsArr)
            );
        }
    });

    let playCards = Array.from(playerInfo);
    for (let [player, cards] of playCards) {
        let total = 0;
        let validCards = new Set(cards);
        let currentCards = Array.from(validCards);
        currentCards.forEach((card) => {
            if (card.includes('10')) {
                total += +cardType[card[2]] * 10;
            } else if (isNaN(card[0])) {
                total += +cardPower[card[0]] * +cardType[card[1]];
            } else {
                total += +card[0] * +cardType[card[1]];
            }
        });
        console.log(`${player}: ${total}`);
    }
}

// function typePowerConvert(ch) {
//     switch (ch) {
//         case 'S':
//             return 4;
//         case 'H':
//             return 3;
//         case 'D':
//             return 2;
//         case 'C':
//             return 1;
//         case 'J':
//             return 11;
//         case 'Q':
//             return 12;
//         case 'K':
//             return 13;
//         case 'A':
//             return 14;
//         default:
//             return ch;
//     }
// }

main([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD',
]);
