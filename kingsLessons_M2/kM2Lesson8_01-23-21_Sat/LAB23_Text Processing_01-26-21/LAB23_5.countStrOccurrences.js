function main(text, word) {

    let words = text.split(' ');
    let count = 0;
    words.forEach(checkWord => {
        if(checkWord === word) {
            count++;
        }
    });
    console.log(count);
}

main('This is a word and it also is a sentence', 'is');
