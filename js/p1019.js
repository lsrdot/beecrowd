

function main(lines) {
    let input = Number(lines[0].trim());
    let minutes = 0;
    let hours = 0;
    for (;input;) {
        if (input - 60 >= 0) {
            input -= 60;
            minutes++;
        }
        else if (minutes > 59) {
            hours++;
            minutes -= 60;
        }
        else {
            break;
        }
    }
    console.log(`${hours}:${minutes}:${input}`);
}


main(lines);