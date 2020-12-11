/* 
based on the given age a person is: baby, child, teenager, adult, elder. 

The input 
    comes as single number parameter. 
    
The bounders are
    • 0-2 – baby; 
    • 3-13 – child; 
    • 14-19 – teenager;
    • 20-65 – adult;
    • >=66 – elder; 
    • All the values are inclusive
*/

function person(age) {
    let typePerson = '';

    if (age >= 66) {
        typePerson = 'elder';
    } else if (age >= 20) {
        typePerson = 'adult';
    } else if (age >= 14) {
        typePerson = 'teenager';
    } else if (age >= 3) {
        typePerson = 'child';
    } else if(age >= 0) {
        typePerson = 'baby';
    } else {
        typePerson = 'inclusive';
    }

    console.log(typePerson);
}

person(20);
person(1);
person(100);