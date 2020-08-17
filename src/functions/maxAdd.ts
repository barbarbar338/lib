/**
 * @function maxAdd(e: number, d: number, a: number): number
 * @author Barış DEMIRCI
 * @description e ile d'yi toplar ama asla a'yı geçmez
 * @param {Number} e toplanacak ilk sayı
 * @param {Number} d toplanacak ikinci sayı
 * @param {Number} a üst sınır
 * @returns {Number} e ile d'nin toplanmış hali
 */
function maxAdd(e: number, d: number, a: number): number {
    return Math.min(e + d, a);
}
export default maxAdd;
