/* 
calculate how much they have to pay

price for a single person.

output 
    "Total price: {price}". 
price formatted to second decimal point.

            Friday  Saturday    Sunday
Students    8.45     9.80       10.46
Business    10.90    15.60        16
Regular     15        20        22.50

There are also discounts based on some conditions:
    • Students –  if group >= 30 people 
        15% total price discount
    • Business – if group >= 100 people 
        10 of them can stay for free.
        aka group = 90
    • Regular – if group >= 10 && group <= 20 
        reduce total price by 5% 
        
You should reduce the prices in that EXACT order
*/

function vacation(groupNum, groupType, dayOfWeek) {
    let price = 0;
    let discount = 0;
    let groupTypeUP = groupType.toUpperCase();
    let dayOfWeekUP = dayOfWeek.toUpperCase();

    switch(groupTypeUP) {
        case 'STUDENTS':
            switch(dayOfWeekUP) {
                case 'FRIDAY':
                    price = 8.45;
                    break;
                case 'SATURDAY':
                    price = 9.80;
                    break;
                case 'SUNDAY':
                    price = 10.46;
                    break;
            }
            break;        
    }
    switch(groupTypeUP) {
        case 'BUSINESS':
            switch(dayOfWeekUP) {
                case 'FRIDAY':
                    price = 10.90;
                    break;
                case 'SATURDAY':
                    price = 15.60;
                    break;
                case 'SUNDAY':
                    price = 16;
                    break;
            }
            break;        
    }
    switch(groupTypeUP) {
        case 'REGULAR':
            switch(dayOfWeekUP) {
                case 'FRIDAY':
                    price = 15;
                    break;
                case 'SATURDAY':
                    price = 20;
                    break;
                case 'SUNDAY':
                    price = 22.50;
                    break;
            }
            break;        
    }

    if (groupTypeUP === 'STUDENTS') {
        if (groupNum >= 30) {
            discount = 0.15; // from total price
        }
    }
    if (groupTypeUP === 'BUSINESS') {
        if (groupNum >= 100) {
            groupNum -= 10;
        }
    }
    if (groupTypeUP === 'REGULAR') {
        if (groupNum >= 10 && groupNum <= 20) {
            discount = 0.05; // from total price
        }
    }

    let totalPrice = price * groupNum;
    let totalDiscountPrice = totalPrice - (totalPrice * discount);
    console.log(`Total price: ${totalDiscountPrice.toFixed(2)}`);
}

vacation(30,'Students','Sunday');
vacation(40,'Regular','Saturday');
vacation(120,'Business','Saturday');