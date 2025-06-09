
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import gameplay1 from "../assets/images/gameplay-1.png";
import gameplay2 from "../assets/images/gameplay-2.png";
import gameplay3 from "../assets/images/gameplay-3.png";

const FeatureHighlights = () => {
  const features = [
    {
      icon: "🍭",
      title: "Enjoy New Levels",
      description: "With fresh puzzles added regularly, the challenge never ends! Think fast, match faster, and beat your own high score.",
      gradient: "from-pink-400 to-purple-500",
      image: gameplay1
    },
    {
      icon: "🧠",
      title: "Challenge Yourself",
      description: "Strategize every move to clear the most vibrant and chaotic puzzle boards. Perfect for brainy fun with a twist of sweetness.",
      gradient: "from-purple-400 to-blue-500",
      image: gameplay2
    },
    {
      icon: "💰",
      title: "Unlock Hidden Treasures",
      description: "Open chests, gather coins, and uncover hidden goodies that make every win feel golden.",
      gradient: "from-yellow-400 to-orange-500",
      image: gameplay3
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-800 mb-16 animate-fade-in">
          🚀 Feature Highlights
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <CardHeader className={`bg-gradient-to-r ${feature.gradient} text-white p-8`}>
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <CardTitle className="text-2xl text-center font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 bg-white">
                <div className="relative">
                  <img 
                    src={feature.image} 
                    alt={`${feature.title} gameplay screenshot`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-lg leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
