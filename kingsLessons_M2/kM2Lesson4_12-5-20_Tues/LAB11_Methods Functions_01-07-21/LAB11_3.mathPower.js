let result = (num, power) => {
    let value = 1;

    for (let i = 1; i <= power; i++) {
        value *= num;
    }

    return value;
};

function main(inputNum, inputPower) {
    let mathPower = result(inputNum, inputPower);
    console.log(mathPower);
}

main(2, 8);
main(3, 4);