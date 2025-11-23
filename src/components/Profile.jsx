import { Github, Linkedin, Mail, MapPin, User, ChevronDown } from 'lucide-react';

const Profile = ({ data }) => {
  return (
    <section id="profile" className="min-h-screen flex flex-col justify-center items-center pt-20 relative overflow-hidden">
      <div className="absolute top-20 left-[-10%] w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-[-10%] w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto backdrop-blur-sm bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl">
        <div className="relative inline-block">
          <img 
            src={data.profilePic} 
            alt={data.name} 
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-purple-500 shadow-lg mb-6 mx-auto hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
          {data.name}
        </h1>
        <p className="text-xl text-gray-400 mb-4 font-mono">{data.nim} | {data.prodi}</p>
        
        <div className="flex flex-wrap justify-center gap-4 text-gray-300 mb-8 text-sm md:text-base">
          <div className="flex items-center gap-1">
             <User size={16} className="text-purple-400" /> {data.campus}
          </div>
          <div className="flex items-center gap-1">
             <MapPin size={16} className="text-pink-400" /> {data.location}
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
          "{data.bio}"
        </p>

        <div className="flex justify-center gap-4">
          <a href={data.socials.github} target="_blank" rel="noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 border border-gray-700">
            <Github size={24} />
          </a>
          <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 border border-gray-700">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${data.email}`} className="p-3 bg-gray-800 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 border border-gray-700">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-gray-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Profile;