import isOdd from "./isOdd";

/**
 * @function isEven(e: number): boolean
 * @author Barış DEMIRCI
 * @description verilen sayının çift olup olmadığını kontrol eder
 * @param {Number} e kontrol edilecek sayı
 * @returns {Boolean} Çift ise true tek ise false
 */
function isEven(e: number): boolean {
    return !isOdd(e);
}
export default isEven;
