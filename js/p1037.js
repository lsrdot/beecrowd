function main(lines) {
  const n = Number(lines[0].trim());

  switch (true) {
    case n >= 0 && n <= 25:
      console.log("Intervalo [0,25]");
      break;
    case n > 25 && n <= 50:
      console.log("Intervalo (25,50]");
      break;
    case n > 50 && n <= 75:
      console.log("Intervalo (50,75]");
      break;
    case n > 75 && n <= 100:
      console.log("Intervalo (75,100]");
      break;
    default:
      console.log("Fora de intervalo");
      break;
  }
}

main(lines);
