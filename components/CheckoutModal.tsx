
import React, { useState, useEffect } from 'react';
import { XIcon, WhatsAppIcon } from './Icons';

interface Product {
  name: string;
  price: string;
  image?: string;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

type ModalStep = 'initial' | 'review' | 'form' | 'confirmation';

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, product }) => {
  const [step, setStep] = useState<ModalStep>('initial');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    postalCode: '',
  });

  // Reset step when modal is closed or product changes
  useEffect(() => {
    if (isOpen) {
      setStep('initial');
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleProceedToCheckout = () => {
    setStep('review');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (formData.name && formData.phone && formData.address && formData.postalCode) {
      setStep('confirmation');
    } else {
      alert('Mohon lengkapi semua data.');
    }
  };

  const generateWhatsAppLink = () => {
    const adminPhoneNumber = '6281234567890'; // Ganti dengan nomor Admin
    const message = `
Halo Tripod Keliling, saya mau pesan:

*Produk:* ${product.name}
*Harga:* ${product.price}

---

*Nama:* ${formData.name}
*No. WA:* ${formData.phone}
*Alamat:* ${formData.address}
*Kode Pos:* ${formData.postalCode}

Mohon konfirmasi ketersediaan dan total biayanya. Terima kasih!
    `.trim();

    return `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`;
  };
  
  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
    >
      <div 
        className="bg-brand-gray border border-gray-700 rounded-lg shadow-xl w-full max-w-md p-6 relative transform transition-all duration-300 scale-95"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white" aria-label="Close modal">
          <XIcon />
        </button>

        {step === 'initial' && (
            <div className="text-center">
                <h2 className="text-xl font-bold text-white mb-2">Item Ditambahkan</h2>
                <p className="text-gray-300 mb-4">{product.name}</p>
                <div className="space-y-3">
                    <button onClick={handleProceedToCheckout} className="w-full bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-4 rounded-md transition-all">
                        Lanjut Checkout
                    </button>
                    <button onClick={onClose} className="w-full bg-gray-600 text-white hover:bg-gray-700 font-bold py-3 px-4 rounded-md transition-all">
                        Lanjut Belanja
                    </button>
                </div>
            </div>
        )}

        {step === 'review' && (
            <div>
                <h2 className="text-xl font-bold text-white mb-4 text-center">Review Keranjang Anda</h2>
                <div className="flex items-center bg-gray-900 border border-gray-600 rounded-md p-3 mb-6">
                    {product.image && (
                        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md mr-4"/>
                    )}
                    <div className="flex-grow">
                        <p className="font-semibold text-white">{product.name}</p>
                        <p className="text-gray-400 text-sm">{product.price}</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <button 
                        onClick={() => setStep('form')} 
                        className="w-full bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-4 rounded-md transition-all"
                    >
                        Lanjut ke Pengiriman
                    </button>
                    <button 
                        onClick={() => setStep('initial')} 
                        className="w-full bg-gray-600 text-white hover:bg-gray-700 font-bold py-3 px-4 rounded-md transition-all"
                    >
                        Kembali
                    </button>
                </div>
            </div>
        )}

        {step === 'form' && (
            <div>
                <h2 className="text-xl font-bold text-white mb-4 text-center">Detail Pengiriman</h2>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Nama Lengkap" value={formData.name} onChange={handleInputChange} required className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                    <input type="tel" name="phone" placeholder="No. WhatsApp (e.g., 0812...)" value={formData.phone} onChange={handleInputChange} required className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                    <textarea name="address" placeholder="Alamat Lengkap" value={formData.address} onChange={handleInputChange} required rows={3} className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"></textarea>
                    <input type="text" name="postalCode" placeholder="Kode Pos" value={formData.postalCode} onChange={handleInputChange} required className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                    <button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-4 rounded-md transition-all">
                        Checkout via WhatsApp
                    </button>
                </form>
            </div>
        )}

        {step === 'confirmation' && (
            <div className="text-center">
                <h2 className="text-xl font-bold text-green-500 mb-2">Pesanan Anda Terkirim!</h2>
                <p className="text-gray-300 mb-6">Selesaikan pesanan Anda dengan mengirim detailnya ke admin kami di WhatsApp.</p>
                <a 
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="w-full flex items-center justify-center bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-4 rounded-md transition-all"
                >
                    <WhatsAppIcon className="h-5 w-5 mr-2" />
                    Konfirmasi via WhatsApp
                </a>
            </div>
        )}

      </div>
    </div>
  );
};

export default CheckoutModal;