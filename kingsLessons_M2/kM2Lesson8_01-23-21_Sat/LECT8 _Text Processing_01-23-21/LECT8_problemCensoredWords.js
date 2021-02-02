function main(sentence, word) {
    sentence = sentence.replace(word, '*'.repeat(word.length));
    console.log(sentence);
}

main('A small sentence with some words', 'small');


function solve(sentence, word) {
    while (sentence.includes(word)) {
        sentence = sentence.replace(word, '*'.repeat(word.length));
    }
    console.log(sentence);
}

solve('A small sentence with some words small', 'small');
