import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* Section Title */}
          <div className="relative">
            <h2 className="section-title-bg absolute -left-4 top-0 select-none pointer-events-none">
              CON<br />TA<br />TO
            </h2>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <p className="text-lg text-foreground/80 max-w-2xl mb-12">
              Interessado em trabalhar juntos? Sinta-se à vontade para entrar em 
              contato através de qualquer um dos canais abaixo.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <a
                  href="mailto:seuemail@email.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Mail className="w-5 h-5 text-foreground group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      danielsdcruz01@email.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+5511999999999"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Phone className="w-5 h-5 text-foreground group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      +55 (11) 93088-1957
                    </p>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-heading font-bold text-lg mb-6">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/daniel-santos-cruz-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-foreground group-hover:text-accent-foreground transition-colors" />
                  </a>
                  <a
                    href="https://github.com/danielsantos011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors group"
                  >
                    <Github className="w-5 h-5 text-foreground group-hover:text-accent-foreground transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
