function main(firstName, lastNme, hairColor) {

    let personData = {
        firstName: firstName,
        lastName: lastNme,
        hairColor: hairColor
    };
    
    let jsonObject = JSON.stringify(personData);

    console.log(jsonObject);
}

main('George','Jones','Brown');


// function main(firstName, lastName, hairColor) {
//         let person = {};
//         // person['firstName'] = firstName;
//         // person['lastName'] = lastName;
//         // person['hairColor'] = hairColor;

//         // 2nd way to declare
//         person.firstName = firstName;
//         person.lastName = lastName;
//         person.hairColor = hairColor;
    
//         let jSON = JSON.stringify(person);
    
//     console.log(jSON);
// }



main('George',
    'Jones',
    'Brown');
