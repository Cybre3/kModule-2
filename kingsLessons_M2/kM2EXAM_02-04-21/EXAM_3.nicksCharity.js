function main(string, commands) {
    commands.forEach((command) => {
        let [toDo, actionOrCh, replacement] = command.split(' ');
        switch (toDo) {
            case 'Replace':
                while (string.includes(actionOrCh)) {
                    string = string.replace(actionOrCh, replacement);
                }
                console.log(string);
                break;
            case 'Cut':
                if (
                    actionOrCh >= string.length ||
                    actionOrCh <= 0 ||
                    replacement <= 0 ||
                    replacement >= string.length
                ) {
                    console.log(`Invalid indexes!`);
                } else {
                    let remove = string.substr(actionOrCh, replacement);
                    string = string.replace(remove, '');
                    console.log(string);
                }
                break;
            case 'Make':
                if (actionOrCh === 'Upper') {
                    string = string.toUpperCase();
                    console.log(string);
                } else if (actionOrCh === 'Lower') {
                    string = string.toLowerCase();
                    console.log(string);
                }
                break;
            case 'Check':
                if (string.includes(actionOrCh)) {
                    console.log(`Message contains ${actionOrCh}`);
                } else {
                    console.log(`Message doesn't contain ${actionOrCh}`);
                }
                break;
            case 'Sum':
                if (
                    actionOrCh >= string.length ||
                    actionOrCh <= 0 ||
                    replacement <= 0 ||
                    replacement >= string.length
                ) {
                    console.log(`Invalid indexes!`);
                } else {
                    let sumString = string.substr(actionOrCh, replacement);
                    let sum = 0;
                    for (let ch of sumString) {
                        sum += Number(ch.charCodeAt());
                    }
                    console.log(sum);
                }
            case 'Finish':
                break;
        }
    });
}

// main(`ILikeSharan`, [
//     `Replace a e`,
//     `Make Upper`,
//     `Check SHEREN`,
//     `Sum 1 4`,
//     `Cut 1 4`,
//     `Finish`,
// ]);
main(`HappyNameDay`, [
    `Replace p r`,
    `Make Lower`,
    `Cut 2 23`,
    `Sum -2 2  `,
    `Finish`,
]);
