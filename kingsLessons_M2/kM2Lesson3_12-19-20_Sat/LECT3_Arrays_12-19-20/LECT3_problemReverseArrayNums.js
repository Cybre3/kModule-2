function main(numItems, items) {
    let outputArr = [];
    let result = '';

    for (let i = 0; i < numItems; i++) {
       outputArr.push(items[i]);
    }

    for(let i = outputArr.length - 1; i >= 0; i--) {
        result += `${outputArr[i]} `;
    }
    
    console.log(result);
}

main(3, [10, 20, 30, 40]);
main(4, [-1, 20, 99, 5]);