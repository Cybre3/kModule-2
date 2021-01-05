function main(num) {

    let days = Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
    let selectedDay = days[num - 1];

    if(num > days.length || num < 1){
        console.log('Invalid day!');
    } else {
        console.log(selectedDay);
    }    
}

// function main(num) {

//     let days = Array(null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

//     if(num > days.length || num < 1){
//         console.log('Invalid day!');
//     } else {
//         console.log(days[num]);
//     }    
// }

main(3);
main(6);
main(33);
main(-3);
