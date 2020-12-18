function main(missingChar, char, NewString){

    let altString = missingChar.replace('_', char);

    if(altString !== NewString) {
        console.log(`Not Matched`);
    } else {
        console.log(`Matched`);
    }
}

main('Str_ng', 'I', 'Strong');
main('Str_ng', 'i', 'String');