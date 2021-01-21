class Cat {
  constructor(catName, age) {
    this.catName = catName;
    this.age = age;
  }

  meow() {
    console.log(`${this.catName}, age ${this.age} says Meow`);
  }
}

function main(inputArr) {
  let cats = [];

  inputArr.forEach((cat) => {
    let [name, age] = cat.split(' ');
    cats.push(new Cat(name, age));
  });

  cats.forEach((cats) => cats.meow());
}

main(['Mellow 2', 'Tom 5']);
