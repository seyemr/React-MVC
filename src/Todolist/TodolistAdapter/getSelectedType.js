// Belirli bir kod ile eşleşen tipi getiren fonksiyon
const getSelectedType = (type, code) => 
    // Verilen kod ile eşleşen tipi bulan find fonksiyonu kullanılıyor
    type.find((n) => n.code === code);

// Fonksiyonu dışa aktarıyoruz
export default getSelectedType;
