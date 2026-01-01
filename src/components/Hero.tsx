import { MapPin } from "lucide-react";
import profilePhoto from "@/assets/daniel.png";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative animate-fade-in order-1 lg:order-1">
            <div className="relative w-72 h-80 md:w-96 md:h-[28rem] mx-auto lg:mx-0">
              {/* Background decoration */}
              <div className="absolute inset-0 accent-gradient rotate-6 rounded-lg" />
              <div className="absolute inset-0 bg-primary -rotate-3 rounded-lg" />
              {/* Profile photo */}
              <img 
                src={profilePhoto} 
                alt="Foto de perfil" 
                className="relative w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 accent-gradient rotate-45" />
              <div className="w-4 h-4 accent-gradient rotate-45 opacity-60" />
            </div>
            
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
              Desenvolvedor<br />
              Back End &<br />
              Databsae
            </h1>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Localizado em São Paulo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
