function main(lines) {
  const [code, quant] = lines[0]
    .trim()
    .split(" ")
    .map((n) => Number(n));

  switch (true) {
    case code === 1:
      console.log(`Total: R$ ${(quant * 4.0).toFixed(2)}`);
      break;
    case code === 2:
      console.log(`Total: R$ ${(quant * 4.5).toFixed(2)}`);
      break;
    case code === 3:
      console.log(`Total: R$ ${(quant * 5.0).toFixed(2)}`);
      break;
    case code === 4:
      console.log(`Total: R$ ${(quant * 2.0).toFixed(2)}`);
      break;
    case code === 5:
      console.log(`Total: R$ ${(quant * 1.5).toFixed(2)}`);
      break;
  }
}

main(lines);
