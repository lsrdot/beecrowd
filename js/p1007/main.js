

function main(lines) {
  const [a, b, c, d] = [Number(lines[0]), Number(lines[1]), Number(lines[2]), Number(lines[3])];
  const diferenca = a * b - c * d;
  console.log(`DIFERENCA = ${Math.trunc(diferenca)}`);
}

main(lines);
