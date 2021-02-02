function main(removeWord, confusedString){

    while(confusedString.includes(removeWord)){
        confusedString = confusedString.replace(removeWord, '');
    }

    console.log(confusedString);
}
main('ice', 'kicegiciceeb');
main('abc', 'tabctqw');
main('key', 'keytextkey');
main('word', 'wordawordbwordc');