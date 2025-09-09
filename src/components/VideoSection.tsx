
const VideoSection = () => {
  return <section id="video" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Descubrí Chacras de La Calandria</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Un proyecto de terrenos único en un entorno privilegiado</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-muted rounded-xl overflow-hidden shadow-strong">
            <iframe 
              className="w-full h-full"
              src="https://drive.google.com/file/d/1jetSfjidJ5iI9n1wpqPhuHdcvtcfx5eo/preview"
              title="Chacras de La Calandria - Video Promocional"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => console.log("Video cargado exitosamente")}
              onError={() => console.log("Error cargando video")}
            ></iframe>
          </div>

        </div>
      </div>
    </section>;
};

export default VideoSection;
