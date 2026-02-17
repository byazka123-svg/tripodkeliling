
import React, { useState, useEffect } from 'react';
import { XIcon, WhatsAppIcon } from './Icons';

interface Event {
  title: string;
}

interface EventRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
}

const EventRegistrationModal: React.FC<EventRegistrationModalProps> = ({ isOpen, onClose, event }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  // Reset form when modal is closed or event changes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', phone: '' });
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Mohon lengkapi semua data.');
      return;
    }

    const adminPhoneNumber = '6282113191544'; // Yusuf's number from the description
    const message = `
Halo Tripod Keliling, saya mau mendaftar untuk event:

*Event:* ${event?.title}
---
*Nama:* ${formData.name}
*No. WA:* ${formData.phone}

Terima kasih atas konfirmasinya!
    `.trim().replace(/\n\s+/g, '\n');

    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };
  
  if (!isOpen || !event) return null;

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

        <div className="text-center">
            <h2 className="text-xl font-bold text-white mb-2">Daftar Event</h2>
            <p className="text-gray-300 mb-6 font-semibold">{event.title}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
            <input 
                type="text" 
                name="name" 
                placeholder="Nama Lengkap" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
                className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500" 
            />
            <input 
                type="tel" 
                name="phone" 
                placeholder="No. WhatsApp (e.g., 0812...)" 
                value={formData.phone} 
                onChange={handleInputChange} 
                required 
                className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500" 
            />
            <button 
                type="submit" 
                className="w-full flex items-center justify-center bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-4 rounded-md transition-all"
            >
                <WhatsAppIcon className="h-5 w-5 mr-2" />
                Kirim Pendaftaran via WhatsApp
            </button>
        </form>

      </div>
    </div>
  );
};

export default EventRegistrationModal;
