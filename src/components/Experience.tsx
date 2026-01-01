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
    year: "2024",
    title: "Projeto Alpha",
    role: "Desenvolvedor Front-End e UI/UX Designer",
    description: "Desenvolvimento de interfaces modernas e responsivas, utilizando React e Figma para criar experiências de usuário excepcionais.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    link: "#",
  },
  {
    year: "2023 - 2024",
    title: "Projeto Beta",
    role: "Desenvolvedor Full-Stack e Product Owner",
    description: "Liderança no desenvolvimento da plataforma, desde a definição das funcionalidades até a implementação completa do sistema.",
    skills: ["Next.js", "Node.js", "PostgreSQL", "UI Design"],
    link: "#",
  },
  {
    year: "2023",
    title: "Projeto Gamma",
    role: "Desenvolvedor Front-End",
    description: "Desenvolvimento de aplicações web performáticas com foco em usabilidade e acessibilidade.",
    skills: ["Vue.js", "JavaScript", "SCSS", "Git"],
    link: "#",
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
              Atuei no desenvolvimento de produtos digitais em diversos projetos, 
              contribuindo desde interfaces e experiência do usuário até estrutura 
              e funcionalidades-chave, sempre com foco em eficiência, usabilidade 
              e entrega de soluções modernas e funcionais.
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
