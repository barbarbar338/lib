function average(...numbers: number[]): number {
    const total = numbers.reduce((a, i) => a + i, 0);
    return total / numbers.length;
}
