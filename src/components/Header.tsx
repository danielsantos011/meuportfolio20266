const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-heading font-bold text-xl text-foreground">
          DANIEL SANTOS
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#experiencia" className="nav-link text-sm font-medium">
            Experiência
          </a>
          <a href="#formacao" className="nav-link text-sm font-medium">
            Formação
          </a>
          <a href="#contato" className="nav-link text-sm font-medium">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
