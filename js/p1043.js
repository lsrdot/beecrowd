function main(lines) {
  const [a, b, c] = lines[0].trim().split(" ").map(Number);
  if (a + b > c && a + c > b && c + b > a)
    console.log(`Perimetro = ${(a + b + c).toFixed(1)}`);
  else console.log(`Area = ${(((a + b) * c) / 2).toFixed(1)}`);
}

main(lines);
