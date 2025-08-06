import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const ContactSection = () => {
  return <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contactanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para conocer tu futuro hogar en el campo? Estamos aquí para 
            ayudarte en cada paso del camino.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium border border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Solicita Información
              </CardTitle>
              <p className="text-muted-foreground">
                Completa el formulario y nos pondremos en contacto contigo a la brevedad.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nombre
                  </label>
                  <Input placeholder="Tu nombre" className="border-input" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Apellido
                  </label>
                  <Input placeholder="Tu apellido" className="border-input" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="tu@email.com" className="border-input" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Teléfono
                </label>
                <Input placeholder="+598 99 123 456" className="border-input" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Mensaje
                </label>
                <Textarea placeholder="Contanos qué tipo de terreno buscas, presupuesto, o cualquier consulta..." rows={4} className="border-input" />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3">
                Enviar Consulta
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-soft border border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Teléfono</h3>
                    <p className="text-muted-foreground">+59811 1234-5678</p>
                    <p className="text-muted-foreground">WhatsApp disponible</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nature rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Email</h3>
                    <p className="text-muted-foreground">info@chacrasdelacalandria.com</p>
                    <p className="text-muted-foreground">ventas@chacrasdelacalandria.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-earth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Horarios de Atención</h3>
                    <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Sábados: 9:00 - 13:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;