function main(radius, height) {
    let pi = 3.14159265359;
    let volume = pi * (radius * radius) * (height / 3);
    let surfaceArea = pi * radius * (radius + (Math.sqrt((height * height) + (radius * radius))));
    
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}

main(3, 5);
main(3.3, 7.8);