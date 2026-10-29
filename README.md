# Money Management 💰

Aplikasi pencatat pemasukan **dan** pengeluaran harian. Gratis, tanpa backend, data tersimpan di browser.

🔗 **Live:** https://catat-pengeluaran-ecru.vercel.app

## Fitur

- ✅ Tambah, edit, hapus pemasukan & pengeluaran
- 💵 Kategori pemasukan (gaji, freelance, usaha, investasi, bonus, hadiah, lain-lain)
- 📈 Saldo bulan ini, saldo harian & mingguan otomatis (masuk − keluar)
- 📅 Pencarian per tanggal (riwayat hari-hari sebelumnya tetap tersimpan)
- 📊 Grafik per jenis (kategori & harian)
- 🔍 Filter tanggal, bulan, jenis, kategori & pencarian
- 🧭 Bottom navigation + tombol tambah cepat
- 🌙 Dark / Light mode
- 🌐 Bilingual (Indonesia / English)
- 📱 Share ke WhatsApp (ringkasan masuk/keluar/saldo + rincian)
- 💾 Data tersimpan di LocalStorage browser
- 📲 Bisa dipasang di HP (PWA) & tetap terbuka saat offline

## Tech Stack

- HTML5
- CSS custom properties (tanpa framework)
- Vanilla JavaScript
- Chart.js
- PWA (manifest + service worker)

## Deploy (Gratis!)

Project Vercel sudah terhubung ke repo ini, jadi **setiap push ke branch `main` otomatis deploy** ke production.

### Cara 1: Vercel

1. Buka [vercel.com/new](https://vercel.com/new)
2. Import repository `Zuutoworld/CatatPengeluaran`
3. Framework Preset: **Other**, Build Command & Output Directory dibiarkan kosong
4. Deploy! ✅

Penting: aplikasi hanya bisa dipasang di HP kalau dibuka lewat **HTTPS**
(domain `*.vercel.app` sudah otomatis HTTPS). Membuka file `index.html`
langsung dari memori HP **tidak bisa** di-install.

### Cara 2: GitHub Pages

1. Push ke GitHub
2. Settings → Pages → Source: `main` branch
3. Selesai!

## Instal di HP

**Android (Chrome):** buka URL aplikasi → banner "Pasang sebagai aplikasi" →
tombol **Pasang**. Kalau banner tidak muncul, buka menu ⋮ → **Instal aplikasi**.

**iPhone/iPad (Safari):** buka URL aplikasi di Safari → tombol **Bagikan** →
**Tambah ke Layar Utama** → **Tambah**.

Setelah dipasang, aplikasi punya ikon sendiri, terbuka layar penuh tanpa
address bar, dan riwayat pengeluaran tetap tersimpan di browser HP.

## Struktur File

```
├── index.html            # Halaman utama
├── app.js                # Logic aplikasi
├── sw.js                 # Service worker (offline & PWA)
├── manifest.json         # Manifest aplikasi (PWA)
├── icon-192.png          # Ikon aplikasi
├── icon-512.png          # Ikon aplikasi (high-res & maskable)
├── apple-touch-icon.png  # Ikon iOS
├── favicon-64.png        # Favicon
├── favicon.ico
├── vercel.json           # Config Vercel
├── .gitignore
└── README.md             # Dokumentasi
```

## Lisensi

MIT
