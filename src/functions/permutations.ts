import factorial from "./factorial";

/**
 * @function permutations(e: number, r: number): number
 * @author Barış DEMIRCI
 * @description e'nin r elemanlı permütasyonlarını hesaplar
 * @param {Number} e kümedeki eleman sayısı
 * @param {Number} n grup eleman sayısı
 * @returns {Number} e'nin r elemanlı permütasyon sayısı
 */
function permutations(e: number, r: number): number {
    return factorial(e) / factorial(e - r);
}
export default permutations;
