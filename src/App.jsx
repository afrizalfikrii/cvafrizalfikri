import { useState, useEffect } from 'react';

// 1. Import komponen-komponen yang sudah kita buat
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experiences from './components/Experiences';

// 2. Import data JSON
import dataJSON from './dataMahasiswa.json';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Memuat data dari JSON ke state
    setData(dataJSON);
  }, []);

  // Tampilkan loading jika data belum siap
  if (!data) return <div className="min-h-screen bg-[#111] text-white flex items-center justify-center">Loading...</div>;

  return (
    <div className="bg-[#111] min-h-screen text-gray-200 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            CV.<span className="text-white">Dev</span>
          </div>
          <ul className="flex gap-6 text-sm font-medium text-gray-300">
            <li><a href="#profile" className="hover:text-purple-400 transition-colors">Profile</a></li>
            <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
            <li><a href="#experiences" className="hover:text-purple-400 transition-colors">Exp</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Panggil Komponen dan kirim datanya sebagai 'props' */}
        <Profile data={data} />
        <Skills skills={data.skills} />
        <Experiences experiences={data.experiences} />
      </main>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-800">
        <p>© 2025 {data.name}. Dibuat dengan ReactJS & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
