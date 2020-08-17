const numerals: Record<string, number> = {
    M: 1e3,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};
let cache: unknown;
let res = "";

/**
 * @function romanize(e: number): string
 * @author Barış DEMIRCI
 * @description belirttiğiniz sayıyı roman rakamları ile yazar
 * @param {Number} e roman rakamları ile yazılacak sayı
 * @returns {String} roman rakamları ile yazılmış sayı
 */
function romanize(e: number): string {
    const r = Object.keys(numerals);
    let t = "";
    for (let n = 0; n < r.length; n++)
        (t += repeatLetter(r[n], (e / numerals[r[n]]) >>> 0)),
            (e %= numerals[r[n]]);
    return t;
}

/**
 * @function repeatLetter(e: string, r: number): string
 * @author Barış DEMIRCI
 * @description belirttiğiniz harfi belirttiğiniz sayı kadar yazar
 * @param {String} e tekrarlanacak harf
 * @param {Number} r tekrar sayısı
 * @returns {String} berlittiğiniz miktar kadar tekrarlanmış harf
 */
function repeatLetter(e: string, r: number): string {
    if (1 === r) return e;
    if (2 === r) return e + e;
    const t = e.length * r;
    if (cache !== e || void 0 === cache) (cache = e), (res = "");
    else if (res.length >= t) return res.substr(0, t);
    for (; t > res.length && r > 1; ) 1 & r && (res += e), (r >>= 1), (e += e);
    return (res = (res += e).substr(0, t));
}
export default romanize;
