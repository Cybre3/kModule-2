function main(numArr) {
    let firstNum = Number(numArr[0]);
    let lastNum = Number(numArr[numArr.length - 1]);
    
    console.log(firstNum + lastNum);
}

main(['20', '30', '40']);
main(['10', '17', '22', '33']);
main(['11', '58', '69']);