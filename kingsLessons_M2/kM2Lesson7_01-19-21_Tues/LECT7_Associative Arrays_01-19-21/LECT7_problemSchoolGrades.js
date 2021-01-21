function main(classArr) {

    // Createempty Map
    let map = new Map();
    // Iterate through input array to store the student/grades in the Map
    classArr.forEach((item) => {
        let [student, ...grades] = item.split(' ');
        // Convert grades array to Numbers
        grades = grades.map(Number);
        // If student is not stored in the map, add the student to the map
        if (!map.has(student)) {
            map.set(student, grades);
        } else {
            // If the student exist in the map
            let oldGrades = map.get(student);
            // Update the student
            map.set(student, [...oldGrades, ...grades]);
        }
    });

    // sorting map
    let mapArr = Array.from(map);
    mapArr.sort((a, b) => average(a[1], b[1]));

    // Iteration to print
    mapArr.forEach(item => {
        console.log(`${item[0]}: ${item[1].join(', ')}`);
    });
}

function average(a, b) {
    let sumA = 0;
    let sumB = 0;

    a.forEach(grade => {
        sumA += grade;
    });

    b.forEach(grade => {
        sumB += grade;
    });

    return (sumA / a.length) - (sumB / b.length);
}

main(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
