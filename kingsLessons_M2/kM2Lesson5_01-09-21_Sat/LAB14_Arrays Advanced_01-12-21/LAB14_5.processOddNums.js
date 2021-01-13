function main(numsArr) {

    let oddIndexArr = numsArr.filter((value, index) => index % 2 !== 0);
    let doubledArr = oddIndexArr.map((item) => item * 2);
    
    console.log(doubledArr.reverse().join(' '));    
}

main([10, 15, 20, 25]);
main([3, 0, 10, 4, 7, 3]);