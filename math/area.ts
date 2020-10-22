function area(a: number, b: number, c: number): number {
    return Math.sqrt(
        ((a + b + c) / 2) *
        (((a + b + c) / 2 - a) *
        ((a + b + c) / 2 - b) *
        ((a + b + c) / 2 - c))
    );
}
