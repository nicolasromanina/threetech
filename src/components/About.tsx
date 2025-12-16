import { useState, useEffect } from "react";
import { Target, Users, Award, Globe, TrendingUp, Heart, Sparkles, ChevronRight, Star, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const [animatedValues, setAnimatedValues] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const animateCounter = (target: number, duration: number, setter: (val: number) => void) => {
      let start = 0;
      const increment = target / (duration / 16); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setter(Math.floor(start));
      }, 16);
    };

    animateCounter(120, 1500, (val) => setAnimatedValues(v => ({ ...v, projects: val })));
    animateCounter(85, 1500, (val) => setAnimatedValues(v => ({ ...v, clients: val })));
    animateCounter(98, 1500, (val) => setAnimatedValues(v => ({ ...v, satisfaction: val })));
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Solutions robustes et durables testées en conditions réelles",
      color: "from-blue-500/20 to-blue-600/10"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Veille technologique constante et adoption des dernières avancées",
      color: "from-purple-500/20 to-purple-600/10"
    },
    {
      icon: Heart,
      title: "Engagement",
      description: "Accompagnement personnalisé de l'idée à la réalisation",
      color: "from-pink-500/20 to-pink-600/10"
    },
    {
      icon: Globe,
      title: "Impact Local",
      description: "Développement de solutions adaptées au contexte malgache",
      color: "from-emerald-500/20 to-emerald-600/10"
    }
  ];

  const milestones = [
    { year: "2019", event: "Création de Threetech", highlight: true },
    { year: "2020", event: "Premier projet industriel", highlight: false },
    { year: "2021", event: "Expansion de l'équipe", highlight: false },
    { year: "2022", event: "Certification qualité", highlight: true },
    { year: "2023", event: "Ouverture internationale", highlight: false },
    { year: "2024", event: "+100 projets livrés", highlight: true },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute inset-0 bg-grid-small-black/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero section */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-primary/20 bg-primary/5 group hover:bg-primary/10 transition-colors">
            <Sparkles className="h-3 w-3 mr-2 group-hover:rotate-12 transition-transform" />
            Notre histoire et valeurs
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Plus qu'un prestataire, <span className="text-primary">votre partenaire</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depuis 2019, nous accompagnons la transformation numérique à Madagascar avec passion et expertise
          </p>
        </div>

        {/* Stats counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 group hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <span className="text-4xl font-bold text-foreground">
                +{animatedValues.projects}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Projets livrés</h3>
            <p className="text-muted-foreground text-sm">
              Solutions technologiques déployées avec succès
            </p>
            <Progress value={90} className="mt-4 h-1.5" />
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-500 group hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-accent/10 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <span className="text-4xl font-bold text-foreground">
                {animatedValues.clients}+
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Clients satisfaits</h3>
            <p className="text-muted-foreground text-sm">
              Entreprises, startups et institutions publiques
            </p>
            <Progress value={85} className="mt-4 h-1.5 bg-accent/20" />
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 group hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <span className="text-4xl font-bold text-foreground">
                {animatedValues.satisfaction}%
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Satisfaction client</h3>
            <p className="text-muted-foreground text-sm">
              Taux de satisfaction mesuré sur nos projets
            </p>
            <Progress value={98} className="mt-4 h-1.5" />
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
            <h3 className="text-2xl font-bold text-foreground text-center">
              Notre parcours en quelques dates
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:col-start-2'}`}
                >
                  {/* Timeline dot */}
                  <div className={`
                    absolute left-1/2 md:left-auto top-6
                    ${index % 2 === 0 ? 'md:right-[-8px]' : 'md:left-[-8px]'}
                    transform -translate-x-1/2 md:translate-x-0
                    w-4 h-4 rounded-full border-4 border-background
                    ${milestone.highlight ? 'bg-primary animate-pulse' : 'bg-accent'}
                    z-10
                  `} />
                  
                  <div className={`
                    bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50
                    hover:border-primary/30 hover:shadow-lg transition-all duration-300
                    ${milestone.highlight ? 'ring-1 ring-primary/20' : ''}
                  `}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                      <Clock className="h-3 w-3" />
                      {milestone.year}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {milestone.event}
                    </h4>
                    {milestone.highlight && (
                      <div className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        <span>Événement marquant</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Nos <span className="text-primary">valeurs</span> fondamentales
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident chaque décision et chaque action chez Threetech
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                <div className={`
                  absolute inset-0 ${value.color} opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 rounded-2xl
                `} />
                
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 group-hover:border-transparent transition-all duration-500 h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Animated underline */}
                  <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-transparent mt-4 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission statement */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-3xl blur-xl opacity-50" />
          
          <div className="relative bg-card/80 backdrop-blur-sm p-10 md:p-12 rounded-2xl border border-border/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full translate-y-20 -translate-x-20" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-8">
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Notre mission : accélérer la transformation numérique
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Chez Threetech, nous croyons que la technologie doit être accessible, 
                    utile et durable. Notre mission est de mettre l'innovation au service 
                    du développement économique et social de Madagascar en fournissant des 
                    solutions adaptées, évolutives et économiquement viables.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="gap-2 group">
                      Rencontrer notre équipe
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" className="gap-2 group">
                      Voir nos projets
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Team specialties */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">W</span>
                  </div>
                  <div>
                    <p className="font-semibold">Web & Mobile</p>
                    <p className="text-sm text-muted-foreground">Développeurs fullstack</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <span className="text-purple-600 font-bold">E</span>
                  </div>
                  <div>
                    <p className="font-semibold">Électronique</p>
                    <p className="text-sm text-muted-foreground">Ingénieurs hardware</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-600 font-bold">D</span>
                  </div>
                  <div>
                    <p className="font-semibold">Design & UX</p>
                    <p className="text-sm text-muted-foreground">Experts utilisabilité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;