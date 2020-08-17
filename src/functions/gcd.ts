/**
 * @function gcd(e: number, t: number): number
 * @author Barış DEMIRCI
 * @description e ve t'nin EBOB'unu verir.
 * @param {Number} e EBOB'u alınacak ilk sayı
 * @param {Number} t EBOB'u alınacak ikinci sayı
 * @returns {Number} e ve t'nin EBOB'u
 */
function gcd(e: number, t: number): number {
    for (e = Math.abs(e), t = Math.abs(t); t; ) {
        const n = t;
        (t = e % t), (e = n);
    }
    return e;
}
export default gcd;
