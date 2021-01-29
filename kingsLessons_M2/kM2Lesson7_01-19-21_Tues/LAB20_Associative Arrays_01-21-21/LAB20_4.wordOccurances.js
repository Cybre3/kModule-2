// •Create a map
// •Loop through the elements of the array of words
// •Update the map
// •Sort the map by value in descending:
// •Finally, print the result in format as the example above

function main(wordsArr) {
    let words = new Map();

    // let uniqueArr = [...new Set(wordsArr)];
    // uniqueArr.forEach((item) => {
    //     let found = wordsArr.filter((a) => a === item);
    //     mapArr.set(item, found.length);
    // });

    // updating map
    for (let word of wordsArr) {
        // let times = wordsArr.filter((item) => item === word).length;
        let times = wordsArr.filter((item) => item === word);
        words.set(word, times.length);
    }

    // sorting
    // let mapArr = Array.from(words).sort((a, b) => b[1] - a[1]);
    let mapArr = Array.from(words);
    mapArr.sort((a, b) => b[1] - a[1]);

    // print outputs
    for (let [word, times] of mapArr) {
        console.log(`${word} -> ${times} times`);
    }
}

main([
    'Here',
    'is',
    'the',
    'first',
    'sentence',
    'Here',
    'is',
    'another',
    'sentence',
    'And',
    'finally',
    'the',
    'third',
    'sentence',
]);
