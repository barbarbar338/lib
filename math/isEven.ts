function isEven(e: number): boolean {
    return !isOdd(e);
}

function isOdd(e: number): boolean {
    return !!(1 & e);
}
