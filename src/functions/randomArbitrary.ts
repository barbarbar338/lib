/**
 * @function permutations(e: number, r: number): number
 * @author Barış DEMIRCI
 * @description belirttiğiniz iki sayı arasından rastgele bir sayı seçer
 * @param {Number} r alt sınır
 * @param {Number} a üst sınır
 * @returns {Number} r ve a arasında rastgele bir sayı
 */
function randomArbitrary(r: number, a: number): number {
    return (
        Math.floor(Math.random() * (Math.floor(a) - Math.ceil(r) + 1)) +
        Math.ceil(r)
    );
}
export default randomArbitrary;
