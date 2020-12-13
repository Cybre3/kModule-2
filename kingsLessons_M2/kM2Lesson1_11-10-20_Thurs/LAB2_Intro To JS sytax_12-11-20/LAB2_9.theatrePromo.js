/* 
calculate price of single ticket. 
If the given age does not fit one of the categories, you should print "Error!".  
You can see the prices in the table below: 

        Day / Age   0 <= age <= 18  18 < age <= 64  64 < age <= 122 
        Weekday         12$             18$                 12$ 
        Weekend         15$             20$                 15$ 
        Holiday         5$              12$                 10$ 
        
Input
    two parameters 
        first one - type of day (string). 
        second – the age of the person (number). 
        
Output
    Print price of the ticket according to the table, 
    or "Error!" if the age is not in the table. 
    
Constraints
    • The age will be in the interval [-1000...1000].
    • The type of day will always be valid.
*/

function main(typeOfday, age) {
    let typeOfdayUP = typeOfday.toUpperCase();
    let price = 0;

    switch (typeOfdayUP) {
        case 'WEEKDAY':
            if(age <= 18 && age > 0) {
                price = 12;
            } else if (age > 18 && age <= 64) {
                price = 18;
            } else if (age > 64 && age <= 122) {
                price = 12;
            } 
            break;
    }
    switch (typeOfdayUP) {
        case 'WEEKEND':
            if(age <= 18 && age > 0) {
                price = 15;
            } else if (age > 18 && age <= 64) {
                price = 20;
            } else if (age > 64 && age <= 122) {
                price = 15;
            } 
            break;
    }
    switch (typeOfdayUP) {
        case 'HOLIDAY':
            if(age <= 18 && age > 0) {
                price = 5;
            } else if (age > 18 && age <= 64) {
                price = 12;
            } else if (age > 64 && age <= 122) {
                price = 10;
            } 
            break;
    }

    if (price > 0 && price <= 122) {
        console.log(`${Math.round(price)}$`);
    } else {
        console.log(`Error!`);
    }   
}

main('Weekday', 42);
main('Holiday', -12);
main('Holiday', 15);