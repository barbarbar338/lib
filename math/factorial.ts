function factorial(n: number): number {
    return n <= 1 ? 1 : factorial(n - 1) * n;
}
