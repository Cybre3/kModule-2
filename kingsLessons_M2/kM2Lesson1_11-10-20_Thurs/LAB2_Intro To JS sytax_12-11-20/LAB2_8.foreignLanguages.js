/* 
prints the language, that a given country speaks. 
You can receive only the following combinations: 
    English is spoken in England and USA; 
    Spanish is spoken in Spain, 
    Argentina and Mexico; 
    
    for the others, we should print "unknown".
    
    Input
        You will receive a single country name. 
        
    Output
        Print the language, which the country speaks, 
        or if it is unknown for your program, 
            print "unknown". 
*/

function main(country) {
    let language = '';
    let countryUP = country.toUpperCase();

    switch(countryUP) {
        case 'USA':
        case 'ENGLAND':
            language = 'English';
            break;
        case 'SPAIN':
        case 'ARGENTINA':
        case 'MEXICO':
            language = 'Spanish';
            break;
        default:
           console.log('unknown');
           break;
    }

    console.log(`${language}`);
}

main('USA');
main('Germany');