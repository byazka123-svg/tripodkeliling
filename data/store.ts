
export interface StoreItem {
  id: string;
  image: string;
  name: string;
  price: string;
  category: 'Merchandise Official' | 'Gear & Accessories' | 'Secondhand Gear';
  description: string;
}

export const allStoreItems: StoreItem[] = [
    {
      id: "kaos-official-tk",
      image: "https://picsum.photos/seed/merch1/600/600",
      name: "Kaos Official 'Tripod Keliling'",
      price: "Rp 150.000",
      category: "Merchandise Official",
      description: "Tunjukkan dukunganmu dengan kaos official Tripod Keliling. Terbuat dari bahan cotton combed 30s yang adem dan nyaman, dengan sablon plastisol berkualitas tinggi yang awet. Tersedia dalam ukuran S, M, L, XL, dan XXL."
    },
    {
      id: "totebag-jelajah-visual",
      image: "https://picsum.photos/seed/merch2/600/600",
      name: "Totebag 'Jelajah Visual'",
      price: "Rp 85.000",
      category: "Merchandise Official",
      description: "Bawa perlengkapanmu dengan gaya. Totebag kanvas tebal dengan desain eksklusif 'Jelajah Visual, Abadikan Momen'. Cukup luas untuk membawa kamera mirrorless, botol minum, dan catatan kecil."
    },
    {
      id: "filter-cpl-knf-77mm",
      image: "https://picsum.photos/seed/gear1/600/600",
      name: "Filter CPL K&F Concept Nano-X 77mm",
      price: "Rp 450.000",
      category: "Gear & Accessories",
      description: "Filter Circular Polarizer (CPL) esensial untuk fotografi landscape. Berfungsi untuk mengurangi refleksi dari permukaan non-logam seperti air dan kaca, serta meningkatkan saturasi warna langit dan dedaunan. Seri Nano-X menjamin kualitas optik tanpa mengurangi ketajaman."
    },
    {
      id: "lensa-canon-50mm-bekas",
      image: "https://picsum.photos/seed/secondhand1/600/600",
      name: "Lensa Canon EF 50mm f/1.8 STM (Bekas)",
      price: "Rp 1.100.000",
      category: "Secondhand Gear",
      description: "Lensa 'nifty fifty' legendaris dari Canon. Kondisi bekas, 95% mulus, optik bening tanpa jamur, fungsi autofokus normal. Cocok untuk potret dengan bokeh menawan. Kelengkapan: lensa, front cap, rear cap. Garansi fungsi 7 hari."
    },
    {
      id: "hoodie-focus-on-good",
      image: "https://picsum.photos/seed/merch4/600/600",
      name: "Hoodie 'Focus on The Good'",
      price: "Rp 250.000",
      category: "Merchandise Official",
      description: "Hoodie nyaman berbahan fleece tebal, cocok untuk menemani hunting foto di cuaca dingin. Desain minimalis dengan tulisan 'Focus on The Good' yang inspiratif. Unisex, tersedia dalam ukuran M, L, XL."
    },
    {
      id: "tripod-beike-q999h",
      image: "https://picsum.photos/seed/gear2/600/600",
      name: "Tripod Beike Q999H",
      price: "Rp 850.000",
      category: "Gear & Accessories",
      description: "Tripod serbaguna yang kokoh dan stabil, terbuat dari aluminum alloy. Dapat diubah menjadi monopod dan memiliki fitur horizontal center column untuk pengambilan gambar dari sudut-sudut sulit (top-down). Sudah termasuk ball head."
    },
     {
      id: "kamera-sony-a6000-bekas",
      image: "https://picsum.photos/seed/secondhand2/600/600",
      name: "Kamera Sony A6000 Body Only (Bekas)",
      price: "Rp 4.500.000",
      category: "Secondhand Gear",
      description: "Kamera mirrorless andalan dengan sensor APS-C 24MP. Kondisi fisik 90%, ada bekas pemakaian wajar. Shutter count ~15rb. Semua fungsi normal, sensor bersih. Kelengkapan: body, baterai, charger, strap. Bonus: memory card 16GB."
    },
    {
      id: "strap-kamera-kulit",
      image: "https://picsum.photos/seed/merch5/600/600",
      name: "Camera Strap Kulit Kustom",
      price: "Rp 120.000",
      category: "Merchandise Official",
      description: "Strap kamera handmade dari kulit asli dengan logo Tripod Keliling emboss. Memberikan tampilan klasik dan premium pada kameramu, sekaligus kuat dan nyaman digunakan."
    },
     {
      id: "baterai-kingma-np-fw50",
      image: "https://picsum.photos/seed/gear3/600/600",
      name: "Baterai Kingma NP-FW50 for Sony",
      price: "Rp 180.000",
      category: "Gear & Accessories",
      description: "Baterai third-party berkualitas untuk kamera Sony yang menggunakan tipe NP-FW50 (seri a6000, a7, dll). Kapasitas 1080mAh, dilengkapi dengan chip info untuk menampilkan sisa daya di kamera. Pilihan terpercaya untuk baterai cadangan."
    },
];
