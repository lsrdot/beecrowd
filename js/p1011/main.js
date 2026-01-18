

const PI = 3.14159


function main(lines) {
    const radius = Number(lines[0]);
    const volume = (4/3) * PI * radius ** 3;
    console.log(`VOLUME = ${volume.toFixed(3)}`);
}


main(lines);
