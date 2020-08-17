/**
 * @function randomInt(n: number): number
 * @author Barış DEMIRCI
 * @description 0 ile belirttiğiniz sayı arasında bir sayı seçer
 * @param {Number} n üst sınır
 * @returns {Number} 0 ve n arasında rastgele bir sayı
 */
function randomInt(n: number): number {
    return Math.floor(Math.random() * Math.floor(n));
}
export default randomInt;
