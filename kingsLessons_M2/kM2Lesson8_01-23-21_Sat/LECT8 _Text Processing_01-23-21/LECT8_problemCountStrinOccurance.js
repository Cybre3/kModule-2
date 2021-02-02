function main(sentence, text) {
    let count = 0;
    let words = sentence.split(' ');
    for (let word of text) {
        if (word === word) {
            count++;
        }
    }
    console.log(count);
}

main('This is a word and it also is a sentence', 'is');