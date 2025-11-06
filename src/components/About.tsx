import { Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              À propos de Threetech
            </h2>
            <p className="text-xl text-muted-foreground">
              Votre partenaire technologique de confiance à Madagascar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-card rounded-lg shadow-soft">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Expertise</h3>
              <p className="text-muted-foreground">
                Plus de 5 ans d'expérience dans les technologies de pointe
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-soft">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Proximité</h3>
              <p className="text-muted-foreground">
                Accompagnement personnalisé et suivi dédié pour chaque projet
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-soft">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Solutions sur mesure adaptées aux dernières technologies
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-medium">
            <h3 className="text-2xl font-bold text-foreground mb-4">Notre mission</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Threetech s'engage à fournir des solutions technologiques innovantes et sur mesure 
              pour accompagner la transformation digitale des entreprises, administrations et 
              particuliers à Madagascar et au-delà.
            </p>
            <p className="text-lg text-muted-foreground">
              Notre équipe d'ingénieurs, designers et développeurs passionnés met son expertise 
              au service de vos projets, du conseil initial jusqu'à la maintenance, en garantissant 
              qualité, fiabilité et innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
