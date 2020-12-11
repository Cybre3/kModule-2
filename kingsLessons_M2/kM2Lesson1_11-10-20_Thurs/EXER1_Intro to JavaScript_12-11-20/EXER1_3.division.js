/* 
return whether that number is divisible by the following numbers: 2, 3, 6, 7, or 10. 
You should always take the bigger division. 
If the number divides by both 2 && 3 && divisible by 6 
    print only the division by 6. 
If num divisible by 2 it is sometimes also divisible by 10    
    print the division by 10. 
If num != divisible by given numbers 
    print "Not divisible".
    Otherwise print "The number is  divisible by {number}"
*/

function divide(num) {
    let mod = 0;

    if (num % 2 === 0) {
        mod = 2;
    } 
    if (num % 3 === 0) {
        mod = 3;
    }
    if (num % 6 === 0) {
        mod = 6;
    }
    if (num % 7 === 0) {
        mod = 7;        
    }
    if (num % 10 === 0) {
        mod = 10;
    }

    if (mod > 0) {
        console.log(`The number is divisible by ${Math.max(mod)}`);
    } else {
        console.log(`Not divisible`);
    }
}

divide(30);
divide(15);
divide(12);
divide(1643);