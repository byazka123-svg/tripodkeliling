import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // 1. Listen ke semua IP
    host: '0.0.0.0', 
    port: 1337,
    
    // 2. KUNCI UTAMA: Izinkan SEMUA host (bypass error yang kamu alami)
    allowedHosts: true, 

    // 3. Konfigurasi agar tidak error koneksi di balik Nginx (SSL)
    hmr: {
      host: 'admin.tripodkeliling.com',
      clientPort: 443,
      protocol: 'wss', // Gunakan Secure WebSocket karena pakai HTTPS
    },
  },
});
