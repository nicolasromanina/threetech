import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import alarmImage from "@/assets/product-alarm.jpg";
import controllerImage from "@/assets/product-controller.jpg";
import devboardImage from "@/assets/product-devboard.jpg";
import rfidImage from "@/assets/product-rfid.jpg";
import fingerprintImage from "@/assets/product-fingerprint.jpg";
import energyImage from "@/assets/product-energy.jpg";

const products = [
  {
    title: "Centre d'alarmes 4 ou 8 zones",
    description: "Système de sécurité modulaire, fiable et évolutif pour tous types de bâtiments",
    image: alarmImage,
    features: ["4 ou 8 zones configurables", "Interface intuitive", "Notifications en temps réel"],
  },
  {
    title: "Contrôleur de ronde",
    description: "Solution de gestion de patrouilles pour entreprises et sites sensibles",
    image: controllerImage,
    features: ["Suivi GPS", "Rapports détaillés", "Robuste et étanche"],
  },
  {
    title: "Carte de développement PIC 16F877A",
    description: "Kit complet pour prototypage rapide, idéal développeurs et étudiants",
    image: devboardImage,
    features: ["Tous composants inclus", "Documentation complète", "Parfait pour l'apprentissage"],
  },
  {
    title: "Contrôle d'accès RFID",
    description: "Système de contrôle d'accès par carte RFID sécurisé et facile à installer",
    image: rfidImage,
    features: ["Lecture rapide", "Multi-utilisateurs", "Journal d'accès"],
  },
  {
    title: "Contrôle d'accès biométrique",
    description: "Solution de contrôle d'accès par empreinte digitale haute sécurité",
    image: fingerprintImage,
    features: ["Haute précision", "Mémoire 1000+ empreintes", "Résistant aux intempéries"],
  },
  {
    title: "Suivi de consommation électrique",
    description: "Moniteur intelligent pour analyse et optimisation de votre consommation énergétique",
    image: energyImage,
    features: ["Mesure en temps réel", "Historique détaillé", "Alertes de surconsommation"],
  },
];

const Products = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Produits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solutions électroniques professionnelles conçues et fabriquées par nos soins
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-large transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-accent mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className="w-full"
                  variant="outline"
                >
                  Demander un devis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
