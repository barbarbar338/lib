/**
 * @function average(...numbers: number[]): number
 * @author Barış DEMIRCI
 * @description verilen numaraların ortalamasını alır
 * @param {Number[]} numbers ortalaması alınacak sayılar
 * @returns {Number} verilen numaraların ortalaması
 */
function average(...numbers: number[]): number {
    let total = 0;
    for (const n of numbers) total += +n;
    return total / numbers.length;
}
export default average;
