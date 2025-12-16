import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  Cpu, 
  Key, 
  Fingerprint, 
  Zap,
  CheckCircle2,
  ArrowRight,
  ShoppingCart,
  Info,
  Clock,
  Award,
  BarChart3
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
    icon: Shield,
    category: "Sécurité",
    tags: ["Sur mesure", "Installation incluse"],
    priceRange: "À partir de 899€ HT",
    leadTime: "2-3 semaines",
    specs: ["Autonomie 48h", "Certifié CE", "Garantie 3 ans"]
  },
  {
    title: "Contrôleur de ronde",
    description: "Solution de gestion de patrouilles pour entreprises et sites sensibles",
    image: controllerImage,
    features: ["Suivi GPS", "Rapports détaillés", "Robuste et étanche"],
    icon: Users,
    category: "Sécurité",
    tags: ["Mobile", "Rapports PDF"],
    priceRange: "À partir de 549€ HT",
    leadTime: "En stock",
    specs: ["IP67", "Batterie 7 jours", "Cloud optionnel"]
  },
  {
    title: "Carte de développement PIC 16F877A",
    description: "Kit complet pour prototypage rapide, idéal développeurs et étudiants",
    image: devboardImage,
    features: ["Tous composants inclus", "Documentation complète", "Parfait pour l'apprentissage"],
    icon: Cpu,
    category: "Éducation",
    tags: ["Kit débutant", "Tutos inclus"],
    priceRange: "À partir de 89€ HT",
    leadTime: "24-48h",
    specs: ["40 broches", "USB-C", "Exemples de code"]
  },
  {
    title: "Contrôle d'accès RFID",
    description: "Système de contrôle d'accès par carte RFID sécurisé et facile à installer",
    image: rfidImage,
    features: ["Lecture rapide", "Multi-utilisateurs", "Journal d'accès"],
    icon: Key,
    category: "Contrôle d'accès",
    tags: ["Sans-fil", "Scalable"],
    priceRange: "À partir de 399€ HT",
    leadTime: "1 semaine",
    specs: ["1000+ utilisateurs", "PoE", "Anti-tailgating"]
  },
  {
    title: "Contrôle d'accès biométrique",
    description: "Solution de contrôle d'accès par empreinte digitale haute sécurité",
    image: fingerprintImage,
    features: ["Haute précision", "Mémoire 1000+ empreintes", "Résistant aux intempéries"],
    icon: Fingerprint,
    category: "Contrôle d'accès",
    tags: ["Haute sécurité", "Industriel"],
    priceRange: "À partir de 749€ HT",
    leadTime: "2-3 semaines",
    specs: ["FAR 0.001%", "IP65", "Backup batterie"]
  },
  {
    title: "Suivi de consommation électrique",
    description: "Moniteur intelligent pour analyse et optimisation de votre consommation énergétique",
    image: energyImage,
    features: ["Mesure en temps réel", "Historique détaillé", "Alertes de surconsommation"],
    icon: Zap,
    category: "Énergie",
    tags: ["Économies", "Connecté"],
    priceRange: "À partir de 299€ HT",
    leadTime: "En stock",
    specs: ["CT Clamps", "WiFi/4G", "API disponible"]
  },
];

