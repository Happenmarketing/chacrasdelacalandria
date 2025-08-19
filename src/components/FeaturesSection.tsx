import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trees, MapPin, Home, CreditCard } from "lucide-react";

const features = [
  {
    Icon: Trees,
    title: "Entorno Natural",
    description: "Rodeado de naturaleza virgen, con vistas panorámicas y aire puro del campo."
  },
  {
    Icon: MapPin,
    title: "Ubicación Privilegiada",
    description: "Fácil acceso por ruta 8."
  },
  {
    Icon: Home,
    title: "Lotes Amplios",
    description: "Lotes de 3 hectáreas, perfectos para tu casa de campo ideal."
  },
  {
    Icon: CreditCard,
    title: "Financiación",
    description: "Planes de financiación flexibles y facilidades de pago adaptadas a vos."
  }
];

const FeaturesSection = () => {
  return (
    <section id="terrenos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            ¿Por qué elegir Chacras de La Calandria?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos mucho más que terrenos. Te brindamos la oportunidad de crear 
            tu refugio personal en un ambiente natural privilegiado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card border border-border"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:animate-float">
                  <feature.Icon 
                    size={48} 
                    className="text-primary group-hover:text-primary-glow transition-colors duration-300"
                  />
                </div>
                <CardTitle className="text-xl text-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;