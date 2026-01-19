

function main(lines) {
    let input = Number(lines[0].trim());
    const years = Math.floor(input / 365);
    input %= 365;
    const months = Math.floor(input / 30);
    input %= 30;

    console.log(`${years} ano(s)`);
    console.log(`${months} mes(es)`);
    console.log(`${input} dia(s)`);
}


main(lines);