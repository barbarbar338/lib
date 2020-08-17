/**
 * @function factorial(n: number): number
 * @author Barış DEMIRCI
 * @description n sayısnın faktöriyelini hesaplar
 * @param {Number} n faktöriyeli hesaplanacak sayı
 * @returns {Number} n sayısının faktöriyeli
 */
function factorial(n: number): number {
    return n <= 1 ? 1 : factorial(n - 1) * n;
}
export default factorial;
