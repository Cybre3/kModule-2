function main(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr);
    let result = arr.slice(0, 2);
    console.log(result.join(' '));
}

main([30, 15, 50, 5]);