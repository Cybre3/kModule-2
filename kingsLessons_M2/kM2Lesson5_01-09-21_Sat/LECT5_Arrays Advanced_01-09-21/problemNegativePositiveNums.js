let sort = (numsArr) => {
    let result = [];
    
    for (let num of numsArr) {

        if(num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    return result.join('\n');
};

function main(inputNumArr) {
    let newNumsArr = sort(inputNumArr);
    console.log(newNumsArr);
}

main([7, -2, 8, 9]);
main([3, -2, 0, -1]);
main([-3, 2, -1, 0]);