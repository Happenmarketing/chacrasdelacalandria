const VideoSection = () => {
  return <section id="video" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Descubrí Chacras de la Calandria</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Un proyecto de terrenos único en un entorno privilegiado</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-muted rounded-xl overflow-hidden shadow-strong">
            {/* Video Placeholder - Replace with actual video */}
            <div className="absolute inset-0 flex items-center justify-center bg-earth/10">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Video Promocional</h3>
                <p className="text-muted-foreground"></p>
              </div>
            </div>
            
            {/* Replace this div with actual video embed when available */}
            {/* 
             <iframe 
              className="w-full h-full"
              src="YOUR_VIDEO_URL_HERE"
              title="Chacras de la Calandria - Video Promocional"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
             ></iframe>
             */}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">*https://drive.google.com/file/d/14C-eST_aBFk_fRgY1OzbfPWc7Va1-R6I/view?usp=sharing.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default VideoSection;