

function main(lines) {

  const [a, b, c, d] = lines[0].split(" ").map((n) => Number(n.trim()));
  const isAcc = b > c && d > a  && c + d > a + b && c >= 0 && d >= 0 && a % 2 === 0;
  if (isAcc)
    console.log("Valores aceitos");
  else {
      console.log( "Valores nao aceitos");
    }
}


main(lines);
