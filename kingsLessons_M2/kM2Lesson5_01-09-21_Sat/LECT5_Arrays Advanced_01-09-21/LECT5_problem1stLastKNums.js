let result = (numsArr) => {

    let k = numsArr.shift();
    return numsArr.slice(0, k) && numsArr.slice(numsArr.length - k, numsArr.length);
};

function main(inputNumArr) {
    let print = result(inputNumArr);
    console.log(print.join(' '));
}

main([2, 7, 8, 9]);
main([3, 6, 7, 8, 9]);