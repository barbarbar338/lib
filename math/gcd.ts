function gcd(e: number, t: number): number {
    for (e = Math.abs(e), t = Math.abs(t); t; ) {
        const n = t;
        (t = e % t), (e = n);
    }
    return e;
}
