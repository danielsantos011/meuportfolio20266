interface EducationItem {
  year: string;
  institution: string;
  course: string;
  description: string;
}

const education: EducationItem[] = [
  {
    year: "2023 - 2026",
    institution: "Etec Carolina Carinhato Sampaio",
    course: "Eletrônica",
    description: "Formação com base em eletrônica aplicada e fundamentos de tecnologia, incluindo programação, lógica computacional, banco de dados, sistemas embarcados e noções de desenvolvimento de software.",
  },
  {
    year: "2025",
    institution: "Rocketseat",
    course: "Minicurso de Java",
    description: "Introdução prática ao desenvolvimento back-end com Java, trabalhando conceitos de sintaxe, POO, APIs e fundamentos para construção de aplicações modernas.",
  },
  {
    year: "2025",
    institution: "Rocketseat",
    course: "Navegação com Expo Router - React Native",
    description: "Estudo focado na criação de aplicativos mobile com React Native, explorando rotas, navegação estruturada, organização de projeto e boas práticas.",
  },
  {
    year: "2025",
    institution: "IOS - Instituto de Oportunidade Social",
    course: "Programação Web",
    description: "Formação em desenvolvimento web com foco em HTML, CSS, JavaScript, lógica de programação, criação de páginas responsivas e introdução a frameworks.",
  },
  {
    year: "2025",
    institution: "Rocketseat",
    course: "Introdução ao Go",
    description: "Curso introdutório de Go abordando sintaxe da linguagem, estrutura de projetos, concorrência básica e criação de aplicações simples.",
  },
  {
    year: "2024",
    institution: "Rocketseat",
    course: "Curso Online de PHP - PHP",
    description: "Aprendizado em desenvolvimento back-end com PHP, incluindo manipulação de dados, integração com banco de dados e criação de aplicações web básicas.",
  },
  {
    year: "2024",
    institution: "Associação Cedro do Líbano",
    course: "Informática com Integração ao Pacote Office",
    description: "Formação em informática com foco em sistemas operacionais, internet, digitação, organização de arquivos e domínio das ferramentas do Pacote Office (Word, Excel e PowerPoint).",
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
