import { Button } from "@/components/ui/button";
import heroAerial from "@/assets/hero-aerial-real.jpg";
const HeroSection = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url(/lovable-uploads/9b3077c6-2a6a-4ec3-bdc3-ccc75865d661.png)`,
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/1ff87c24-1955-42ff-a424-82d34e02c333.png?v=1734117900&cache=bust" 
              alt="Chacras de La Calandria" 
              className="h-32 md:h-48 mx-auto filter drop-shadow-lg"
              onLoad={() => console.log("Logo cargado exitosamente")}
              onError={() => console.log("Error cargando logo")}
            />
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Terrenos exclusivos en un entorno natural privilegiado, 
            donde la tranquilidad y la belleza se encuentran.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-earth font-semibold px-8 py-4 text-lg shadow-medium"
              onClick={() => document.getElementById('plano-loteo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Descubrí los Terrenos Disponibles
            </Button>
            
          </div>

          <div className="mt-12 animate-float">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-300">
              <span>Deslizá para ver más</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;