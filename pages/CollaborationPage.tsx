
import React, { useState } from 'react';
import CollaborationSection from '../components/CollaborationSection';
import CollaborationProcess from '../components/CollaborationProcess';
import { ChevronDownIcon, HandshakeIcon, CameraIcon, UsersIcon, SparklesIcon, CheckIcon } from '../components/Icons';
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

const collaborationDetails = [
    {
        id: "Talent/Model",
        icon: <CameraIcon />,
        title: "Kembangkan Portofolio Anda",
        description: "Kesempatan emas bagi para model, MUA (Make-Up Artist), dan desainer untuk memperkaya portofolio melalui sesi foto berkonsep unik. Kolaborasi ini bersifat TFP (Time for Print), di mana kita bertukar jasa untuk menghasilkan karya berkualitas yang dapat digunakan bersama.",
        benefitsTitle: "Apa yang Anda Dapatkan:",
        benefits: [
            "Hasil foto berkualitas tinggi untuk portofolio Anda.",
            "Kesempatan bekerja sama dengan fotografer-fotografer berbakat.",
            "Pengalaman dalam sesi pemotretan yang profesional dan suportif."
        ]
    },
    {
        id: "Media Partnership",
        icon: <UsersIcon />,
        title: "Publikasikan Acara Anda",
        description: "Jadikan Tripod Keliling sebagai media partner resmi untuk acara Anda, baik itu seminar, workshop, konser, atau kegiatan komunitas. Tim kami siap meliput dan mendokumentasikan momen-momen penting acara Anda secara profesional.",
        benefitsTitle: "Keuntungan Media Partnership:",
        benefits: [
            "Dokumentasi visual (foto/video) berkualitas tinggi.",
            "Publikasi dan promosi acara di seluruh kanal media sosial kami.",
            "Jangkauan audiens yang lebih luas dan relevan."
        ]
    },
    {
        id: "Brand/Organization",
        icon: <SparklesIcon />,
        title: "Sinergi Kreatif & Komersial",
        description: "Kami membuka pintu seluas-luasnya bagi brand, perusahaan, atau organisasi untuk bersinergi dalam proyek-proyek kreatif yang saling menguntungkan dan berdampak.",
        benefitsTitle: "Bentuk Kerjasama Populer:",
        benefits: [
            "Sponsorship event untuk eksposur brand maksimal.",
            "Liputan visual memukau untuk peluncuran produk baru.",
            "Review gear yang jujur dan mendalam oleh para pegiat fotografi.",
            "Workshop bersama untuk menjangkau target pasar Anda."
        ]
    }
];

interface CollaborationPageProps {
    onNavigate: (view: View) => void;
}

const CollaborationPage: React.FC<CollaborationPageProps> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState(collaborationDetails[0].id);
    const activeTabData = collaborationDetails.find(tab => tab.id === activeTab);

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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Detail Peluang Kolaborasi<span className="text-green-500">.</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Pahami lebih dalam bagaimana kita bisa bersinergi.
                    </p>
                </div>
                
                {/* Tab Interface */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-center items-center border-b border-gray-700 mb-8">
                        {collaborationDetails.map(tab => (
                            <button 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full sm:w-auto font-semibold px-6 py-4 text-center transition-colors duration-300 ${activeTab === tab.id ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-400 hover:text-white'}`}
                            >
                                {tab.id}
                            </button>
                        ))}
                    </div>
                    
                    {/* Tab Content */}
                    <div className="bg-brand-dark p-6 sm:p-8 rounded-lg border border-gray-700 transition-all duration-500">
                        {activeTabData && (
                             <div className="flex flex-col sm:flex-row items-start gap-6 animate-fade-in">
                                <div className="flex-shrink-0 text-green-500 bg-brand-gray p-4 rounded-lg border border-gray-600 self-center sm:self-start">
                                    {activeTabData.icon}
                                </div>
                                <div className="w-full">
                                    <h3 className="text-xl font-bold text-white mb-3">{activeTabData.title}</h3>
                                    <p className="text-gray-300 text-justify mb-6">{activeTabData.description}</p>
                                    
                                    <h4 className="font-semibold text-white mt-4 mb-3">{activeTabData.benefitsTitle}</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        {activeTabData.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
      
      {/* Collaboration Process */}
      <CollaborationProcess />

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
