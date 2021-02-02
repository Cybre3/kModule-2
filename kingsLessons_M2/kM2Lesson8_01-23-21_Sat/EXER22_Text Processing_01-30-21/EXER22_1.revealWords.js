function main(words, text) {
    words = words.split(', ');
    words.forEach(word => {
        text = text.replace('*'.repeat(word.length), word);
    });
    console.log(text);
}

main(
    'great',
    'kingsland is ***** place for learning new programming languages'
);
main(
    'great, learning',
    'kingsland is ***** place for ******** new programming languages'
);
