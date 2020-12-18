/* 
check whether a year is leap. 
Leap years are either divisible by 4 but not by 100 
or are divisible by 400.

Return the result like examples below
*/

function leap(year) {
    let leap = '';

    // if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    //     leap = 'yes';
    // } else {
    //     leap = 'no';
    // }

    if ((year % 4 === 0 && year % 100 !== 0)) {
        leap = 'yes';
    } else if(year % 400 === 0){
        leap = 'yes';
    } else {
        leap = 'no';
    }

    console.log(leap);
}

leap(1984);
leap(2003);
leap(4);