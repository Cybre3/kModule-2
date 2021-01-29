function main(stringArr) {
    let foundCopies = new Map();
    let [duplicatesOf, ...wordsToCheck] = stringArr;

    duplicatesOf.split(' ').forEach((wordLookingFor) => {
        let duplicates = wordsToCheck.filter((word) => word === wordLookingFor);
        foundCopies.set(wordLookingFor, duplicates.length);
    });

    let copies = Array.from(foundCopies).sort((a, b) => b[1] - a[1]);
    for (let [key, value] of copies) {
        console.log(`${key} - ${value}`);
    }
    // copies.forEach(foundCopy => console.log(`${foundCopy[0]} - ${foundCopy[1]}`));
}

main([
    'She at she when was',
    'She',
    "didn't",
    'understand',
    'how',
    'changed',
    'worked.',
    'When',
    'she',
    'looked',
    'at',
    'today',
    'compared',
    'to',
    'yesterday,',
    'there',
    'was',
    'nothing',
    'that',
    'she',
    'could',
    'see',
    'that',
    'was',
    'different.',
    'Yet,',
    'when',
    'she',
    'looked',
    'at',
    'today',
    'compared',
    'to',
    'last',
    'year,',
    'she',
    "couldn't",
    'see',
    'how',
    'anything',
    'was',
    'ever',
    'the',
    'same.',
]);
