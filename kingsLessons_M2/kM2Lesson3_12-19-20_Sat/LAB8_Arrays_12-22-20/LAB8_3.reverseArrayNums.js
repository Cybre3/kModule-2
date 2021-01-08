function main(numCapacity, numArr) {
    let newNumArr = [];
    let result = '';

    for (let i = 0; i < numCapacity; i++) {
        newNumArr.push(numArr[i]);
    }

    for (let i = newNumArr.length - 1; i >= 0; i--) {
        result += `${newNumArr[i]} `;
    }

    console.log(result);
}

main(3, [10, 20, 30, 40, 50]);
main(4, [-1, 20, 99, 5]);
main(2, [66, 43, 75, 89, 47]);