/**
 * @function distance(x1: number, y1: number, x2: number, y2: number): number
 * @author Barış DEMIRCI
 * @description koordinatları belirtilen iki noktanın arasındaki uzaklığı hesaplar
 * @param {Number} x1 kümedeki eleman sayısı
 * @param {Number} y1 oluşturulacak gruplardaki eleman sayısı
 * @param {Number} x2 kümedeki eleman sayısı
 * @param {Number} y2 oluşturulacak gruplardaki eleman sayısı
 * @returns {Number} koordinatları belirtilen iki nokta arasındaki uzaklık
 */
function distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}
export default distance;
