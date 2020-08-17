/**
 * @function toHumanizeString(e: number): string
 * @author Barış DEMIRCI
 * @description belirttiğiniz sayıyı daha kolay okunur hale getirir
 * @param {Number} e okunaklı hale getirilecek sayı
 * @returns {String} roman rakamları ile yazılmış sayı
 */
function toHumanizeString(e: number): string {
    /*
        eski sürüm: return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        yeni sürüm için C4Navar#9817'a teşekkürler (https://github.com/CanCodes)
    */
    return new Intl.NumberFormat().format(e);
}
export default toHumanizeString;
