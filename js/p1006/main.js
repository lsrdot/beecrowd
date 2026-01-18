
function main(lines) {
  let peso1 = 2;
  let peso2 = 3;
  let peso3 = 5;
  const [a, b, c] = [Number(lines[0]), Number(lines[1]), Number(lines[2])];
  const media = (a * peso1 + b * peso2 + c * peso3) / (peso1 + peso2 + peso3);
  console.log(`MEDIA = ${media.toFixed(1)}`);
}

main([5.0, 6.0, 7.0]);
