interface EducationItem {
  year: string;
  institution: string;
  course: string;
  description: string;
}

const education: EducationItem[] = [
  {
    year: "2022 - 2024",
    institution: "Universidade XYZ",
    course: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    description: "Formação focada em desenvolvimento de software, banco de dados e metodologias ágeis.",
  },
  {
    year: "2023",
    institution: "Origamid",
    course: "UI Design para Iniciantes",
    description: "Curso completo de UI Design com foco em Figma, tipografia, cores e componentes.",
  },
  {
    year: "2023",
    institution: "Rocketseat",
    course: "Ignite - React",
    description: "Formação avançada em React, TypeScript e desenvolvimento de aplicações modernas.",
  },
];

const Education = () => {
  return (
    <section id="formacao" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* Section Title */}
          <div className="relative">
            <h2 className="section-title-bg absolute -left-4 top-0 select-none pointer-events-none">
              FOR<br />MA<br />ÇÃO
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8 relative z-10">
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                      {edu.year}
                    </span>
                    
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                        {edu.institution}
                      </h3>
                      
                      <p className="text-accent font-medium mb-3">
                        {edu.course}
                      </p>
                      
                      <p className="text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
