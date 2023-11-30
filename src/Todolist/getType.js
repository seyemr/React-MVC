// API'den görev tiplerini almak için bir Promise döndüren fonksiyon
const getType = () =>
    new Promise((resolve) => {
        // 500 ms sonra resolve edilen bir Promise
        setTimeout(() => {
            resolve([
                {
                    code: "sport",
                    name: "Spor",
                },
                {
                    code: "reading",
                    name: "Okuma",
                },
                {
                    code: "hobby",
                    name: "Hobi",
                },
                {
                    code: "home",
                    name: "Ev",
                },
                {
                    code: "work",
                    name: "İş",
                },
            ]);
        }, 500);
    });

// Fonksiyonu dışa aktarıyoruz
export default getType;
