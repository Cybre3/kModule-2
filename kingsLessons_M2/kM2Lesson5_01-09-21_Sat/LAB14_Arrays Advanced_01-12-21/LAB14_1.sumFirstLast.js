// function main (arr){
//     let firstElement = arr[0];
//     let lasElement = arr[arr.length - 1];
//     let sum = Number(firstElement) + Number(lasElement);    //a;t wau to write this: let sum = +firstElement + +lasElement;

//     console.log(sum);
//     //console.log(arr);
// }



function main(numArr) {
    let firstNum = +numArr.shift();
    let lastNum = +numArr.pop();

    let sum = firstNum + lastNum;
    console.log(sum);
}

main(['20', '30', '40']);