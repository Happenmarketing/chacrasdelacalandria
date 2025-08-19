import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";
import natureBg from "@/assets/nature-bg.jpg";
const LocationSection = () => {
  return <section id="ubicacion" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ubicación Privilegiada
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Chacras de La Calandria se encuentra estratégicamente ubicado para ofrecerte 
              la tranquilidad del campo sin alejarte de la comodidad de la ciudad.
            </p>

            <div className="space-y-6">
              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-nature rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Accesos Principales</h3>
                      <p className="text-muted-foreground">A 10 km de Atlántida, cerca de todos los servicios.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-nature rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Conectividad</h3>
                      <p className="text-muted-foreground">
                        30' de Montevideo y 45' de Punta del Este.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-nature rounded-lg flex items-center justify-center flex-shrink-0">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Cercanía del aeropuerto</h3>
                      <p className="text-muted-foreground">A solo 25' del aeropuerto de Carrasco.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="relative rounded-xl overflow-hidden shadow-strong">
              
              
            </div>
            
            {/* Mapa de lotes */}
            <Card id="plano-loteo" className="mt-6 border border-border">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img src="/lovable-uploads/1b00c1f3-c440-437b-bfd6-3e41088c081b.png" alt="Mapa de lotes Chacras de La Calandria" className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-primary mb-2">Plano de Loteo</h3>
                  <p className="text-sm text-muted-foreground">
                    20 lotes exclusivos con acceso directo desde Ruta 8
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default LocationSection;