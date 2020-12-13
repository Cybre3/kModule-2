/* 
INPUT
    given 3 parameters 
        student name (string), 
        age (number) 
        average grade (number). 
    
    
    Your task is to print all the info about the student in the following format. 
    The grade formatted to second decimal point: 
    
OUTPUT
    "Name: {student name}, Age: {student age}, Grade: {student grade}"
*/

function main(studentName, age, avgGrade) {

    console.log(`Name: ${studentName}, Age: ${age}, Grade: ${avgGrade.toFixed(2)}`);
}

main('John', 15, 5.54678);
main('Steve', 16, 2.1426);
main('Marry', 12, 6.00);