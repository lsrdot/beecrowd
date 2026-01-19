

function main(lines) {
    let input = Number(lines[0].trim());
    const aux = input;
    let hBill, fitBill, tweBill, tBill, fBill, twoBill, oBill;
    hBill = fitBill = tweBill = tBill = fBill = twoBill = oBill = 0;

    for (;input;) {
        if (input >= 100) {
            hBill++;
            input -= 100;
        } else if (input >= 50) {
            fitBill++;
            input -= 50;
        } else if (input >= 20) {
            tweBill++;
            input -= 20
        } else if (input >= 10) {
            tBill++;
            input -= 10;
        } else if (input >= 5) {
            fBill++;
            input -= 5;
        } else if (input >= 2 ) {
            twoBill++;
            input -= 2;
        } else if (input >= 1) {
            oBill++;
            input -= 1
        }
    }

    console.log(aux);
    console.log(`${hBill} nota(s) de R$ 100,00`);
    console.log(`${fitBill} nota(s) de R$ 50,00`);
    console.log(`${tweBill} nota(s) de R$ 20,00`);
    console.log(`${tBill} nota(s) de R$ 10,00`);
    console.log(`${fBill} nota(s) de R$ 5,00`);
    console.log(`${twoBill} nota(s) de R$ 2,00`);
    console.log(`${oBill} nota(s) de R$ 1,00`);

}


main(lines);