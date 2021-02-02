function main(obj) {
  let jsonData = JSON.stringify(obj);
  console.log(jsonData);
}

let person = {
  firstName: 'George',
  lastName: 'Jones',
  hairColor: 'Borwn',
};

main(person);
