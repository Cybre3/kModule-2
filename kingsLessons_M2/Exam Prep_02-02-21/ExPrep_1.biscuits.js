function main(biscuits, workers, otherBiscuits) {
    // Every third day in month (total 10 days/month)
    // (number of biscuits * number of workers * 75% of reg production) * 10 days
    let thirdDayProd = Math.floor(biscuits * workers * 0.75) * 10;
    // number of biscuits * number of workers * 20 days
    let regProduction = Math.floor(biscuits * workers * 20);

    // Total amount of biscuits per month
    let totalBiscuits = thirdDayProd + regProduction;
    // print  You have produced 17160 biscuits for the past month
    console.log(
        `You have produced ${totalBiscuits} biscuits for the past month.`
    );

    // Calculate percentage difference between your company and other company
    let percentage = Math.abs
        (((totalBiscuits - otherBiscuits) / otherBiscuits) * 100).toFixed(2);

    // if (totalBiscuits > otherBiscuits) {
    //     console.log(`You produce ${percentage} percent more biscuits.`);
    // } else {
    //     console.log(`You produce ${percentage} percent less biscuits.`);
    // }

    console.log(`You produce ${percentage} percent ${totalBiscuits > otherBiscuits ? `more` : `less`} biscuits.`);
}

main(78,8, 16000);
main(65, 12, 26000);
