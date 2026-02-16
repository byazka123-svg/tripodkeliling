
export interface MemberPost {
  id: string;
  postImage: string;
  photographerAvatar: string;
  photographerName: string;
  postLink: string;
  description: string;
}

export const memberPosts: MemberPost[] = [
    {
      id: "andi-pratama-1",
      postImage: "https://picsum.photos/id/1015/600/600",
      photographerAvatar: "https://picsum.photos/200/200?random=4",
      photographerName: "Andi Pratama",
      postLink: "https://www.instagram.com/p/DUI8i-9kj60/?img_index=1",
      description: "Andi berhasil menangkap keindahan Danau Kelimutu saat fajar dengan sempurna. Penggunaan filter Graduated ND secara apik menyeimbangkan eksposur antara langit yang cerah dan danau yang masih gelap, menghasilkan detail yang tajam di seluruh area foto. Komposisi yang menempatkan siluet orang di tepi danau memberikan skala dan sentuhan manusiawi yang kuat."
    },
    {
      id: "siti-nurhaliza-1",
      postImage: "https://picsum.photos/id/1025/600/600",
      photographerAvatar: "https://picsum.photos/200/200?random=5",
      photographerName: "Siti Nurhaliza",
      postLink: "https://www.instagram.com/p/C3-a_Sdy5wY/",
      description: "Dalam potret candid ini, Siti menunjukkan keahliannya dalam menangkap emosi. Ekspresi tawa lepas dari seorang anak di tengah pasar tradisional berhasil dibekukan dalam waktu. Pilihan Siti untuk menggunakan mode monokrom menonjolkan tekstur dan ekspresi, menghilangkan distraksi warna, dan membuat foto ini terasa lebih abadi dan penuh cerita."
    },
    {
      id: "budi-santoso-1",
      postImage: "https://picsum.photos/id/1040/600/600",
      photographerAvatar: "https://picsum.photos/200/200?random=6",
      photographerName: "Budi Santoso",
      postLink: "https://www.instagram.com/p/C38zL0eS4xS/",
      description: "Karya arsitektur dari Budi ini bermain dengan garis dan bayangan secara cerdas. Mengambil gambar dari sudut rendah (low angle), ia berhasil membuat bangunan ini terlihat megah dan dinamis. Bayangan geometris yang jatuh di dinding menambahkan lapisan visual yang menarik, menciptakan komposisi abstrak yang kuat dan memanjakan mata."
    },
    {
      id: "dewi-lestari-1",
      postImage: "https://picsum.photos/id/106/600/600",
      photographerAvatar: "https://picsum.photos/200/200?random=7",
      photographerName: "Dewi Lestari",
      postLink: "https://www.instagram.com/p/C37hG3tS4xS/",
      description: "Dewi membawa kita ke dalam dunia fotografi makro yang menakjubkan. Detail tetesan embun di atas kelopak bunga ini ditangkap dengan ketajaman luar biasa, memperlihatkan tekstur dan warna yang seringkali luput dari pandangan. Penggunaan cahaya alami yang lembut dan latar belakang yang blur sempurna (bokeh) membuat subjek utama benar-benar menonjol."
    }
];
