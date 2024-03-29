function main(arr) {
    // Get cards
    let cards = arr.shift().split(':');
    // New cards Array
    let newArr = [];
    let [command, card, arg] = arr.shift().split(' ');
    while (command !== 'Ready') {
        switch (command) {
            case 'Add':
                if (!cards.includes(card)) {
                    console.log('Card not found.');
                } else {
                    newArr.push(card);
                }
                break;
            case 'Insert':
                if (!newArr[arg]) {
                    console.log('Error!');
                } else if (!cards.includes(card)) {
                    console.log('Error!');
                } else {
                    newArr.splice(arg, 0, card);
                }
                break;
            case 'Remove':
                if (!newArr.includes(card)) {
                    console.log('Card not found.');
                } else {
                    newArr = newArr.filter((a) => a !== card);
                }
                break;
            case 'Shuffle':
                newArr.reverse();
                break;
            case 'Swap':
                let index1 = newArr.indexOf(card);
                let index2 = newArr.indexOf(arg);
                let temp = card;
                newArr[index1] = arg;
                newArr[index2] = temp;
                break;
        }
        // Get next command
        [command, card, arg] = arr.shift().split(' ');
    }
    console.log(newArr.join(' '));
}

main([
    ` Innervate:Moonfire:Pounce:Claw:Wrath:Bite`,
    `Add Moonfire`,
    `Add Pounce`,
    `Add Bite`,
    `Add Wrath`,
    `Insert Claw 0`,
    `Swap Claw Moonfire`,
    `Remove Bite`,
    `Shuffle deck`,
    `Ready`,
]);
main([
    ` Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop`,
    `Add Pop`,
    `Add Exodia`,
    `Add Aso`,
    `Remove Wrath`,
    `Add SineokBqlDrakon`,
    `Shuffle deck`,
    `Insert Pesho 0`,
    `Ready`,
]);
