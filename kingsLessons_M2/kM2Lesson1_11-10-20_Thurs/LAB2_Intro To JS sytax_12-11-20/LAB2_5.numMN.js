/* 
receives a number M and a number N 
(M will always be bigger than N). 
Print all numbers from M to N
*/

function main(num1 , num2) {

    for (let i = num1; i >= num2; i--) {
        console.log(i);
    }
}

main(6, 2);
main(4, 1);