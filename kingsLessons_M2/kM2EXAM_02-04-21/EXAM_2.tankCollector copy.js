function main(ownedTanks, numOfCommands, commands) {
    ownedTanks = ownedTanks.split(', ');
    commands.forEach((command) => {
        let [action, tankOrIndex, tank] = command.split(', ');
        let findTank = ownedTanks.indexOf(tankOrIndex);
        switch (action) {
            case 'Add':
                if (findTank !== -1) {
                    console.log(`Tank is already bought`);
                } else {
                    console.log(`Tank successfully bought`);
                    ownedTanks.push(tankOrIndex);
                }
                break;
            case 'Remove':
                if (findTank !== -1) {
                    console.log(`Tank successfully sold`);
                    ownedTanks.splice(findTank, 1);
                } else {
                    console.log(`Tank not found`);
                }
                break;
            case 'Remove At':
                if (tankOrIndex >= ownedTanks.length || tankOrIndex <= 0 || ownedTanks.length === 0) {
                    console.log(`Index out of range`);
                } else if (tankOrIndex < ownedTanks.length) {
                    ownedTanks.splice(tankOrIndex, 1);
                    console.log(`Tank successfully sold`);
                } else {
                    console.log(`Tank not found`);
                }
                break;
            case 'Insert':
                if (tankOrIndex >= ownedTanks.length || tankOrIndex <= 0 || ownedTanks.length === 0) {
                    console.log(`Index out of range`);
                } else if (tankOrIndex < ownedTanks.length && findTank === -1) {
                    ownedTanks.splice(tankOrIndex, 0, tank);
                    console.log(`Tank successfully bought`);
                } else if (tankOrIndex < ownedTanks.length && findTank !== -1) {
                    console.log(`Tank is already bought`);
                } else {
                    console.log(`Index out of range`);
                }
                break;
            default:
                console.log(`Error`);
                break;
        }
    });
    console.log(ownedTanks.join(', '));
}

main(`T-34-85 Rudy, SU-100Y, STG`, 3, [
    `Add, King Tiger(C)`,
    `Insert, 2, IS-2M`,
    `Remove, T-34-85 Rudy`,
]);
main(`T 34, T 34 B, T92, AMX 13 57`, 4, [
    `Add, T 34`,
    `Remove, AMX CDC`,
    `Insert, 10, M60`,
    `Remove At, 1`,
]);
