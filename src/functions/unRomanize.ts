const numerals: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1e3,
};

/**
 * @function unRomanize(e: string): number
 * @author Barış DEMIRCI
 * @description belirttiğiniz roman rakamları ile yazılan sayıyı normal rakamlar ile yazar
 * @param {String} e roman rakamları ile yazılmış sayı
 * @returns {Number} normal rakamlar ile yazılmış sayı
 */
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
export default unRomanize;
