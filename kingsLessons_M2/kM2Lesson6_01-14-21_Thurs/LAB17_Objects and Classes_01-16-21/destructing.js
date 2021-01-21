let person = {
  name: 'John',
  age: 30,
  state: 'NY',
};

// let name = person.name;
// let age = person.age;
// let state = person.state;

let { name, age, state } = person;

console.log(state);

function main({name, age, state}) {
  console.log(name);
}

main(person);


let arr1 = [1,2,3,4];
let arr2 = [...arr1];

let obj1 = {name: 'Susan', age: 24}
let obj2 = {...obj1}