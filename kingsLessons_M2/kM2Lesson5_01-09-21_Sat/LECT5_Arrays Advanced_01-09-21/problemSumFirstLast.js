function main(arr) {
    let lastItem = +arr.pop(); // Plus is short hand for Number();
    // let lastItem = arr[arr.length - 1];

    let firstItem = Number(arr.shift());
    //let firstItem = arr[0];
    console.log(firstItem + lastItem);
}

main(['2.5', '30', '40']);