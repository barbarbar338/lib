function randomArbitrary(r: number, a: number): number {
    return (
        Math.floor(Math.random() * (Math.floor(a) - Math.ceil(r) + 1)) +
        Math.ceil(r)
    );
}
