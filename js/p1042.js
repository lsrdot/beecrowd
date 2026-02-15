function main(lines) {
  const [x, y, z] = lines[0].trim().split(" ").map(Number);
  let [xCopy, yCopy, zCopy] = [x, y, z];

  if (xCopy > yCopy) [xCopy, yCopy] = [yCopy, xCopy];
  if (xCopy > zCopy) [xCopy, zCopy] = [zCopy, xCopy];
  if (yCopy > zCopy) [yCopy, zCopy] = [zCopy, yCopy];

  console.log(xCopy);
  console.log(yCopy);
  console.log(zCopy);
  console.log();
  console.log(x);
  console.log(y);
  console.log(z);
}

main(lines);
