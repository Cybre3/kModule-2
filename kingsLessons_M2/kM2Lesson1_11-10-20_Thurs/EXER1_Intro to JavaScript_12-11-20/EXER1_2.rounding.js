/* 
function that rounds numbers to specific precision.

input 
    two numbers 
        first value 
            the number to be rounded 
        second 
            the precision (significant decimal places). 
    
    If a precision is passed, that is more than 15 
        it should automatically be reduced to 15.
        Remove trailing zeroes, 
        if any (you can use parseFloat()) 

output 
    should be printed to the console. 
    Do not print insignificant decimals.
*/

function round(numToRound, decimalPlace) {
    
    if (decimalPlace > 15) {
        decimalPlace = 15;
    }
    let roundNum = numToRound.toFixed(decimalPlace);
    
    console.log(parseFloat(roundNum));
}

round(3.1415926535897932384626433832795, 2);
round(10.5, 3);
round(1.58462578954125468541, 16);