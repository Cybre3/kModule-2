let players = ['Mike', 'John', 'Sam', 'Alex'];

// Object
let player = {
    name: 'Mike',
    number: 'One',
    age: 26
};

// console.log(player['age']); // 26
// console.log(player.age); // 26

// Associative Array
let team = {
    'Mike Smith': 'One',
    'John': 'Two',
    'Sam': 'Three',
    'Alex': 'Four'
};

let PlayerNumTwo = 'John';
let johnNum = team[PlayerNumTwo];
console.log(johnNum);
// let num = team['Mike Smith'];
// console.log(team['Mike Smith']); // One