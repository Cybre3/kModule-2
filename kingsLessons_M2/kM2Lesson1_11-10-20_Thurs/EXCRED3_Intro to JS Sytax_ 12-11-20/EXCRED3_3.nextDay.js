// function main(year, month, day) {

//     if (day < 30) {
//         day++;
//     } else if (day === 30) {
//         day = 1;
//         if (month === 12) {
//             month = 1;
//             year++;
//         } else {
//             month++;
//         }
//     }

//     console.log(`${year}-${month}-${day}`);
// }

function main(year, month, day) {

    if (day < 30) {
        day++;
    } else if (day === 30) {
        day = 1;
        if (month === 12) {
            month = 1;
            year++;
        } else {
            month++;
        }
    }

    console.log(`${year}-${month}-${day}`);
}

main(2016, 9, 30);