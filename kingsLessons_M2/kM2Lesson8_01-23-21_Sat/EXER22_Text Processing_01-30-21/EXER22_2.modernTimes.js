function main(string) {
    string.split(' ').forEach((word) => {
        if (word.startsWith('#') && word.length > 1) {
            word = word.substr(1);
            let checkWord = word;
            letters = word.split('');
            letters.forEach((letter) => {
                if (
                    (letter.charCodeAt() < 'A'.charCodeAt() ||
                        letter.charCodeAt() > 'Z'.charCodeAt()) &&
                    (letter.charCodeAt() < 'a'.charCodeAt() ||
                        letter.charCodeAt() > 'z'.charCodeAt())
                ) {
                    checkWord = checkWord.replace(letter, '');
                }
            });
            if ((checkWord === word)) {
                console.log(word);
            }
        }
    });
}
// let checkLetterStart = 'A'.charCodeAt();

// let checkLetterEnd = 'Z'.charCodeAt();

// console.log(checkLetterStart, checkLetterEnd);
// main('Nowadays everyone uses # to tag a #special word in #socialMedia');
main('#123 #He#llo #Hi');
