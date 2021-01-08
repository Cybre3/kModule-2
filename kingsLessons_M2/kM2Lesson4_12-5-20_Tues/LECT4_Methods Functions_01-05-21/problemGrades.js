let gradeStatus = function(grade) {
  if (grade > 2 && grade < 2.99) {
    console.log('Fail');
  } else if (grade > 3 && grade < 3.49) {
    console.log('Poor');
  } else if (grade > 3.5 && grade < 4.49) {
    console.log('Good');
  } else if (grade > 4.5 && grade < 5.49) {
    console.log('Very good');
  } else if (grade > 5.5 && grade < 6) {
    console.log('Excellent');
  } else {
    console.log('Error');
  }
};

gradeStatus(3.6);