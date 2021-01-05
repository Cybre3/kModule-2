function main(string, symbol, result) {

    let newString = string.replace('_', symbol);

    if(newString === result){
        console.log('Matched');
    } else{
        console.log('Not Matched');
    }
}

main('Str_ng', 'I', 'Strong');
main('Str_ng', 'i', 'String');

function main1(string, symbol, result) {

    let newString = string.replace('_', symbol);
    let output = newString === result? 'Matched' : 'Not Matched';


    if(newString === result){
        console.log('Matched');
    } else{
        console.log('Not Matched');
    }
}

main1('Str_ng', 'I', 'Strong');
main1('Str_ng', 'i', 'String');