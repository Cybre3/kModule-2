// function main(accountArr) {
//     const fullCommand = 'Install Lol';
//     const fullCommandArray = fullCommand.split(' ');
//     const command = fullCommandArray[0]; // Install
//     const game = fullCommandArray[1]; // Lol    
    
//     main(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go','Play!']);
// function main(inputs) {
//     let games = inputs[0].split(' ');
//     console.log(games);
//     for (let index = 0; index < inputs.length; index++) {
//         const element = inputs[index].split(' ');
//         const command = element[0];
//         const game = element[1];
//         console.log({element, game});
//         switch(command) {
//             case 'Install': // implementation
//         }
//     }
// }
// main(['CS WoW Diablo','Install LoL','Uninstall WoW','Update Diablo','Expansion CS-Go','Play!'])

const [command, ...game] = 'install wow go'.split(' ');
console.log(command, game);