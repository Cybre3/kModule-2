class Friends {
    constructor(blackListLength, lostNamesLength, friendsList) {
        this.blacklistedCount = blackListLength;
        this.lostNamesCount = lostNamesLength;
        this.friendsList = friendsList;
    }

    report() {
        console.log(
            `Blacklisted names: ${this.blacklistedCount}\nLost names: ${this.lostNamesCount}\n${this.friendsList}`
        );
    }
}
function main(userNames, commands) {
    let blCount = 0;
    let lostCount = 0;
    let finalReport = [];
    userNames = userNames.split(', ');
    commands.forEach((command) => {
        let [action, indexOrName, newName] = command.split(' ');
        let nameIndex = userNames.indexOf(indexOrName);
        switch (action) {
            case 'Blacklist':
                if (indexOrName === userNames[nameIndex]) {
                    console.log(`${indexOrName} was blacklisted.`);
                    userNames.splice(nameIndex, 1, 'Blacklisted');
                    blCount++;
                } else {
                    console.log(`${index} was not found.`);
                }
                break;
            case 'Error':
                if (
                    userNames[indexOrName] !== 'Blacklisted' &&
                    userNames[indexOrName] !== 'Lost' && indexOrName >= 0 && indexOrName < userNames.length
                ) {
                    console.log(
                        `${userNames[indexOrName]} was lost due to an error.`
                    );
                    userNames.splice(indexOrName, 1, 'Lost');
                    lostCount++;
                } 
                break;
            case 'Change':
                if ( userNames[indexOrName] !== 'Blacklisted' &&
                userNames[indexOrName] !== 'Lost' && indexOrName >= 0 && indexOrName < userNames.length) {
                    console.log(
                        `${userNames[indexOrName]} changed his username to ${newName}.`
                    );
                    userNames.splice(indexOrName, 1, newName);
                }
                break;
            case 'Report':
                finalReport.push(
                    new Friends(
                        blCount,
                        lostCount,
                        userNames.join(' ')
                    ).report()
                );
        }
    });
}

main(`Mike, John, Eddie`, [
    `Blacklist Mike`,
    `Error 0`,
    `Error 1`,
    `Change 2 Mike123`,
    `Report`,
]);
main(`Mike, John, Eddie, William`, [
    ` Error 3`,
    `Error 3`,
    `Change 0 Mike123`,
    `Blacklist Eddie`,
    `Report`,
]);
