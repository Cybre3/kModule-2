function main(arr) {
    // Get particles names , 1st element in array
    let particles = arr.shift().split('|');
    // Get first command in array and convert command to array
    let [command, direction, index] = arr.shift().split(' ');
    // Loop through commands
    while (command !== 'Done') {
        // Make sure that index is a number
        index = +index;

        switch (command) {
            case 'Move':
                if (direction === 'Right' && particles[index + 1]) {
                    let temp = particles[index];
                    particles[index] = particles[index + 1];
                    particles[index + 1] = temp;

                    // particles = particles
                    //     .join(',')
                    //     .replace(particles[index + 1], particles[index])
                    //     .replace(particles[index], particles[index + 1])
                    //     .split(',');
                }
                if (direction === 'Left' && particles[index - 1]) {
                    let temp = particles[index];
                    particles[index] = particles[index - 1];
                    particles[index - 1] = temp;
                }
                break;
            case 'Check':
                if (direction === 'Odd') {
                    let odd = particles.filter((particle, index) => index % 2 !== 0);
                    console.log(odd.join(' '));
                } else if (direction === 'Even') {
                    let even = particles.filter((particle, index) => index % 2 === 0);
                    console.log(even.join(' '));
                }
        }
        // Get next command
        [command, direction, index] = arr.shift().split(' ');
    }
    console.log(`You crafted ${particles.join('')}!`);
}

main([
    `ha|Do|mm|om|er`,
    `Move Right 0`,
    `Move Left 3`,
    `Check Odd  `,
    `Move Left 2`,
    `Move Left 10 `,
    `Move Left 0`,
    `Done`,
]);
