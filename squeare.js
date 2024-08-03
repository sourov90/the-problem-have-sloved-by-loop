for (let number = 1; number <= 100; number++) {
    if (Math.sqrt(number) % 1 === 0) {
        console.log(`Encountered the first square number: ${number}`);
        break;
    }
}
