import { Button } from "@/components/ui/button";
import gameLogo from "../assets/images/game-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-purple-300 rounded-full animate-pulse opacity-25"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-yellow-400 rounded-full animate-bounce opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Game Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={gameLogo} 
            alt="Match Treasures Game Logo" 
            className="max-w-md w-full h-auto drop-shadow-2xl animate-pulse"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
          Uncover Sweet Surprises in{" "}
          <span className="text-yellow-300 animate-pulse">Match Treasures!</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          Dive into a world of candy-coated puzzles and treasure-packed adventures. 
          Match, collect, and conquer – one sweet level at a time.
        </p>
        
        <Button 
          size="lg" 
          className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce"
        >
          🍭 Start Your Sweet Adventure
        </Button>
      </div>
    </section>
  );
};

export default Hero;
