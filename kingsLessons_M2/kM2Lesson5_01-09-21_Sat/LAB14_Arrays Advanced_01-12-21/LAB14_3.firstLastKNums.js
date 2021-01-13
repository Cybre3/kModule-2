// function main(arr) {
//   let k = arr.shift();
//   console.log(arr.slice(0, k).join(' '));
//   console.log(arr.slice(arr.length - k, arr.length).join(' '));
// }



function main(multiNumArr) {
    const k = multiNumArr.shift();
    let pair1 = multiNumArr.slice(0, k);
    let pair2 = multiNumArr.slice(multiNumArr.length - k);
    console.log(pair1.join(' '));
    console.log(pair2.join(' '));
}

main([2, 7, 8, 9]);