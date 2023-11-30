// Görev tipini seçeneklere dönüştüren fonksiyon
const toTypeOption = (type) => {
    // Tip nesnesinden gerekli özellikleri çıkarma
    const { code, name } = type;

    // Seçenek nesnesini oluşturma
    return {
        label: name,  // Görsel etiket
        value: code,  // Değer
    };
};

// Fonksiyonu dışa aktarıyoruz
export default toTypeOption;
