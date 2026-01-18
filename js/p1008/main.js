

function main(lines) {
   const [id, workedHours, hourlyPay] = [Number(lines[0]), Number(lines[1]), Number(lines[2])];
   const salary = workedHours * hourlyPay;
   console.log(`NUMBER = ${id}`);
   console.log(`SALARY = U$ ${salary.toFixed(2)}`);
}

main([25, 100, 5.5]);