

function main(lines) {
    const [time, speed] = lines.map((str) => Number(str.trim()));
    console.log(`${(time * speed / 12).toFixed(3)}`);
}


main(lines);