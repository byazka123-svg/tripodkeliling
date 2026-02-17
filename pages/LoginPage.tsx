
import React, { useState } from 'react';
import { View } from '../App';
import { MailIcon, LockClosedIcon, UserIcon } from '../components/Icons';

interface LoginPageProps {
    onNavigate: (view: View) => void;
}

const Logo = () => (
    <img className="h-10 w-auto mx-auto" src="https://ik.imagekit.io/hrctvvb3m/a6ca3c95-1577-4719-8200-6b452ca914b2.png" alt="Tripod Keliling Logo" />
);

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
    const [isLoginView, setIsLoginView] = useState(true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for authentication logic
        alert('Fitur ini sedang dalam pengembangan!');
        onNavigate({ page: 'Beranda' }); // Navigate home after "login"
    };

    return (
        <div className="min-h-screen bg-brand-dark flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <button onClick={() => onNavigate({ page: 'Beranda' })}>
                        <Logo />
                    </button>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        {isLoginView ? 'Selamat Datang Kembali' : 'Buat Akun Baru'}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        {isLoginView ? 'Masuk untuk melanjutkan' : 'Daftar untuk bergabung dengan komunitas'}
                    </p>
                </div>

                <div className="bg-brand-gray p-8 rounded-lg shadow-lg border border-gray-700">
                    <div className="flex border-b border-gray-600 mb-6">
                        <button
                            onClick={() => setIsLoginView(true)}
                            className={`w-1/2 py-3 text-sm font-medium transition-colors ${isLoginView ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-400 hover:text-white'}`}
                        >
                            LOGIN
                        </button>
                        <button
                            onClick={() => setIsLoginView(false)}
                            className={`w-1/2 py-3 text-sm font-medium transition-colors ${!isLoginView ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-400 hover:text-white'}`}
                        >
                            REGISTER
                        </button>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {!isLoginView && (
                            <div>
                                <label htmlFor="fullname" className="sr-only">Nama Lengkap</label>
                                <div className="relative">
                                     <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                        <UserIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="fullname"
                                        name="fullname"
                                        type="text"
                                        required
                                        className="appearance-none rounded-md relative block w-full px-3 py-3 pl-10 border border-gray-600 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                        placeholder="Nama Lengkap"
                                    />
                                </div>
                            </div>
                        )}
                        <div>
                            <label htmlFor="email-address" className="sr-only">Alamat Email</label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <MailIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-3 pl-10 border border-gray-600 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Alamat Email"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <LockClosedIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-3 pl-10 border border-gray-600 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        {isLoginView && (
                            <div className="flex items-center justify-end">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-green-500 hover:text-green-400">
                                        Lupa password?
                                    </a>
                                </div>
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-green-500 transition-colors"
                            >
                                {isLoginView ? 'Login' : 'Daftar Sekarang'}
                            </button>
                        </div>
                    </form>
                </div>
                 <div className="text-center">
                    <button onClick={() => setIsLoginView(!isLoginView)} className="font-medium text-sm text-green-500 hover:text-green-400">
                        {isLoginView ? 'Belum punya akun? Daftar di sini.' : 'Sudah punya akun? Login.'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
