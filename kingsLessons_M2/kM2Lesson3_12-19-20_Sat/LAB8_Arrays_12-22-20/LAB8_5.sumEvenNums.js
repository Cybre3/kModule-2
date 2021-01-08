function main(stringArray) {
    let sum = 0;

    // for (let i = 0; i < stringArray.length; i++) {

    //     if (stringArray[i] % 2 === 0) {
    //         sum += parseInt(stringArray[i]);
    //     }
    // }
    // console.log(sum);

    for(let num of stringArray) {
        if (num % 2 === 0) {
            sum += Number(num);
        }
    }

    console.log(sum);
}

main(['1','2','3','4','5','6']);
main(['3','5','7','9']);
main(['2','4','6','8','10']);