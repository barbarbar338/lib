function lcm(e: number, c: number): number {
    return e && c ? Math.abs((e * c) / gcd(e, c)) : 0;
}

function gcd(e: number, t: number): number {
    for (e = Math.abs(e), t = Math.abs(t); t; ) {
        const n = t;
        (t = e % t), (e = n);
    }
    return e;
}