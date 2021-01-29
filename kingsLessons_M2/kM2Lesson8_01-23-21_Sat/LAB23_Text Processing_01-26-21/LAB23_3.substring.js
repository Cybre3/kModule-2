function main(string, startIndex, count_length) {

    string = string.substr(startIndex, count_length);
    console.log(string);
}

main("ASentance", 1, 8);