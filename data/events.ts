
export interface Event {
  id: string;
  date: Date;
  title: string;
  location: string;
  description: string;
}

const generateEvents = (): Event[] => {
    const today = new Date();
    const thisWeek = new Date();
    thisWeek.setDate(today.getDate() + (7 - today.getDay()) - 1);
    const thisMonth = new Date();
    thisMonth.setDate(today.getDate() + 10);
    
    if (thisMonth.getMonth() !== today.getMonth()) {
        thisMonth.setDate(today.getDate());
        thisMonth.setDate(thisMonth.getDate() - 3);
    }

    const futureEvent1 = new Date();
    futureEvent1.setMonth(futureEvent1.getMonth() + 1);
    futureEvent1.setDate(5);
    
    const futureEvent2 = new Date();
    futureEvent2.setMonth(futureEvent2.getMonth() + 2);
    futureEvent2.setDate(15);

    return [
        { id: "workshop-editing-1", date: today, title: "Workshop Editing Cepat untuk Social Media", location: "Online via Zoom Meeting", description: "Pelajari alur kerja editing yang efisien menggunakan Lightroom Mobile dan Snapseed. Workshop ini akan fokus pada cara meningkatkan kualitas foto secara cepat dan efektif agar standout di platform media sosial seperti Instagram. Materi mencakup color grading, retouching sederhana, dan penggunaan preset." },
        { id: "street-photography-pasar-baru-1", date: thisWeek, title: "Street Photography: Human Interest di Pasar Baru", location: "Titik Kumpul: Pintu Masuk Utama Pasar Baru", description: "Asah kepekaan visual Anda dalam menangkap momen-momen otentik di salah satu lokasi paling bersejarah di Jakarta. Hunting ini akan dipandu oleh fotografer senior yang akan berbagi tips tentang pendekatan subjek, komposisi, dan etika street photography. Terbuka untuk semua level." },
        { id: "hunting-senja-sunda-kelapa-1", date: thisMonth, title: "Hunting Bareng: Senja di Pelabuhan Sunda Kelapa", location: "Titik Kumpul: Depan Museum Bahari, Jakarta", description: "Abadikan siluet kapal-kapal Phinisi yang megah dengan latar belakang matahari terbenam yang dramatis. Pelabuhan Sunda Kelapa menawarkan perpaduan unik antara sejarah, budaya, dan keindahan alam. Ini adalah kesempatan emas untuk melatih teknik fotografi landscape dan long exposure." },
        { id: "pameran-tahunan-2025", date: futureEvent1, title: "Pameran Foto Anggota Tahunan 2025", location: "Galeri Nasional Indonesia, Jakarta Pusat", description: "Saksikan karya-karya terbaik dari anggota Tripod Keliling selama setahun terakhir dalam pameran tahunan kami. Mengusung tema 'Wajah Kota', pameran ini akan menampilkan berbagai perspektif unik tentang kehidupan urban. Acara pembukaan akan dimeriahkan dengan diskusi fotografi dan music performance." },
        { id: "kolaborasi-fashion-1", date: futureEvent2, title: "Kolaborasi Fotografi & Fashion", location: "Studio Kreatif Bekasi", description: "Sebuah proyek kolaborasi spesial antara fotografer, model, dan desainer lokal. Peserta terpilih akan mendapatkan kesempatan untuk membangun portofolio fashion dalam sesi pemotretan terkonsep yang akan dipublikasikan. Pendaftaran dan seleksi akan diumumkan segera." }
    ].sort((a, b) => a.date.getTime() - b.date.getTime());
};

export const allEvents = generateEvents();
