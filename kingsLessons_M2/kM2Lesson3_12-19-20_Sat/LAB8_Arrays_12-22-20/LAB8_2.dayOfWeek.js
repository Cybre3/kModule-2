function main(dayNum) {
    let days = Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

    if (dayNum > days.length || dayNum < 1) {
        console.log('Invalid day!');
    } else {
        console.log(days[dayNum - 1]);
    }
}

main(3);
main(6);
main(11);