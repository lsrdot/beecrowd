function main(lines) {
  const [x, y] = lines[0].trim().split(" ").map(Number);

  switch (true) {
    case x === 0 && y === 0:
      console.log("Origem");
      break;

    case y === 0:
      console.log("Eixo X");
      break;

    case x === 0:
      console.log("Eixo Y");
      break;

    case x > 0 && y > 0:
      console.log("Q1");
      break;

    case x < 0 && y > 0:
      console.log("Q2");
      break;

    case x < 0 && y < 0:
      console.log("Q3");
      break;

    case x > 0 && y < 0:
      console.log("Q4");
      break;
  }
}

main(lines);
