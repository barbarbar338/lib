import gcd from "./gcd";

/**
 * @function lcm(e: number, c: number): number
 * @author Barış DEMIRCI
 * @description e ve t'nin EKOK'unu verir.
 * @param {Number} e EKOK'u alınacak ilk sayı
 * @param {Number} t EKOK'u alınacak ikinci sayı
 * @returns {Number} e ve t'nin EKOK'u
 */
function lcm(e: number, c: number): number {
    return e && c ? Math.abs((e * c) / gcd(e, c)) : 0;
}
export default lcm;
