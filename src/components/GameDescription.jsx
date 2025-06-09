
const GameDescription = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-8 animate-fade-in">
            🎮 Game Description
          </h2>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Welcome to <span className="font-bold text-purple-600">Match Treasures</span> – the ultimate match-3 adventure where sugary delights meet sparkling treasure! Bursting with candy, coins, and color, this game brings joy to your fingertips.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Solve whimsical puzzles, unlock magical chests, and challenge your mind in a world as vibrant as your imagination. Whether you're in line or on the couch, one tap and you're off on a sweet escape.
            </p>
            
            <div className="bg-gradient-to-r from-yellow-200 to-pink-200 rounded-2xl p-6 mt-8">
              <p className="text-lg italic text-purple-800 font-medium">
                "This is the candy game that actually rewards your brain."
              </p>
              <p className="text-sm text-purple-600 mt-2">– A very happy player 🍬</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDescription;
