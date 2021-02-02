function main(num, power) {
    let result = 1;
    for (let i = 1; i <= power; i++) {
        result *= num;
    }

    return result;
}

console.log(main(2, 8));
console.log(main(3, 4));