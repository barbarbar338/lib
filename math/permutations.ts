function permutations(e: number, r: number): number {
    return factorial(e) / factorial(e - r);
}

function factorial(n: number): number {
    return n <= 1 ? 1 : factorial(n - 1) * n;
}
