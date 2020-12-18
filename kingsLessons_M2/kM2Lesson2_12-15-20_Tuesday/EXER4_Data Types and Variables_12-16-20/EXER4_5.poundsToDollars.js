function main(currency) {
    let dollars = 0;
    let conversionFactor = 1.31;

    dollars = currency * conversionFactor;

    console.log(dollars.toFixed(3));
}

main(80);
main(39);