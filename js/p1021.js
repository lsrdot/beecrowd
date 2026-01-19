

function main(lines) {
    // let input = Number(lines[0].trim());
    
    // const hundos = Math.floor(input / 100);
    // input %= 100;
    // const fifties = Math.floor(input / 50);
    // input %= 50;
    // const twenties = Math.floor(input / 20);
    // input %= 20;
    // const tens = Math.floor(input / 10);
    // input %= 10;
    // const fives = Math.floor(input / 5);
    // input %= 5;
    // const twos = Math.floor(input / 2);
    // input %= 2;
    // const dollah = Math.floor(input / 1);
    // input %= 1;
    // const fiftyC = Math.floor(input / .5);
    // input %= .5;
    // const tFive = Math.floor(input / .25);
    // input %= .25;
    // const tenC = Math.floor(input / .1);
    // input %= .1;
    // const fiveC = Math.floor(input / .05);
    // input %= .05;
    // const oCent = Math.floor(input); breaks cause of floating point numbers;
    
    let input = Math.round(Number(lines[0]) * 100); 
    const hundos = Math.floor(input / 10000);
    input %= 10000;
    const fifties = Math.floor(input / 5000);
    input %= 5000;
    const twenties = Math.floor(input / 2000);
    input %= 2000;
    const tens = Math.floor(input / 1000);
    input %= 1000;
    const fives = Math.floor(input / 500);
    input %= 500;
    const twos = Math.floor(input / 200);
    input %= 200;
    const dollah = Math.floor(input / 100);
    input %= 100;
    const fiftyC = Math.floor(input / 50);
    input %= 50;
    const tFive = Math.floor(input / 25);
    input %= 25;
    const tenC = Math.floor(input / 10);
    input %= 10;
    const fiveC = Math.floor(input / 5);
    input %= 5;
    const oCent = input;

    console.log('NOTAS:');
    console.log(`${hundos} nota(s) de R$ 100.00`);
    console.log(`${fifties} nota(s) de R$ 50.00`);
    console.log(`${twenties} nota(s) de R$ 20.00`);
    console.log(`${tens} nota(s) de R$ 10.00`);
    console.log(`${fives} nota(s) de R$ 5.00`);
    console.log(`${twos} nota(s) de R$ 2.00`);
    console.log("MOEDAS:");
    console.log(`${dollah} moeda(s) de R$ 1.00`);
    console.log(`${fiftyC} moeda(s) de R$ 0.50`);
    console.log(`${tFive} moeda(s) de R$ 0.25`);
    console.log(`${tenC} moeda(s) de R$ 0.10`);
    console.log(`${fiveC} moeda(s) de R$ 0.05`);
    console.log(`${oCent} moeda(s) de R$ 0.01`);
} 


main(lines);