import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Zap, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    projects: 0,
    satisfaction: 0,
  });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation d'entrée
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation des statistiques
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const animateValue = (
            start: number,
            end: number,
            duration: number,
            setter: (value: number) => void
          ) => {
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min(
                (timestamp - startTimestamp) / duration,
                1
              );
              const value = Math.floor(progress * (end - start) + start);
              setter(value);
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            window.requestAnimationFrame(step);
          };

          animateValue(0, 5, 2000, (val) =>
            setAnimatedStats((prev) => ({ ...prev, years: val }))
          );
          animateValue(0, 50, 2000, (val) =>
            setAnimatedStats((prev) => ({ ...prev, projects: val }))
          );
          animateValue(0, 100, 2000, (val) =>
            setAnimatedStats((prev) => ({ ...prev, satisfaction: val }))
          );
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background avec effet parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Gradient dynamique */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        {/* Effet de particules subtil */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-accent/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-1/4 left-10 opacity-20 animate-pulse">
        <Sparkles className="w-12 h-12 text-accent" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-20 animate-pulse delay-1000">
        <Zap className="w-12 h-12 text-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge d'expertise */}
          <div
            className={`inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-primary-foreground/20 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Expert certifié • Solutions sur mesure
            </span>
          </div>

          {/* Titre principal avec animation */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block mb-4">Solutions</span>
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Informatiques & Électroniques
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent rounded-full" />
            </span>
            <span className="block mt-4">sur mesure</span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg md:text-xl lg:text-2xl text-primary-foreground/85 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Développement web avancé, logiciels innovants et ingénierie
            électronique de précision.{" "}
            <span className="font-semibold text-accent">
              Transformons vos idées en réalité.
            </span>
          </p>

          {/* Liste de points clés */}
          <div
            className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              "Développement sur mesure",
              "Support technique 7j/7",
              "Livraison rapide",
              "Approche agile",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-primary-foreground/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-foreground/10 hover:border-accent/30 transition-all duration-300 hover:scale-105"
              >
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Boutons CTA avec animation */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground text-lg px-10 py-7 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 transform-gpu"
            >
              <span className="flex items-center">
                Demander un devis gratuit
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="group bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-lg px-10 py-7 rounded-xl backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 transform-gpu"
            >
              <span className="flex items-center">
                Explorer nos services
                <svg
                  className="ml-3 w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Button>
          </div>

          {/* Statistiques améliorées */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-24 pt-16 border-t border-primary-foreground/20 backdrop-blur-sm bg-primary-foreground/5 rounded-2xl p-8 mx-auto max-w-4xl"
          >
            {[
              {
                value: animatedStats.years,
                suffix: "+",
                label: "Ans d'expérience",
                icon: <Sparkles className="w-6 h-6" />,
                color: "from-blue-400 to-cyan-400",
              },
              {
                value: animatedStats.projects,
                suffix: "+",
                label: "Projets réussis",
                icon: <Zap className="w-6 h-6" />,
                color: "from-purple-400 to-pink-400",
              },
              {
                value: animatedStats.satisfaction,
                suffix: "%",
                label: "Satisfaction client",
                icon: <Shield className="w-6 h-6" />,
                color: "from-green-400 to-emerald-400",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-b from-primary-foreground/10 to-transparent hover:from-primary-foreground/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-foreground/20 to-primary-foreground/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className={`text-transparent bg-gradient-to-r ${stat.color} bg-clip-text`}>
                    {stat.icon}
                  </div>
                </div>
                <div
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-primary-foreground/80 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div
            className={`mt-12 animate-bounce transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-primary-foreground/60">
                Scroll pour découvrir
              </span>
              <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-scroll" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles CSS pour animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        
        .animate-scroll {
          animation: scroll 2s infinite;
        }
        
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </section>
  );
};

export default Hero;