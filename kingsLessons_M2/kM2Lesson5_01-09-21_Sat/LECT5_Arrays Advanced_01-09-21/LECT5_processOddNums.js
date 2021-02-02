function main(arr) {
    let result = arr.filter((value, index) => index % 2 !== 0);
    let output = result.map((value) => value * 2);

    console.log(output.reverse().join(' '));
}

main([3, 0, 10, 4, 7, 3]);
main([10, 15, 20, 25]);