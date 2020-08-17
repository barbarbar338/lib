/**
 * @function isOdd(e: number): boolean
 * @author Barış DEMIRCI
 * @description verilen sayının tek olup olmadığını kontrol eder
 * @param {Number} e kontrol edilecek sayı
 * @returns {Boolean} Tek ise true çift ise false
 */
function isOdd(e: number): boolean {
    return !!(1 & e);
}
export default isOdd;
