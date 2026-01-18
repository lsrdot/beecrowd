

function main(lines) {
  
    let data1 = lines[0].split(' ');
    let data2 = lines[1].split(' ');

    const prod1 = createInvoice(data1);
    const prod2 = createInvoice(data2);
    console.log(`VALOR A PAGAR: R$ ${(prod1.value + prod2.value).toFixed(2)}`);
}


function createInvoice([code, quant, value]) {
    return {
        code: Number(code),
        quant: Number(quant),
        value: Number(value * quant)
    }
}


main(["12 1 5.30", "16 2 5.10"]);