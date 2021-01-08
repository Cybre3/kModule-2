function main(numbersArr) {
    let modifiedNumArr = [];
    let sumOriginal = 0;
    let sumModified = 0;
    
    for (let index = 0; index < numbersArr.length; index++) {
        let newNum = numbersArr[index];
        
        if (numbersArr[index] % 2 === 0) {
            newNum += index;
        } else {
            newNum -= index;
        }

        modifiedNumArr.push(newNum); 
        sumOriginal += numbersArr[index];
        sumModified += newNum;
    } 

    console.log(modifiedNumArr);
    console.log(sumOriginal);
    console.log(sumModified);
}

main([5, 15, 23, 56, 35]);
main([-5, 11, 3, 0, 2]);