
let solve = (stringLetter, num) => {
    let result = '';


    for (let i = 0; i < num; i++) {
        result += stringLetter;
    }

    console.log(result);
};

solve('abc', 3);
solve('String', 2);

function repeat(str, n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += str;
    }

    return result;
}

function main(inputStr, nTimes) {
    let output = repeat(inputStr, nTimes);
    console.log(output);
}

main('abc', 3);
main('String', 2);