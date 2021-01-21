// function main(input) {
//   let wagons = input
//     .shift()
//     .split(' ')
//     .map((x) => Number(x)); //get the wagons (the first element of the array)
//   let max = Number(input.shift()); // max for each wagon in the train
//   for (let i = 0; i < input.length; i++) {
//     let arrNew = input[i].split(' '); //split the input array
//     let command = arrNew[0]; //get the command
//     let firstValue = arrNew[1]; //get the first value
//     if (command === 'Add') {
//       //if the command has “add”
//       wagons.push(firstValue); //adds the wagon at the end of the array
//     } else {
//       let passengers = Number(arrNew[0]); //get the passsengers
//       for (let j = 0; j < wagons.length; j++) {
//         if (passengers + wagons[j] <= max) {
//           wagons[j] += passengers; //add passengers to an existing wagon
//           break;
//         }
//       }
//     }
//   }
//   console.log(wagons.join(' '));
// }

main(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
main(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);


function main(arr) {
  // Get the first item 'String' convert it to array usin split and turn the items to numbers
  let wagonsArr = arr.shift().split(' ').map(Number);
  // Get the second item max wagons capacity using shift and convert it to number
  let maxCap = +arr.shift();

  // Iterate through the commands
  arr.forEach((command) => {
      // Check if the command has Add prefix
      if (command.split(' ')[0] == 'Add') {
          // if so get the second part of the command and convert it to number
          wagonsArr.push(+command.split(' ')[1]);
      } else {
          //else convert the command to number
          command = Number(command);
          // get empty wagons array
          let emptyWagonsArr = wagonsArr.filter((item) => item + command <= maxCap);
          //get the first empty wagon 
          let firstEmprtyWagon = emptyWagonsArr[0];
          // get its index
          let emptyWagonIndex = wagonsArr.indexOf(firstEmprtyWagon);
          //update its value using its index 
          wagonsArr[emptyWagonIndex] = wagonsArr[emptyWagonIndex] + command;
      }
  });

  console.log(wagonsArr.join(' '));
}