function main(givenWord, text) {
    let textCommonGround = text.toLowerCase();
    let index = textCommonGround.indexOf(givenWord.toLowerCase());
    if (index !== -1) {
        console.log(givenWord);
    } else {
        console.log(`${givenWord} not found!`);
    }
}

main('javascript', 'JavaScript is the best programming language');
main('python', 'JavaScript is the best programming language');
