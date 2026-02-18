function main(lines) {
    const [start, end] = lines[0].trim().split(" ").map(Number);
    let currentTime = start;
    let time = 0;

    do {
        currentTime++;
        if (currentTime > 23) currentTime = 0;
        time++;
    } while (currentTime !== end);
    console.log(`O JOGO DUROU ${time} HORA(S)`);
}


main(lines);