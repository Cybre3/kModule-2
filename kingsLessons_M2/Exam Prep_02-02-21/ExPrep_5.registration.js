function main(arr) {

    let pattern = /\bU\$(?<username>[A-Z][a-z]{2,})U\$P@\$(?<password>[A-za-z]{5,}[0-9]+)P@\$/gm;
    let count = 0;
    let num = arr.shift();

    arr.forEach(email => {
        let match = pattern.exec(email);

        if (match) {
            count++;
            console.log(`Registration was successful`);
            console.log(`Username: ${match.groups.username}, Password: ${match.groups.password}`);
        } else {
            console.log(`Invalid username or password`);
        }
    });
    console.log(`Successful registrations: ${count}`);
}

main([3,` U$MichaelU$P@$asdqwe123P@$`, `U$NameU$P@$PasswordP@$`,  `U$UserU$P@$ad2P@$`]);
main([2, `U$TommyU$P@$asdqwe123P@$`,  `Sara 1232412`]);