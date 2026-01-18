

function main(lines) {
    const [name, salary, sales] = [lines[0], Number(lines[1]), Number(lines[2])];
    const commission = sales * .15;
    console.log(`TOTAL = R$ ${(commission + salary).toFixed(2)}`);
}

main(['JOAO', 500.00, 1230.30]);

