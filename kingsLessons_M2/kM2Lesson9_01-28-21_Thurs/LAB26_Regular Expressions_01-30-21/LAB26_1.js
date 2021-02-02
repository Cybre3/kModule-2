function main(names) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    
    // let validNames = [];
    
    // let validName = pattern.exec(names);
    // while(validName){
    //     validNames.push(validName);
    //     validName = pattern.exec(names);
    // }
    // console.log(validNames.join(' '));

    let validNames = names.match(pattern);
    console.log(validNames.join(' '));
}

main('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');