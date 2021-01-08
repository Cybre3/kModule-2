function main(commandArr) {
  let outputArr = [];

  for (let i = 0; i < commandArr.length; i++) {
    switch (commandArr[i]) {
      case 'add':
        outputArr.push(i + 1);
        break;
      case 'remove':
        outputArr.pop();
        break;
    }
  }

  if (outputArr.length === 0) {
    console.log('Empty');
  } else {
    console.log(outputArr.join(' '));
  }
}

main(['add', 'add', 'add', 'add']);
main(['add', 'add', 'remove', 'add', 'add']);
main(['remove', 'remove', 'remove']);
