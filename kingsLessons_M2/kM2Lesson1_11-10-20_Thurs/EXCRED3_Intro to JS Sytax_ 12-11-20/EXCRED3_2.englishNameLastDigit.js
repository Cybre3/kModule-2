function main(num) {
    modResult = num % 10;
    let numWord = '';

    switch(modResult) {
        case 1:
            numWord = 'one';
            break;
        case 2:
            numWord = 'two';
            break;
        case 3:
            numWord = 'three';
            break;
        case 4:
            numWord = 'four';
            break;
        case 5:
            numWord = 'five';
            break;
        case 6:
            numWord = 'six';
            break;
        case 7:
            numWord = 'seven';
            break;
        case 8:
            numWord = 'eight';
            break;
        case 9:
            numWord = 'nine';
            break;
        default:
            console.log(`Error!`);
            break;
    }

    console.log(`${numWord}`);
}

main(512);
main(1);
main(1643);