class Cat {

    constructor (catName, catAge) {
        this.catName = catName;
        this.catAge = catAge;
    }
    
    meow() {
        console.log(`${this.catName}, age ${this.catAge} say Meow`);
    }
}

function main(arr) {
    // Empty array to hold cat objects
    let catsArr = [];

    arr.forEach((cat) => {
        let [name, age] = cat.split(' ');

        // Generates a Cat object and push it inside the catsArr
        catsArr.push(new Cat(name, age));
    });

    //  Iterate through the catsArr
    catsArr.forEach((cat) => cat.meow());
}

main(['Mellow 2','Tom 5', 'Pineapple 4']);