const ProductModal = ({ product }: { product: typeof products[0] }) => {
  return (
    <DialogContent className="max-w-4xl p-0 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image section */}
        <div className="relative h-[500px] md:h-auto">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary/90 backdrop-blur-sm">
              {product.category}
            </Badge>
          </div>
        </div>
        
        {/* Content section */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {product.title}
              </h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            <product.icon className="h-8 w-8 text-primary" />
          </div>

          {/* Price & availability */}
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Prix</p>
                <p className="text-2xl font-bold text-foreground">{product.priceRange}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Délai de livraison</p>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-semibold">{product.leadTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Award className="h-4 w-4" />
              Spécifications techniques
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Principales fonctionnalités
            </h4>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <Button className="w-full gap-2">
              <ShoppingCart className="h-4 w-4" />
              Demander un devis personnalisé
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Info className="h-4 w-4" />
              Documentation technique
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const categories = ["Tous", ...Array.from(new Set(products.map(p => p.category)))];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredProducts = selectedCategory === "Tous" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-small-black/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero section */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-primary/20 bg-primary/5">
            <Zap className="h-3 w-3 mr-2" />
            Produits en stock et sur mesure
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Nos <span className="text-primary">Solutions</span> Électroniques
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Produits professionnels conçus, testés et fabriqués dans nos ateliers
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`
                rounded-full px-5 transition-all duration-300
                ${selectedCategory === category 
                  ? 'bg-primary shadow-lg shadow-primary/20' 
                  : 'hover:border-primary/50 hover:bg-primary/5'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {filteredProducts.map((product, index) => (
            <Dialog key={index}>
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
              >
                <DialogTrigger asChild>
                  <Card
                    className={`
                      group relative h-full overflow-hidden cursor-pointer
                      border-2 border-border/50 bg-card/50 backdrop-blur-sm
                      hover:border-primary/30 hover:shadow-2xl
                      transition-all duration-500
                      ${hoveredIndex === index ? 'scale-[1.02]' : ''}
                    `}
                  >
                    {/* Hot badge */}
                    {product.leadTime === "En stock" && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-green-500/90 backdrop-blur-sm animate-pulse">
                          Stock ✓
                        </Badge>
                      </div>
                    )}

                    {/* Image container */}
                    <div className="relative h-52 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-10" />
                      <img
                        src={product.image}
                        alt={product.title}
                        className={`
                          w-full h-full object-cover
                          transition-all duration-700
                          ${hoveredIndex === index ? 'scale-110 brightness-110' : 'scale-100 brightness-90'}
                        `}
                      />
                      
                      {/* Category badge */}
                      <div className="absolute bottom-4 left-4 z-20">
                        <Badge variant="secondary" className="backdrop-blur-sm">
                          {product.category}
                        </Badge>
                      </div>

                      {/* Icon overlay */}
                      <div className="absolute top-4 left-4 z-20">
                        <div className="p-2.5 rounded-xl bg-card/80 backdrop-blur-sm">
                          <product.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                            {product.title}
                          </CardTitle>
                          <div className="text-primary font-bold text-sm">
                            {product.priceRange.split(' ')[0]}
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {product.description}
                        </p>
                      </CardHeader>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary/90 border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Features preview */}
                      <ul className="space-y-2 mb-6">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-foreground/80">
                            <CheckCircle2 className="h-3.5 w-3.5 text-accent mr-2 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </li>
                        ))}
                        <li className="flex items-center text-sm text-primary font-medium">
                          <ArrowRight className="h-3.5 w-3.5 mr-2" />
                          Voir toutes les fonctionnalités
                        </li>
                      </ul>

                      {/* Quick info */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-6 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {product.leadTime}
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="h-3 w-3" />
                          Garantie incluse
                        </div>
                      </div>

                      {/* CTA */}
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full group/btn gap-2"
                        >
                          <Info className="h-4 w-4" />
                          Détails du produit
                          <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                        </Button>
                      </DialogTrigger>
                    </CardContent>

                    {/* Hover effect */}
                    <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/10 transition-all duration-500 rounded-[inherit]" />
                  </Card>
                </DialogTrigger>

                {/* Quick action for mobile */}
                <div className="absolute bottom-20 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:hidden">
                  <Button size="icon" className="rounded-full shadow-lg">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <ProductModal product={product} />
            </Dialog>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-20 pt-16 border-t border-border/50">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 mb-8">
              <Award className="h-5 w-5 text-primary" />
              <p className="text-foreground/90 font-medium">
                Besoin d'une solution personnalisée ?
                <span className="text-primary font-semibold ml-2">Nous concevons sur mesure</span>
              </p>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Un projet spécifique en tête ?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Notre équipe d'ingénieurs peut adapter nos produits ou en créer de nouveaux selon vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="outline" 
                className="gap-3 group"
                onClick={scrollToContact}
              >
                <span>Demander un devis personnalisé</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="xl" 
                className="gap-3 group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/20"
                onClick={scrollToContact}
              >
                <span>Parler à un expert</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;