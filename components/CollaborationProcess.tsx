
import React from 'react';
import { LightbulbIcon, ChatBubbleIcon, ClipboardCheckIcon, CameraIcon, ShareIcon } from './Icons';

const processSteps = [
    {
        icon: <LightbulbIcon className="h-10 w-10" />,
        title: "Kirim Ide",
        description: "Hubungi kami dengan konsep atau proposal kolaborasi Anda."
    },
    {
        icon: <ChatBubbleIcon className="h-10 w-10" />,
        title: "Diskusi & Perencanaan",
        description: "Tim kami akan menjadwalkan sesi diskusi untuk mematangkan ide."
    },
    {
        icon: <ClipboardCheckIcon className="h-10 w-10" />,
        title: "Kesepakatan",
        description: "Menyusun perjanjian kerjasama yang jelas dan saling menguntungkan."
    },
    {
        icon: <CameraIcon />,
        title: "Eksekusi Proyek",
        description: "Saatnya beraksi! Kita wujudkan konsep menjadi karya nyata."
    },
    {
        icon: <ShareIcon className="h-10 w-10" />,
        title: "Publikasi & Apresiasi",
        description: "Mempublikasikan hasil karya di platform kami dan merayakannya bersama."
    }
];

const CollaborationProcess: React.FC = () => {
    return (
        <section className="py-20 bg-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Proses Kolaborasi Kami<span className="text-green-500">.</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Dari ide hingga publikasi, kami membuat prosesnya sederhana dan transparan.
                    </p>
                </div>

                <div className="relative">
                    {/* The connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-700"></div>
                    
                    <div className="grid md:grid-cols-5 gap-10 md:gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-row md:flex-col items-center text-left md:text-center relative">
                                <div className="flex-shrink-0 w-24 h-24 mb-0 md:mb-4 bg-brand-gray border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 z-10 mr-6 md:mr-0">
                                    {step.icon}
                                </div>
                                <div className="md:mt-4">
                                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                                    <p className="text-sm text-gray-400 mt-1 md:mt-2">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CollaborationProcess;
