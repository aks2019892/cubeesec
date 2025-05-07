import { Hammer, Settings } from 'lucide-react';
const BlogDisplay = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 relative overflow-hidden">
      {/* Spinning Gear Background */}
      <Settings className="absolute top-10 left-10 w-24 h-24 text-blue-400 animate-spin-slow opacity-100" />
      <Settings className="absolute bottom-10 right-10 w-32 h-32 text-purple-700 animate-spin-slow opacity-100" />

      {/* Hammer Animation */}
      <div className="relative mb-6">
        <div className="animate-hammer-bounce inline-block">
          <Hammer className="w-16 h-16 text-blue-400" />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent animate-bounce-slow mb-4">
        Under Construction
      </h1>

      <p className="text-gray-300 text-lg text-center max-w-md mb-6">
        We're building something awesome! Check back soon.
      </p>

      <div className="relative">
        <div className="w-40 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default BlogDisplay;
