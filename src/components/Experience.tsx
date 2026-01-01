import { ExternalLink } from "lucide-react";

interface ExperienceItem {
  year: string;
  title: string;
  role: string;
  description: string;
  skills: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    year: "2025",
    title: "Visão Perifa",
    role: "Desenvolvedor Front-End",
    description: "Desenvolvimento de interfaces modernas e responsivas, utilizando React e Figma para criar experiências de usuário excepcionais.",
    skills: ["CSS", "HTML", "Tailwind CSS", "Figma", "JavaScript"],
    link: "https://visaoperifa.site/",
  },

];

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* Section Title */}
          <div className="relative">
            <h2 className="section-title-bg absolute -left-4 top-0 select-none pointer-events-none">
              EXPE<br />RIÊN<br />CIA
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8 relative z-10">
            <p className="text-lg text-foreground/80 max-w-2xl mb-12">
              Atuei no desenvolvimento sistemas para web com foco no desenvolvimento estético
              e lógico da aplicação. Possibilitando uma experiência inovadora para o consumidor
              final do projeto.
            </p>

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <a
                  key={index}
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-card block group hover:bg-card rounded-r-lg p-6 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                      {exp.year}
                    </span>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-accent transition-colors">
                          {exp.title}
                        </h3>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                      </div>
                      
                      <p className="text-sm font-medium text-foreground/70 mb-3">
                        {exp.role}
                      </p>
                      
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
