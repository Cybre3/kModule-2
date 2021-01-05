function main(numArr, numRotate) {
    let newNumArr = [];

    if (numRotate > numArr.length) {
        numRotate -= numArr.length;
    }
    
    for (let i = numRotate; i < numArr.length; i++) {
        newNumArr.push(numArr[i]);
    }

    for (let j = 0; j < numRotate; j++) {
        newNumArr.push(numArr[j]);
    }

    console.log(newNumArr.join(' '));
}

main([51,47,32,61,21], 2);
main([32,21,61,1], 4);
main([2,4,15,31], 5);