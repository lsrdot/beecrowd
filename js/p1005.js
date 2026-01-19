function problema1005(lines) {
  const pesoA = 3.5;
  const pesoB = 7.5;

  let [a, b] = lines;
  a = Number(a);
  b = Number(b);
  const media = (a * pesoA + b * pesoB) / (pesoA + pesoB);
  console.log(`MEDIA = ${media.toFixed(5)}`);
}

problema1005(lines);
