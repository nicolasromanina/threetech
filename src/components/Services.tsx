import { Globe, Code, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import webImage from "@/assets/service-web.jpg";
import softwareImage from "@/assets/service-software.jpg";
import electronicsImage from "@/assets/service-electronics.jpg";

const services = [
  {
    icon: Globe,
    title: "Création de sites web",
    description: "Sites web sur mesure conçus par des designers expérimentés",
    image: webImage,
    features: [
      "Sites vitrine, catalogue, e-commerce",
      "Design responsive et moderne",
      "Hébergement & nom de domaine",
      "Référencement SEO optimisé",
      "Maintenance et suivi technique",
    ],
  },
  {
    icon: Code,
    title: "Développement logiciel",
    description: "Applications et logiciels sur mesure pour tous secteurs",
    image: softwareImage,
    features: [
      "Analyse du cahier des charges",
      "Solutions clé en main personnalisées",
      "Applications web et desktop",
      "APIs et intégrations",
      "Support et évolutions",
    ],
  },
  {
    icon: Cpu,
    title: "Ingénierie électronique",
    description: "Conception de cartes électroniques et systèmes embarqués",
    image: electronicsImage,
    features: [
      "Conception de circuits PCB",
      "Développement Software & Hardware",
      "Du prototype à la production",
      "Tests fonctionnels complets",
      "Microcontrôleurs (PIC, ESP32, STM32)",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trois pôles d'expertise pour répondre à tous vos besoins technologiques
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-large transition-all duration-300 overflow-hidden border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-12 w-12 text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-foreground">
                      <span className="text-accent mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
