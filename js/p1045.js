function main(lines) {
  let [a, b, c] = lines[0].trim().split(" ").map(Number);
  if (a < b) [a, b] = [b, a];
  if (a < c) [a, c] = [c, a];
  if (b < c) [b, c] = [c, b];

  if (a >= b + c) {
    console.log("NAO FORMA TRIANGULO");
    return;
  }

  if (a ** 2 === b ** 2 + c ** 2) console.log("TRIANGULO RETANGULO");
  if (a ** 2 > b ** 2 + c ** 2) console.log("TRIANGULO OBTUSANGULO");
  if (a ** 2 < b ** 2 + c ** 2) console.log("TRIANGULO ACUTANGULO");
  if (a === b && b === c) {
    console.log("TRIANGULO EQUILATERO");
  } else if (a === b || a === c || b === c) {
    console.log("TRIANGULO ISOSCELES");
  }
}

main(lines);
