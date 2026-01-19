

function main(lines) {
    const input = lines[0].split(' ').map((str) => Number(str.trim()));
    const [a, b, c] = input;
    const maiorAB = (a + b + Math.abs(a - b)) / 2;
    const result = (maiorAB + c + Math.abs(maiorAB - c)) / 2;
    console.log(`${result.toFixed(0)} eh o maior`);
}


main(lines);