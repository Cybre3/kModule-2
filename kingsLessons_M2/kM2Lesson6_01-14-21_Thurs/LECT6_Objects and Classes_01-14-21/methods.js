// 1st syntax
// let person1 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 35,
//     printFullName:function(){
//         person1.firstName = 'Mike';
//         console.log('John Doe');
//         console.log(person1.firstName, person1.lastName);
//     }
// };

// person1.printFullName();

// 2nd syntax
// let person2 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 35,
//     printFullName() {
//         person2.firstName = 'Mike';
//         console.log('John Doe');
//         console.log(person2.firstName, person2.lastName);
//     },
//     job:'Developer'
// };

// person2.printFullName();

// 3rd syntax
// let person3 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 35,
//     job:'Developer'
// };
// person3.printFullName = () => {
//     person.firstName = 'Mike';
//     console.log('John Doe');
//     console.log(person3.firstName, person3.lastName);
// };

// person.printFullName();

// let entriesArr = Object.entries(person3);
// let keysArr = Object.keys(person3);
// let vaulesArr = Object.values(person3);
// console.log(entriesArr, keysArr, vaulesArr);

// let personName = 'John';
// let age = 25;

// let person4 = {
//     personName,
//     age
// }
// console.log(person4);

// way to iterate through objects
let student = { name: 'Peter', age: '18', grade: '5.50'};

for(let key in student) { // used to get the property keys - name age grade
    console.log(key);
    console.log(student[key]); // will not work with student.key, must use bracket in a loop
    console.log(`${key} -> ${student[key]}`);
}