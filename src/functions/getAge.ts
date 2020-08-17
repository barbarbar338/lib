/**
 * @function getAge(e: string): number
 * @author Barış DEMIRCI
 * @description Verilen tarihin kaç yıl önce olduğunu hesaplar
 * @param {String} e Kaç yıl önce olduğu merak edilen tarih
 * @returns {Number} Verilen tarihin yıl gün önce olduğu
 */
function getAge(e: string): number {
    const t = new Date(),
        g = new Date(e),
        n = t.getUTCMonth() - g.getUTCMonth();
    let a = t.getUTCFullYear() - g.getUTCFullYear();
    return (n < 0 || (0 === n && t.getUTCDate() < g.getUTCDate())) && a--, a;
}
export default getAge;
