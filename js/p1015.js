

function main(lines) {
    const [x1, y1] = lines[0].split(' ').map(str => Number(str.trim()));
    const [x2, y2] = lines[1].split(' ').map(str => Number(str.trim()));
    const distance =  ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** .5;
    console.log(distance.toFixed(4));
}


main(lines);