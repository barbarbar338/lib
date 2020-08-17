/**
 * @function area(a: number, b: number, c: number): number
 * @author Barış DEMIRCI
 * @description verilen üç uzunluktan oluşan bir üçgenin alanını hesaplar
 * @param {Number} a a kenarı
 * @param {Number} b b kenarı
 * @param {Number} c c kenarı
 * @returns {Number} abc üçgeninin alanı
 */
function area(a: number, b: number, c: number): number {
    return Math.sqrt(
        ((a + b + c) / 2) *
            (((a + b + c) / 2 - a) *
                ((a + b + c) / 2 - b) *
                ((a + b + c) / 2 - c)),
    );
}
export default area;
