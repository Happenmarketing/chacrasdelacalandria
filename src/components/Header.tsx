import { Button } from "@/components/ui/button";
import logoChacras from "@/assets/logo-chacras-official.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logoChacras} alt="Chacras de la Calandria" className="h-10 w-auto" />
          <span className="text-xl font-bold text-primary">Chacras de la Calandria</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#video" className="text-foreground hover:text-primary transition-colors">
            Video
          </a>
          <a href="#terrenos" className="text-foreground hover:text-primary transition-colors">
            Terrenos
          </a>
          <a href="#ubicacion" className="text-foreground hover:text-primary transition-colors">
            Ubicación
          </a>
          <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        <Button variant="default" className="bg-primary hover:bg-primary-hover text-primary-foreground">
          Consultar
        </Button>
      </div>
    </header>
  );
};

export default Header;