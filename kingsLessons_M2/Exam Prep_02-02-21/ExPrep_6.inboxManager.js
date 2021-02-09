function main(arr) {
    let map = new Map();
    let [command, name, message] = arr.shift().split('->');

    while (command !== 'Statistics') {
        switch (command) {
            case 'Add':
                if (map.get(name)) {
                    console.log(`${name} is already registered`);
                } else {
                    map.set(name, []);
                }
                break;
            case 'Send':
                if (!map.get(name)) {
                    console.log(`${name} is not registered`);
                } else {
                    map.get(name).push(message);
                }
                break;
            case 'Delete':
                if (!map.has(name)) {
                    console.log(`${name} not found!`);
                } else {
                    map.delete(name);
                }
                break;
        }
        [command, name, message] = arr.shift().split('->');
    }

    let outputArr = Array.from(map);
    outputArr.sort((a, b) => (b[1].length - a[1].length || a[0].localeCompare(b[0])));
    console.log(`Users count: ${outputArr.length}`);

    outputArr.forEach(([name, msgs]) => {
        console.log(name);
        if (msgs.length > 0) {
            msgs = msgs.map(msg => ` - ${msg}`);
            console.log(msgs.join('\n'));
        }
    });
}

main([
    `Add->Mike`,
    `Add->George`,
    `Send->George->Hello World`,
    `Send->George->Some random test mail`,
    `Send->Mike->Hello, do   you   want   to   meet   up   tomorrow?`,
    `Send->George->It would be a pleasure`,
    `Send->Mike->Another random test mail`,
    `Statistics`,
]);
main([
    `Add->Mike`,
    `Add->George`,
    `Send->George->Hello World`,
    `Send->George->Your loan is overdue`,
    `Add->Mike`,
    `Send->Mike->Hello, do you want to meet up tomorrow?`,
    `Delete->Peter`,
    `Send->George->I'm busy`,
    `Send->Mike->Another random test mail`,
    `Delete->George`,
    `Statistics`,
]);
