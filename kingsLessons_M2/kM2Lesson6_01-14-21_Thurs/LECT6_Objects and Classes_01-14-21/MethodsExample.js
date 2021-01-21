let user = {
    email: 'user@test.com',
    password: '12345', // yields 'Logged in'
    // passwors: '123456', // yields 'cannot log in'
    checkPassword() {
        if(user.password === '12345'){
            console.log(' Logged in ');
        } else {
            console.log('cannot log in');
        }
    }
};

// function checkPassword(inputUser){
//     if(inputUser.password === '12345'){
//         console.log(' Logged in ');
//     } else {
//         console.log('caanot log in');
//     }
// }

// checkPassword(user);

user.checkPassword();