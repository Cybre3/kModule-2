function main(employeeNamesArr) {
    employeeNamesArr.forEach((employeeName) => {
        let person = {
            employeeName,
            personalNum: employeeName.length
        };
        console.log(`Name: ${person.employeeName} -- Personal Number: ${person.personalNum}`);
    });

    // for(let name in employeeNamesArr){
        
    // }
}

main(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);