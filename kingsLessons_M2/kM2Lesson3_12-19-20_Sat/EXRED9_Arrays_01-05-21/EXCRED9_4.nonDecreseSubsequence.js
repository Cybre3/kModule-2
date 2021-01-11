function main(numsArr) {
    let nextNum = numsArr[1];
    let ascendingArr = numsArr.filter((currentNum) => nextNum > currentNum && nextNum > numsArr[0]);

    // for(let i = 0; i < numsArr.length; i++) {
    //     if(numsArr[i])
    // }
    console.log(ascendingArr.join(' '));
}

main([1,3,8,4,10,12,3,2,24]);
main([1,2,3,4]);
main([20,3,2,15,6,1]);
