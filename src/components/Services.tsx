import { useState } from "react";
import { Globe, Code, Cpu, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import webImage from "@/assets/service-web.jpg";
import softwareImage from "@/assets/service-software.jpg";
import electronicsImage from "@/assets/service-electronics.jpg";

const services = [
  {
    icon: Globe,
    title: "Création de sites web",
    description: "Sites web performants conçus par des experts",
    image: webImage,
    features: [
      "Sites vitrine, catalogue, e-commerce",
      "Design responsive et moderne",
      "Hébergement & nom de domaine",
      "Référencement SEO optimisé",
      "Maintenance et suivi technique",
    ],
    color: "from-blue-500/10 to-blue-600/5",
    buttonColor: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
    stats: "Délai moyen : 4-6 semaines",
    cta: "Obtenir un devis gratuit"
  },
  {
    icon: Code,
    title: "Développement logiciel",
    description: "Solutions sur mesure pour transformer votre vision",
    image: softwareImage,
    features: [
      "Analyse du cahier des charges",
      "Solutions clé en main personnalisées",
      "Applications web et desktop",
      "APIs et intégrations",
      "Support et évolutions",
    ],
    color: "from-purple-500/10 to-purple-600/5",
    buttonColor: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
    stats: "+50 projets livrés",
    cta: "Discuter de votre projet"
  },
  {
    icon: Cpu,
    title: "Ingénierie électronique",
    description: "Innovation matérielle pour vos produits intelligents",
    image: electronicsImage,
    features: [
      "Conception de circuits PCB",
      "Développement Software & Hardware",
      "Du prototype à la production",
      "Tests fonctionnels complets",
      "Microcontrôleurs (PIC, ESP32, STM32)",
    ],
    color: "from-emerald-500/10 to-emerald-600/5",
    buttonColor: "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800",
    stats: "Prototypage en 2 semaines",
    cta: "Démarrer un prototype"
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-muted/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Nos domaines d'expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Services <span className="text-primary">Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trois pôles d'excellence technologique pour concrétiser vos ambitions numériques
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Badge mobile */}
              <div className="absolute -top-3 right-6 z-10">
                <div className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium shadow-sm">
                  {service.stats}
                </div>
              </div>

              <Card
                className={`
                  group relative h-full overflow-hidden
                  border-2 border-border/50
                  hover:border-primary/30
                  transition-all duration-500
                  hover:shadow-2xl hover:-translate-y-2
                  ${hoveredIndex === index ? 'ring-2 ring-primary/20' : ''}
                `}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Image avec overlay amélioré */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`
                      w-full h-full object-cover
                      transition-all duration-700
                      ${hoveredIndex === index ? 'scale-110' : 'scale-100'}
                      brightness-90 group-hover:brightness-100
                    `}
                  />
                  
                  {/* Icone avec animation */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className={`
                      p-3 rounded-2xl backdrop-blur-sm bg-background/80
                      transition-all duration-500
                      group-hover:scale-110 group-hover:bg-primary/20
                    `}>
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  {/* Badge desktop */}
                  <div className="absolute bottom-4 right-6 z-20 hidden lg:block">
                    <div className="px-3 py-1.5 rounded-full bg-background/95 backdrop-blur-sm text-xs font-medium shadow-sm">
                      {service.stats}
                    </div>
                  </div>
                </div>

                <CardContent className="relative p-8">
                  {/* En-tête avec séparateur animé */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                      <ChevronRight className="inline-block ml-2 h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-transparent mt-4 group-hover:w-24 transition-all duration-500" />
                  </div>

                  {/* Liste des fonctionnalités */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-foreground/90 group/item"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                        <span className="text-sm leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button avec effet de profondeur */}
                  <div className="relative">
                    <div className={`absolute inset-0 ${service.buttonColor.replace('bg-', 'bg-')} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    <Button
                      className={`
                        w-full relative
                        ${service.buttonColor}
                        text-white
                        hover:shadow-lg
                        transition-all duration-300
                        group/button
                        overflow-hidden
                      `}
                      size="lg"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {service.cta}
                        <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </span>
                      
                      {/* Effet de hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-1000" />
                    </Button>
                  </div>
                </CardContent>

                {/* Effet de bordure animée */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/10 transition-all duration-700 rounded-[inherit]" />
              </Card>

              {/* Indicateur de focus pour mobile */}
              <div className={`
                absolute -bottom-2 left-1/2 transform -translate-x-1/2
                h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                lg:hidden
              `} />
            </div>
          ))}
        </div>

        {/* Section d'appel à l'action globale */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-border mb-8">
              <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
              <p className="text-foreground/90 font-medium">
                Vous avez un projet multi-disciplinaire ?
                <span className="text-primary font-semibold ml-2">Nos équipes collaborent</span>
              </p>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Besoin d'une solution complète ?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Combinez nos expertises pour un projet technologique intégré, de la carte électronique à l'interface utilisateur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="outline" className="gap-3 group">
                <span>Voir nos réalisations</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" className="gap-3 group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <span>Contactez nos experts</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;