function main(accountArr) {
  let accountGames = accountArr[0].split(' ');

  for (let i = 1; i < accountArr.length; i++) {
    const game = [];
    let start = 0;
    switch (accountArr[i]) {
      case accountArr[i].includes('Install'):
        start = 'Install'.length + 1;
        for (j = start; j < accountArr[i].length; j++) {
          game.push(i);
        }
        accountGames.push(game);
        break;

      case accountArr[i].includes('Uninstall'):
        start = 'Uninstall'.length + 1;
        for (j = start; j < accountArr[i].length; j++) {
          game.push(i);
        }
        accountGames.splice(game, 1);
        break;

      case accountArr[i].includes('Update'):
        start = 'Update'.length + 1;
        for (j = start; j < accountArr[i].length; j++) {
          game.push(i);
        }
        accountGames.push(game);
        break;

      case accountArr[i].includes('Expansion'):
        start = 'Expansion'.length + 1;
        for (j = start; j < accountArr[i].length; j++) {
          game.push(i);
        }
        accountGames.includes(game, `${game} ${game}:Go}`);
        break;
    }
  }
  console.log(accountGames);
}

main([
  'CS WoW Diablo',
  'Install LoL',
  'Uninstall WoW',
  'Update Diablo',
  'Expansion CS-Go',
  'Play!',
]);

// const commandList = accountArr[i].split(' ');
// const command = commandList[0];
