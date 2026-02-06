

function main(lines) {
  const [a, b, c] = lines[0].trim().split(" ").map((char) => Number(char)); // my previous solutions were using trim() inside the map which was useless
  
  const delta = b ** 2 - 4 * a * c;

  if (a === 0 || delta < 0) {
    console.log("Impossivel calcular");
  } else {

    const x1 = (-b + (delta ** .5)) / (2 * a);
    const x2 = (-b - (delta ** .5)) / (2 * a);

    console.log(`R1 = ${x1.toFixed(5)}`);
    console.log(`R2 = ${x2.toFixed(5)}`);
  }
}


main(lines);
