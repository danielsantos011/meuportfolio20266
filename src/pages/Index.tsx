import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
