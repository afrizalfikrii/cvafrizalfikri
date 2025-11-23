# 📄 Tugas 1 – Single Page Application (SPA) CV Mahasiswa

Project ini adalah tugas mata kuliah **Pemrograman Web Berbasis Framework** untuk membuat **CV Digital Interaktif** menggunakan **ReactJS** dan **Tailwind CSS**.

## 👤 Identitas Mahasiswa

| Data       | Keterangan                                                          |
| ---------- | ------------------------------------------------------------------- |
| **Nama**   | Afrizal Fikri                                                       |
| **NIM**    | L200230195                                                          |
| **Prodi**  | Teknik Informatika                                                  |
| **Kampus** | Universitas Muhammadiyah Surakarta                                  |
| **Email**  | L200230195@student.ums.ac.id

---

## 🚀 Fitur Utama

Aplikasi ini dibangun dengan konsep **Single Page Application (SPA)** yang modern dan responsif.

### ✨ Highlight Fitur

* ⚡ **Built with Vite & React:** Performa cepat dan ringan.
* 🎨 **Modern UI (Glassmorphism):** Desain elegan dengan efek blur + background animasi blob.
* 📱 **Fully Responsive:** Tampilan optimal di Desktop, Tablet, dan Mobile.
* 🔄 **Smooth Scrolling:** Navigasi antar section (Profile, Skills, Experiences) berjalan halus.
* 📂 **Modular Data:** Semua data mahasiswa diambil dari **dataMahasiswa.json**, tidak di-hardcode.
* 🌀 **Dynamic Skill Icons:**

  * Logo React JS **berputar** (animasi spin).
  * Logo Tailwind & JS **statis** (rendering logic khusus).

---

## 🛠️ Teknologi yang Digunakan

* **Core:** React JS
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Icons:** Lucide React & Custom SVG

---

## 📂 Struktur Folder

```
├── public/                 # Aset statis (foto profil, ikon)
├── src/
│   ├── components/         # Komponen UI
│   │   ├── Experiences.jsx
│   │   ├── Profile.jsx
│   │   └── Skills.jsx
│   ├── App.jsx             # Komponen utama
│   ├── main.jsx            # Entry point React
│   ├── index.css           # Config Tailwind & global style
│   └── dataMahasiswa.json  # Sumber data mahasiswa
├── .gitignore
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Cara Menjalankan (Installation)

Jika ingin menjalankan project ini di komputer lokal:

### 1️⃣ Clone Repository

```bash
git clone https://github.com/tif1336/single-page-application-reactjs-untuk-cv-mahasiswa-afrizalfikri22.git
cd single-page-application-reactjs-untuk-cv-mahasiswa-afrizalfikri22
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Jalankan Server Development

```bash
npm run dev
```

### 4️⃣ Buka di Browser

Akses:

```
http://localhost:5173
```

---

## 🌐 Link Deployment

Aplikasi telah di-deploy menggunakan Vercel:

🔗 **[https://cv-afrizalfikri-web-framework.vercel.app/](https://cv-afrizalfikri-web-framework.vercel.app/)**

---

Jika mau, aku bisa bantu **buatkan README versi profesional**, atau **tambah badge**, atau **tambah screenshot gallery**.
