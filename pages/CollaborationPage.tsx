
import React, { useState } from 'react';
import CollaborationSection from '../components/CollaborationSection';
import CollaborationProcess from '../components/CollaborationProcess';
import PastCollaborations from '../components/PastCollaborations';
import { ChevronDownIcon, HandshakeIcon, CameraIcon, UsersIcon, SparklesIcon } from '../components/Icons';
import { View } from '../App';

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700 py-5">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left gap-4">
                <h4 className="font-semibold text-base md:text-lg text-white">{question}</h4>
                <ChevronDownIcon className={`w-6 h-6 text-green-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <div 
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="mt-4 text-gray-300 text-justify">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

const faqData = [
    {
        question: "Bagaimana proses pengajuan kolaborasi?",
        answer: <p>Sangat mudah! Cukup klik tombol 'Hubungi Kami' di bawah, lalu kirimkan email atau pesan WhatsApp berisi perkenalan singkat dan ide kolaborasi Anda. Tim kami akan segera meninjau dan menghubungi Anda kembali untuk diskusi lebih lanjut.</p>
    },
    {
        question: "Apakah ada biaya untuk berkolaborasi?",
        answer: <p>Tergantung jenis kolaborasinya. Untuk proyek non-komersial seperti hunting foto bersama model, biasanya bersifat TFP (Time for Print). Untuk jasa dokumentasi acara atau kerjasama dengan brand, akan ada skema kompensasi yang kita diskusikan dan sepakati bersama secara transparan.</p>
    },
    {
        question: "Siapa saja yang bisa mengajukan kolaborasi?",
        answer: <p>Kami terbuka untuk siapa saja! Baik Anda seorang model, MUA, desainer, pemilik brand, event organizer, atau bahkan komunitas lain. Selama Anda memiliki semangat dan ide kreatif yang sejalan dengan visi kami, kami sangat antusias untuk berdiskusi.</p>
    },
    {
        question: "Apa keuntungan berkolaborasi dengan Tripod Keliling?",
        answer: <p>Anda akan mendapatkan akses ke jaringan fotografer berbakat kami, visibilitas di platform media sosial kami yang aktif, serta konten visual berkualitas tinggi untuk portofolio atau promosi Anda. Yang terpenting, Anda akan menjadi bagian dari proyek kreatif yang seru dan didukung oleh komunitas yang solid.</p>
    },
];

const CollaborationDetailItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="flex-shrink-0 text-green-500 bg-brand-dark p-4 rounded-lg border border-gray-700">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <div className="text-gray-300 text-justify space-y-3">
                {children}
            </div>
        </div>
    </div>
);

interface CollaborationPageProps {
    onNavigate: (view: View) => void;
}

const CollaborationPage: React.FC<CollaborationPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-brand-gray text-center border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white">
                Berkarya Bersama Kami<span className="text-green-500">.</span>
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                Kami percaya kekuatan terbesar lahir dari kolaborasi. Mari ciptakan karya visual yang berdampak dan menginspirasi bersama-sama.
            </p>
        </div>
      </section>

      {/* Collaboration Opportunities Section */}
      <CollaborationSection onNavigate={onNavigate} />
      
      {/* Detail Section */}
      <section className="py-20 bg-brand-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <div className="text-center mb-12">
                   <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                      Detail Peluang Kolaborasi<span className="text-green-500">.</span>
                  </h2>
                  <p className="mt-4 text-lg text-gray-400">
                      Pahami lebih dalam bagaimana kita bisa bersinergi.
                  </p>
              </div>
              <div className="space-y-12">
                  <CollaborationDetailItem icon={<CameraIcon />} title="Talent/Model: Kembangkan Portofolio">
                      <>
                        <p>
                            Kesempatan emas bagi para <strong>model, MUA (Make-Up Artist), dan desainer</strong> untuk memperkaya portofolio melalui sesi foto berkonsep unik. Kolaborasi ini bersifat <strong>TFP (Time for Print)</strong>, di mana kita bertukar jasa untuk menghasilkan karya berkualitas yang dapat digunakan bersama.
                        </p>
                        <h4 className="font-semibold text-white mt-4 mb-2">Apa yang Anda Dapatkan:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Hasil foto berkualitas tinggi untuk portofolio Anda.</li>
                            <li>Kesempatan bekerja sama dengan fotografer-fotografer berbakat.</li>
                            <li>Pengalaman dalam sesi pemotretan yang profesional dan suportif.</li>
                        </ul>
                      </>
                  </CollaborationDetailItem>
                  <CollaborationDetailItem icon={<UsersIcon />} title="Dokumentasi & Liputan: Media Partnership">
                      <>
                        <p>
                            Jadikan Tripod Keliling sebagai <strong>media partner</strong> resmi untuk acara Anda, baik itu seminar, workshop, konser, atau kegiatan komunitas. Tim kami siap meliput dan mendokumentasikan momen-momen penting acara Anda secara profesional.
                        </p>
                        <h4 className="font-semibold text-white mt-4 mb-2">Keuntungan Media Partnership:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Dokumentasi visual (foto/video) berkualitas tinggi.</li>
                            <li>Publikasi dan promosi acara di seluruh kanal media sosial kami.</li>
                            <li>Jangkauan audiens yang lebih luas dan relevan.</li>
                        </ul>
                      </>
                  </CollaborationDetailItem>
                  <CollaborationDetailItem icon={<SparklesIcon />} title="Brand/Organization: Sinergi Kreatif">
                       <>
                        <p>
                            Kami membuka pintu seluas-luasnya bagi <strong>brand, perusahaan, atau organisasi</strong> untuk bersinergi dalam proyek-proyek kreatif yang saling menguntungkan dan berdampak.
                        </p>
                        <h4 className="font-semibold text-white mt-4 mb-2">Bentuk Kerjasama Populer:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Sponsorship:</strong> Dukung event kami dan dapatkan eksposur brand yang maksimal.</li>
                            <li><strong>Product Launching:</strong> Liputan visual yang memukau untuk peluncuran produk baru Anda.</li>
                            <li><strong>Review Gear:</strong> Ulasan produk yang jujur dan mendalam oleh para pegiat fotografi.</li>
                            <li><strong>Workshop Bersama:</strong> Jangkau target pasar Anda melalui workshop fotografi yang kami selenggarakan.</li>
                        </ul>
                       </>
                  </CollaborationDetailItem>
              </div>
          </div>
      </section>
      
      {/* Collaboration Process */}
      <CollaborationProcess />

      {/* Past Collaborations Showcase */}
      <PastCollaborations />

      {/* FAQ Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                    Sering Ditanyakan<span className="text-green-500">.</span>
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                    Beberapa hal yang mungkin ingin Anda ketahui.
                </p>
            </div>
            <div>
                {faqData.map(item => (
                    <FAQItem key={item.question} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center mb-6 text-green-500">
                    <HandshakeIcon />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Siap Wujudkan Idemu?
                </h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Jangan ragu untuk menghubungi kami. Diskusikan ide brilian Anda dan mari kita lihat keajaiban apa yang bisa kita ciptakan bersama.
                </p>
                <div className="mt-10">
                <a
                    href="mailto:kolaborasi@tripodkeliling.com"
                    className="bg-green-600 text-white hover:bg-green-700 font-bold py-4 px-10 rounded-md text-lg transition-all duration-300 transform hover:scale-105 inline-block"
                >
                    Hubungi Kami
                </a>
                </div>
          </div>
      </section>

    </div>
  );
};

export default CollaborationPage;
