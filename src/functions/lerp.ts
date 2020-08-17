/**
 * @function lerp(e: number, r: number, l: number): number
 * @author Barış DEMIRCI
 * @description "l" 0 ise "e", "l" "1" ise "r", diğer "l" değerleri için "l" tarafından kontrol edilen "e" den "r" ye doğrusal enterpolasyonarı hesaplar
 * @param {Number} e Başlangıç değeri
 * @param {Number} r Bitiş değeri
 * @param {Number} l Enterpolasyon miktarı
 * @returns {Number} e'den r'ye l kontrolünde enterpolasyon uygulanmış hali
 */
function lerp(e: number, r: number, l: number): number {
    return e * (1 - l) + r * l;
}
export default lerp;
