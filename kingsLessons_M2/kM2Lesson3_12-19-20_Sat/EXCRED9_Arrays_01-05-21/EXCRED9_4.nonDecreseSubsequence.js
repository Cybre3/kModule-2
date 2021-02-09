function main(numsArr) {
    
    let biggerNum = 0;
    let validNums = [];

    for(let num of numsArr){
        if(num > biggerNum){
            biggerNum = num;
            validNums.push(biggerNum);
        }
    }
    console.log(validNums.join(' '));
}

main([1,3,8,4,10,12,3,2,24]);
main([1,2,3,4]);
main([20,3,2,15,6,1]);