/**
 * @function minSub(e: number, n: number, u: number): number
 * @author Barış DEMIRCI
 * @description e'den n'yi çıkarır ama asla u'nun altına düşmez
 * @param {Number} e eksilen sayı
 * @param {Number} n çıkan sayı
 * @param {Number} u alt sınır
 * @returns {Number} e'den n'nin çıkarılmış hali
 */
function minSub(e: number, n: number, u: number): number {
    return Math.max(e - n, u);
}
export default minSub;
