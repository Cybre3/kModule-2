function main(employeeNamesArr) {
    employeeNamesArr.forEach((employeeName) => {
        let person = {
            employeeName,
            personalNum: employeeName.length,
        };
        console.log(
            `Name: ${person.employeeName} -- Personal Number: ${person.personalNum}`
        );
    });
}

main(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
