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
    userNames = userNames.split(', ');
    let newList = [];
    let blCount = 0;
    let lostCount = 0;
    let finalReport = [];
    commands.forEach((command) => {
        let [action, index, newName] = command.split(' ');
        let nameIndex = userNames.indexOf(index);
        switch (action) {
            case 'Blacklist':
                if (
                    nameIndex !== -1 &&
                    userNames[nameIndex] !== 'Blacklisted'
                ) {
                    console.log(`${index} was blacklisted.`);
                    userNames.splice(nameIndex, 1, 'Blacklisted');
                    blCount++;
                } else if (nameIndex === -1 || nameIndex === 'Blacklisted') {
                    console.log(`${index} was not found.`);
                }
                break;
            case 'Error':
                if (
                    userNames[index] !== 'Blacklisted' &&
                    userNames[index] !== 'Lost'
                ) {
                    console.log(
                        `${userNames[index]} was lost due to an error.`
                    );
                    userNames.splice(index, 1, 'Lost');
                    lostCount++;
                }
                break;
            case 'Change':
                if (
                    userNames[index] !== -1 &&
                    userNames[index] !== 'Blacklisted' &&
                    userNames[index] !== 'Lost'
                ) {
                    console.log(
                        `${userNames[index]} changed his username to ${newName}.`
                    );
                    userNames.splice(index, 1, newName);
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
