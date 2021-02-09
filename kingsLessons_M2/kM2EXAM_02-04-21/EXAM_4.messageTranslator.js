function main(numOfStrings, strings) {
    let pattern = /\!\b(?<action>[A-Z][a-z]{3,})\!\:\[(?<message>[A-Za-z]{8,})\]/gm;
    let encryptedMsg = [];

    strings.forEach((string) => {
        let validMessage = pattern.exec(string);
        if (validMessage) {
            let letters = Array.from(validMessage.groups.message);
            letters.map((letter) => encryptedMsg.push(letter.charCodeAt()));
            console.log(
                `${validMessage.groups.action}: ${encryptedMsg.join(' ')}`
            );
        } else {
            console.log(`The message is invalid`);
        }
    });
}

main(2, [`!Send!:[IvanisHere]`, `*Time@:[Itis5amAlready]`]);
main(3, [
    `go:[outside]`,
    `!drive!:YourCarToACarWash`,
    `!Watch!:[LordofTheRings]`,
]);
