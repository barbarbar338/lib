function average(...numbers: number[]): number {
    let total = 0;
    for (const n of numbers) total += +n;
    return total / numbers.length;
}
