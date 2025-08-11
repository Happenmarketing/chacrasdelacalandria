import { Button } from "@/components/ui/button";
const logoChacras = "/lovable-uploads/54bd9870-79af-49bb-86d3-930fd438b148.png";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logoChacras} alt="Chacras de La Calandria" className="h-24 w-auto" />
          <div className="flex flex-col">
            
            
          </div>
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
          
        </nav>

        <Button variant="default" className="bg-primary hover:bg-primary-hover text-primary-foreground">
          Contacto
        </Button>
      </div>
    </header>;
};
export default Header;