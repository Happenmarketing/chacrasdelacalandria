const logoChacras = "/lovable-uploads/54bd9870-79af-49bb-86d3-930fd438b148.png";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoChacras} alt="Chacras de La Calandria" className="h-12 w-auto" />
              <span className="text-lg font-bold">Chacras de La Calandria</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Tu lugar en el campo. Terrenos exclusivos en un entorno natural privilegiado.
            </p>
            
          </div>

          {/* Quick Links */}
          

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>📞 +598991111</li>
              <li>✉️ info@chacrasdelacalandria.com</li>
              
              <li>🕒 Lun - Vie: 9:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">© 2025 Chacras de La Calandria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;