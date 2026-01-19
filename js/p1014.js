

function main(lines) {
    const distanceKm = Number(lines[0].trim()).toFixed(0);
    const fuel = Number(lines[1].trim());
    console.log(`${(distanceKm / fuel).toFixed(3)} km/l`);
}

main(lines);