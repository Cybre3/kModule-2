// let user1 = {
//     name: 'Mike',
//     userName: 'Mike2002',
//     password: '12345'
// };

// console.log(user1.userName);
// let user2 = {
//     name: 'John',
//     userName: 'John2002',
//     password: '54566'
// };

// console.log(user2.password);

let user3 = {};

user3['name'] = 'Susan';
user3.password = 'password123';

let key = 'name';

console.log(user3.password); // when you know exactly what you are accessing
console.log(user3['name']); // when you do not know what you are accessing
console.log(user3.key);
