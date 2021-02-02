function main(string, startIndex, count) {

    string = string.substr(startIndex, count);
    console.log(string);
}

main("ASentance", 1, 8);
main("JavaScript", 4, 6);
