function main(stringArr) {
    let referenceCheck = new Set();
    let words = stringArr.toLowerCase().split(' ');
    stringArr
    .toLowerCase()
    .split(' ')
    .forEach((str) => referenceCheck.add(str));

    let outputArr = [];

    for (let string of referenceCheck) {
        let duplicateStrArr = words.filter((word) => string === word);

        if (duplicateStrArr.length % 2 === 1) {
            outputArr.push(string);
        }
    }

    console.log(outputArr.join(' '));
}

main('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

// Alfred's code. I got pretty darn close to mirroring his code
// function main(string) {
//     let map = new Map();
//     let oddOccsArr = [];
//     let stringArr = string.toLowerCase().split(' ');
//     for (let i of stringArr) {
//         let allOccs = stringArr.filter((item) => item === i);
//         map.set(i, allOccs.length);
//     }
//     let allOccsArr = Array.from(map);
//     for (let [char, occurrences] of allOccsArr) {
//         if (occurrences % 2 !== 0) {
//             oddOccsArr.push(char);
//         }
//     }
//     console.log(oddOccsArr.join(' '));
// }
