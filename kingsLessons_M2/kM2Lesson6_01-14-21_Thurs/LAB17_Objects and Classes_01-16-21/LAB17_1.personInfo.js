function main(firstName, lastName, age) {
  let person1 = {
    firstName,
    lastName,
    age,
  };

  for (let details in person1) {
    console.log(`${details}: ${person1[details]}`);
  }
}

main('Peter', 'Pan', '20');
