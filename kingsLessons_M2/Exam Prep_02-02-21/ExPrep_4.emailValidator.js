function main(arr) {
    // Get email from array
    let email = arr.shift();
    let [command, arg] = arr.shift().split(' ');

    while (command !== 'Complete') {
        switch (command) {
            case 'Make':
                if (arg === 'Upper') {
                    email = email.toUpperCase();
                } else if (arg === 'Lower') {
                    email = email.toLowerCase();
                }
                console.log(email);
                // arg === 'Upper' ? email = email.toUpperCase() : email = email.toLowerCase();
                break;
            case 'GetDomain':
                console.log(email.substr(email.length - arg, arg));
                break;
            case 'GetUsername':
                let index = email.indexOf('@');
                if (index != -1) {
                    console.log(email.substring(0, index));
                } else {
                    // extract username
                    console.log(
                        `The email ${email} doesn't contain the @ symbol`
                    );
                }
                break;
            case 'Replace':
                while (email.indexOf(arg) !== -1) {
                    email = email.replace(arg, '-');
                }
                console.log(email);
                break;
            case 'Encrypt':
                let enc = email
                    .split('')
                    .map((ch) => ch.charCodeAt())
                    .join(' ');
                console.log(enc);
                break;
        }
        [command, arg] = arr.shift().split(' ');
    }
}

main([
    `Mike123@somemail.com`,
    `Make Upper`,
    `GetDomain 3`,
    `GetUsername`,
    `Encrypt`,
    `Complete`,
]);
main([`AnotherMail.com`, `Make Lower`, `GetUsername`, `Replace a`, `Complete`]);
