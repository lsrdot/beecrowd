function main(lines) {
  const [n1, n2, n3, n4] = lines[0]
    .trim()
    .split(" ")
    .map((n) => Number(n));
  const media = (n1 * 2 + n2 * 3 + n3 * 4 + n4) / (2 + 3 + 4 + 1);
  const mensagem =
    media >= 7
      ? "Aluno aprovado."
      : media < 7 && media >= 5
        ? "Aluno em exame."
        : "Aluno reprovado.";
  console.log(`Media: ${media.toFixed(1)}`);
  console.log(mensagem);

  if (mensagem === "Aluno em exame.") {
    const n5 = Number(lines[1].trim());
    console.log(`Nota do exame: ${n5.toFixed(1)}`);
    const mediaFinal = (media + n5) / 2;
    mediaFinal >= 5
      ? console.log("Aluno aprovado.")
      : console.log("Aluno reprovado.");
    console.log(`Media final: ${mediaFinal.toFixed(1)}`);
  }
}

main(lines);
