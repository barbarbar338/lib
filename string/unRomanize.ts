const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1e3,
};

function unRomanize(e: string): number {
    const t = e.toUpperCase().split("");
    let n = 0,
        r = 0;
    for (; t.length; ) {
        const u = t.shift() as string;
        n += (r = numerals[u]) * (r < numerals[t[0]] ? -1 : 1);
    }
    return n;
}
