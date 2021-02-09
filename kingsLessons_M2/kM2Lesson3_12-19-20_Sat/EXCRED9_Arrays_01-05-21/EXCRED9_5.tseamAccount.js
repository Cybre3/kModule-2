function main(accountArr) {
    const accountGames = accountArr.shift().split(' ');
    let command = accountArr.shift();
    let game = '';

    while (command !== 'Play!') {
      command = command.split(' ');
      const toDo = command[0];
      let game = command[1];
        switch(toDo){
          case 'Install':
            if(!accountGames.includes(game)){
            accountGames.push(game);
            }
            break;
          case 'Uninstall':
            if(accountGames.includes(game)){
              accountGames.splice(accountGames.indexOf(game), 1);
            }
            break;
          case 'Update':
            if(accountGames.includes(game)){
              accountGames.splice(accountGames.indexOf(game), 1);
              accountGames.push(game);          
            }
            break;
          case 'Expansion':
            game = game.split('-');
            let name = game[0];
            let expansion = game[1];
            if(accountGames.includes(name)){
              accountGames.splice(accountGames.indexOf(name), 1, `${name} ${name}:${expansion}`);
            }
        }
        command = accountArr.shift();
    }
    console.log(accountGames.join(' '));
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
