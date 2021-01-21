let team = new Map([
    ['John', 13],
    ['Mike', 5],
    ['Clark', 12],
    ['Alex', 9],
]);

let teamArr = Array.from(team.entries()); // sorts by numbers
teamArr.sort((a, b) => a[1] - b[1]);
console.log(teamArr);