function combination(n: number, r: number): number {
    return factorial(n) / (factorial(n - r) * factorial(r));
}

function factorial(n: number): number {
    return n <= 1 ? 1 : factorial(n - 1) * n;
}
