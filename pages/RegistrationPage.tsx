
import React, { useState } from 'react';
import { View } from '../App';
import { UserIcon, WhatsAppIcon, LocationMarkerIcon, InstagramIcon, CameraIcon, HeartIcon } from '../components/Icons';

interface RegistrationPageProps {
    onNavigate: (view: View) => void;
}

const Logo = () => (
    <img className="h-10 w-auto mx-auto" src="https://ik.imagekit.io/hrctvvb3m/a6ca3c95-1577-4719-8200-6b452ca914b2.png" alt="Tripod Keliling Logo" />
);

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        domicile: '',
        instagram: '',
        interests: '',
        reason: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple validation
        for (const key in formData) {
            if (formData[key as keyof typeof formData].trim() === '') {
                alert('Mohon lengkapi semua data pendaftaran.');
                return;
            }
        }

        const adminPhoneNumber = '6282113191544'; // Admin's WhatsApp number
        const message = `
Halo Tripod Keliling, saya ingin mendaftar sebagai anggota baru.

Berikut data diri saya:
*Nama Lengkap:* ${formData.name}
*No. WhatsApp:* ${formData.phone}
*Domisili:* ${formData.domicile}
*Akun Instagram:* ${formData.instagram}

*Minat Fotografi:*
${formData.interests}

*Alasan Bergabung:*
${formData.reason}

Mohon informasinya untuk langkah selanjutnya. Terima kasih!
        `.trim().replace(/\n\s+/g, '\n');

        const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        onNavigate({ page: 'Beranda' }); // Navigate home after opening WhatsApp
    };

    return (
        <div className="min-h-screen bg-brand-dark flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <button onClick={() => onNavigate({ page: 'Beranda' })}>
                        <Logo />
                    </button>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Gabung Komunitas
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Lengkapi form di bawah untuk menjadi bagian dari keluarga Tripod Keliling.
                    </p>
                </div>

                <div className="bg-brand-gray p-8 rounded-lg shadow-lg border border-gray-700">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        
                        <InputField name="name" type="text" placeholder="Nama Lengkap" value={formData.name} onChange={handleInputChange} icon={<UserIcon className="h-5 w-5 text-gray-400" />} />
                        <InputField name="phone" type="tel" placeholder="Nomor WhatsApp (e.g., 0812...)" value={formData.phone} onChange={handleInputChange} icon={<WhatsAppIcon className="h-5 w-5 text-gray-400" />} />
                        <InputField name="domicile" type="text" placeholder="Domisili (e.g., Bekasi)" value={formData.domicile} onChange={handleInputChange} icon={<LocationMarkerIcon />} />
                        <InputField name="instagram" type="text" placeholder="Akun Instagram (e.g., @tripodkeliling)" value={formData.instagram} onChange={handleInputChange} icon={<InstagramIcon className="h-5 w-5 text-gray-400" />} />
                        <TextareaField name="interests" placeholder="Minat Fotografi (e.g., Street, Portrait)" value={formData.interests} onChange={handleInputChange} icon={<CameraIcon className="h-5 w-5 text-gray-400" />} />
                        <TextareaField name="reason" placeholder="Alasan ingin bergabung..." value={formData.reason} onChange={handleInputChange} icon={<HeartIcon className="h-5 w-5 text-gray-400" />} />

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-green-500 transition-colors"
                            >
                                Daftar via WhatsApp
                            </button>
                        </div>
                    </form>
                </div>
                 <div className="text-center">
                    <button onClick={() => onNavigate({ page: 'Beranda' })} className="font-medium text-sm text-green-500 hover:text-green-400">
                        Kembali ke Beranda
                    </button>
                </div>
            </div>
        </div>
    );
};

// Helper components for form fields to keep the main component clean
interface InputFieldProps {
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ name, type, placeholder, value, onChange, icon }) => (
    <div>
        <label htmlFor={name} className="sr-only">{placeholder}</label>
        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                {icon}
            </div>
            <input
                id={name}
                name={name}
                type={type}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 pl-10 border border-gray-600 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    </div>
);

interface TextareaFieldProps {
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    icon: React.ReactNode;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ name, placeholder, value, onChange, icon }) => (
    <div>
        <label htmlFor={name} className="sr-only">{placeholder}</label>
        <div className="relative">
             <div className="pointer-events-none absolute top-3.5 left-0 pl-3 flex items-center">
                {icon}
            </div>
            <textarea
                id={name}
                name={name}
                rows={3}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 pl-10 border border-gray-600 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    </div>
);


export default RegistrationPage;
