import factorial from "./factorial";

/**
 * @function combination(n: number, r: number): number
 * @author Barış DEMIRCI
 * @description n elemanlı bir kümenin r adet elemanlarıyla grup oluşturur.
 * @param {Number} n kümedeki eleman sayısı
 * @param {Number} r oluşturulacak gruplardaki eleman sayısı
 * @returns {Number} oluşturulabilecek grup sayısı
 */
function combination(n: number, r: number): number {
    return factorial(n) / (factorial(n - r) * factorial(r));
}
export default combination;
