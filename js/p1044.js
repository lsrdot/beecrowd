function main(lines) {
  const [a, b] = lines[0].trim().split(" ").map(Number);
  const ehMultiplo = a % b === 0 || b % a === 0;
  if (ehMultiplo) console.log("Sao Multiplos");
  else console.log("Nao sao Multiplos");
}

main(lines);
