
import React, { useState } from 'react';
import { View } from '../App';
import { UserIcon, WhatsAppIcon, MailIcon, LocationMarkerIcon, InstagramIcon, SparklesIcon } from '../components/Icons';

const Logo = () => (
    <img className="h-10 w-auto mx-auto" src="https://ik.imagekit.io/hrctvvb3m/a6ca3c95-1577-4719-8200-6b452ca914b2.png" alt="Tripod Keliling Logo" />
);

interface RegisterPageProps {
    onNavigate: (view: View) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        domicile: '',
        instagram: '',
        interests: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name || !formData.phone || !formData.email || !formData.domicile) {
            alert('Mohon lengkapi semua kolom yang wajib diisi.');
            return;
        }

        const adminPhoneNumber = '6282113191544'; // Yusuf's number
        const message = `
Halo Tripod Keliling, saya ingin mendaftar sebagai anggota baru.

*Nama Lengkap:* ${formData.name}
*No. WhatsApp:* ${formData.phone}
*Alamat Email:* ${formData.email}
*Domisili:* ${formData.domicile}
*Akun Instagram:* ${formData.instagram || '-'}
*Minat Fotografi:* ${formData.interests || '-'}

Mohon informasinya untuk langkah selanjutnya. Terima kasih!
        `.trim().replace(/\n\s+/g, '\n');

        const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
        alert('Anda akan diarahkan ke WhatsApp untuk menyelesaikan pendaftaran!');
        onNavigate({ page: 'Beranda' });
    };

    return (
        <div className="min-h-screen bg-brand-dark flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-6">
                <div className="text-center">
                    <button onClick={() => onNavigate({ page: 'Beranda' })} aria-label="Kembali ke Beranda">
                        <Logo />
                    </button>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Gabung Jadi Anggota
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Isi data diri untuk menjadi bagian dari keluarga kreatif kami.
                    </p>
                </div>

                <div className="bg-brand-gray p-8 rounded-lg shadow-lg border border-gray-700">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                         {/* Nama Lengkap */}
                        <div>
                            <label htmlFor="name" className="sr-only">Nama Lengkap</label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <UserIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="input-field" placeholder="Nama Lengkap *" />
                            </div>
                        </div>
                        {/* No. WhatsApp */}
                        <div>
                            <label htmlFor="phone" className="sr-only">No. WhatsApp</label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <WhatsAppIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} className="input-field" placeholder="No. WhatsApp *" />
                            </div>
                        </div>
                        {/* Alamat Email */}
                        <div>
                            <label htmlFor="email" className="sr-only">Alamat Email</label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <MailIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="input-field" placeholder="Alamat Email *" />
                            </div>
                        </div>
                         {/* Domisili */}
                        <div>
                            <label htmlFor="domicile" className="sr-only">Domisili</label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <LocationMarkerIcon />
                                </div>
                                <input id="domicile" name="domicile" type="text" required value={formData.domicile} onChange={handleInputChange} className="input-field" placeholder="Domisili (e.g. Bekasi) *" />
                            </div>
                        </div>
                        {/* Akun Instagram */}
                        <div>
                             <label htmlFor="instagram" className="sr-only">Akun Instagram</label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <InstagramIcon />
                                </div>
                                <input id="instagram" name="instagram" type="text" value={formData.instagram} onChange={handleInputChange} className="input-field" placeholder="Akun Instagram (Opsional)" />
                            </div>
                        </div>
                        {/* Minat Fotografi */}
                        <div>
                            <label htmlFor="interests" className="sr-only">Minat Fotografi</label>
                            <div className="relative">
                                 <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center top-3">
                                    <SparklesIcon />
                                </div>
                                <textarea id="interests" name="interests" value={formData.interests} onChange={handleInputChange} rows={3} className="input-field h-auto" placeholder="Minat Fotografi (Opsional, e.g. Street, Portrait)"></textarea>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-green-500 transition-colors"
                            >
                                <WhatsAppIcon className="h-5 w-5 mr-2"/>
                                Daftar via WhatsApp
                            </button>
                        </div>
                    </form>
                </div>
                 <div className="text-center">
                    <button onClick={() => onNavigate({ page: 'Beranda' })} className="font-medium text-sm text-green-500 hover:text-green-400">
                        &larr; Kembali ke Beranda
                    </button>
                </div>
            </div>
            <style>{`
                .input-field {
                    appearance: none;
                    border-radius: 0.375rem;
                    position: relative;
                    display: block;
                    width: 100%;
                    padding: 0.75rem 0.75rem 0.75rem 2.5rem;
                    border: 1px solid #4B5563;
                    background-color: #111827;
                    color: #FFFFFF;
                    placeholder-color: #6B7280;
                }
                .input-field:focus {
                    outline: none;
                    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
                    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
                    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
                    border-color: #16A34A;
                    --tw-ring-color: #16A34A;
                }
            `}</style>
        </div>
    );
};

export default RegisterPage;
