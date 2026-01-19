const PI = 3.14159


function main(lines) {
    let input = lines[0].split(' ');
    const [a, b, c] = parseDouble(input);
    const triangle = .5 * a * c;
    const circle = PI * c ** 2;
    const trapezio = ((a + b) * c) / 2;
    const square = b ** 2;
    const rectangle = a * b;

    console.log(`TRIANGULO: ${triangle.toFixed(3)}`);
    console.log(`CIRCULO: ${circle.toFixed(3)}`);
    console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
    console.log(`QUADRADO: ${square.toFixed(3)}`);
    console.log(`RETANGULO: ${rectangle.toFixed(3)}`);
}


main(lines);


function parseDouble(arr) {
    let aux = [];
    for (let n of arr)
        aux.push(Number(n.trim()));
    return [
        ...aux
    ];
}