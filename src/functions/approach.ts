/**
 * @function approach(a: number, b: number, amount: number): number
 * @author Barış DEMIRCI
 * @description a'ya amount ekleyerek b'ye yaklaştırır.
 * @param {Number} a Başlangıç Sayısı
 * @param {Number} b Bitiş Sayısı
 * @param {Number} amount Artış Miktarı
 * @returns {Number} a'dan b'ye amount kadar arttırılmış hali
 */
function approach(a: number, b: number, amount: number): number {
    if (a < b) {
        if ((a += amount) > b) return b;
    } else if ((a -= amount) < b) return b;
    return a;
}
export default approach;
