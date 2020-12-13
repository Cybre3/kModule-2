function main(string) {
    
    let backWord = '';

    for (let i = string.length -1; i >= 0; i--){
        backWord += string[i];
    }
        
    console.log(backWord);
}

main('Hello');
main('Kingsland');
main('12345');