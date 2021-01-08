// function grader(grade) {
//     if (grade >= 2 && grade <= 2.99) {
//         return 'Fail';
//       } else if (grade >= 3 && grade <= 3.49) {
//         return 'Poor';
//       } else if (grade >= 3.5 && grade <= 4.49) {
//         return 'Good';
//       } else if (grade >= 4.5 && grade <= 5.49) {
//         return 'Very Good';
//       } else if (grade >= 5.5 && grade <= 6) {
//         return 'Excellent';
//       } else {
//         return 'Error';
//       }
// }

// function main(inputGrade) {
//     let gradeChecker = grader(inputGrade);
//     console.log(gradeChecker);
// }

// main(3.33);
// main(4.5);
// main(2.99);

function checkGrade(grade) {
    let lowerLimitArr = [2.0, 3.0, 3.5, 4.5, 5.5];
    let upperLimitArr = [2.99, 3.49, 4.49, 5.49, 6.0];
    let grades = ['Fail', 'Poor', 'Good', 'Very Good', 'Excellent'];

    for(let i in grades) {
        if (grade >= lowerLimitArr[i] && grade <= upperLimitArr[i]) {
            return grades[i];
        }
    }
}

function main(inputGrade) {
    let gradeChecker = checkGrade(inputGrade);
    console.log(gradeChecker);
}

main(3.33);
main(4.5);
main(2.99);