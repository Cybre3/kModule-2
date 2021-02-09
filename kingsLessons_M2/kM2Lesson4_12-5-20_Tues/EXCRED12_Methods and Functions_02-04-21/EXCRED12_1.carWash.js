let percentValue = (a, b) => (a * (b / 100));

function main(carWashArr) {
    let percentCleaned = 0;
    let commandList = ['soap', 'water', 'vacuum cleaner', 'mud'];
    let commandPercent = [10, 20, 25, 10];
    for (let command of carWashArr) {
        let value = commandPercent[commandList.indexOf(command)];
        switch (command) {
            case 'soap':
                percentCleaned += value;
                break;
            case 'water':
            case 'vacuum cleaner':
                percentCleaned += percentValue(percentCleaned, value);
                break;
            case 'mud':
                percentCleaned -= percentValue(percentCleaned, value);
                break;
        }
    }
    console.log(`The car is ${percentCleaned.toFixed(2)}% clean.`);
}

main(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
