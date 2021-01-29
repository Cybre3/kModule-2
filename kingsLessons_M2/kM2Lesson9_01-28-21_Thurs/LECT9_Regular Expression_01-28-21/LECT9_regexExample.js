function main(str) {
    let regex = /^\d{5}(-[\d]{4})?$/;
    let validZip = regex.test(str);
    console.log(validZip);
}

main('08609');