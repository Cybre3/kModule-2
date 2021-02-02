function main(firstName, LastName, age) {
  let thisPerson = {
    firstName,
    LastName,
    age
  };
  for(let key in thisPerson) {

    console.log(`${key}: ${thisPerson[key]}`);
  }
}

main('Peter', 'Pan', 20);
main('Jack', 'Sparrow', 'unknown');
