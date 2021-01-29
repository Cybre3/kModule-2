function main(arr) {
    let studentsGrades = new Map();
    for (let item of arr) {
        // Get name
        let [name, ...grades] = item.split(' ');
        grades = grades.map(Number);

        if (!studentsGrades.has(name)) {
            // Add to the map
            studentsGrades.set(name, grades);
        } else {
            let oldGrades = studentsGrades.get(name);
            let newGrades = oldGrades.concat(grades);
            // let newGrades = [...oldGrades, ...newGrades];
            studentsGrades.set(name, newGrades);
            // studentsGrades.set(name, studentsGrades.get(name).concat(grades));
        }
    }

    let mapArr = Array.from(studentsGrades).sort((a, b) => average(a, b));

    // Iterate to print map
    for (let [name, grades] of mapArr) {
        console.log(`${name}: ${grades.join(', ')}`);
    }
}

function average(a, b) {
    let sumA = 0;
    let sumB = 0;

    a[1].forEach((item) => (sumA += item));
    b[1].forEach((item) => (sumB += item));

    let averageA = sumA / a[1].length;
    let averageB = sumB / b[1].length;

    return averageA - averageB;
}

main(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
