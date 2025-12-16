import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  Loader2,
  MessageSquare,
  User,
  Building,
  Smartphone,
  Sparkles,
  ChevronRight,
  Shield,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const SERVICE_ID = 'service_zcfryrk';
  const TEMPLATE_ID = 'template_rtjqtux';
  const PUBLIC_KEY = 'qGQxArshJNM3ldvEP';

  // Animation for success state
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_company: formData.company || 'Non spécifié',
          from_email: formData.email,
          from_phone: formData.phone,
          service: formData.service,
          message: formData.message,
          date: new Date().toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
        },
        PUBLIC_KEY
      );

      setIsSuccess(true);
      toast({
        title: "🎉 Message envoyé avec succès !",
        description: "Notre équipe vous répondra dans les 24 heures.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      toast({
        title: "❌ Erreur d'envoi",
        description: "Veuillez réessayer ou nous contacter directement.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    { value: "web", label: "Création de site web", icon: "🌐" },
    { value: "software", label: "Développement logiciel", icon: "💻" },
    { value: "electronics", label: "Ingénierie électronique", icon: "🔌" },
    { value: "product", label: "Achat de produit", icon: "📦" },
    { value: "consulting", label: "Conseil technique", icon: "🎯" },
    { value: "other", label: "Autre projet", icon: "✨" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Notre bureau",
      content: "Ambohipo, 101\nAntananarivo, Madagascar",
      color: "from-blue-500/20 to-blue-600/10",
      action: "Voir sur la carte",
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Appelez-nous",
      content: "+261 34 11 815 03",
      color: "from-green-500/20 to-green-600/10",
      action: "Appeler maintenant",
      link: "tel:+261341181503"
    },
    {
      icon: Mail,
      title: "Envoyez un email",
      content: "nicolasromanina@gmail.com",
      color: "from-purple-500/20 to-purple-600/10",
      action: "Envoyer un email",
      link: "mailto:nicolasromanina@gmail.com"
    },
    {
      icon: Clock,
      title: "Horaires d'ouverture",
      content: "Lundi - Vendredi\n8h00 - 17h00",
      color: "from-orange-500/20 to-orange-600/10",
      action: "Prendre rendez-vous",
      link: "#contact"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="h-3 w-3" />
            Parlons de votre projet
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            <span className="text-primary">Contactez</span> nos experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Une idée, un projet ? Discutons ensemble de votre solution sur mesure
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
                {/* Success overlay */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/5 z-50 flex items-center justify-center"
                    >
                      <div className="text-center p-8">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", duration: 0.5 }}
                          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6"
                        >
                          <CheckCircle className="h-10 w-10 text-green-600" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          Message envoyé !
                        </h3>
                        <p className="text-muted-foreground">
                          Nous vous répondrons très rapidement.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <MessageSquare className="h-6 w-6 text-primary" />
                      Demander un devis gratuit
                    </CardTitle>
                    <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-3 w-3" />
                      <span>Vos données sont sécurisées</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Remplissez ce formulaire et recevez une réponse sous 24h
                  </p>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Company */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Nom complet *
                        </label>
                        <div className="relative">
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setActiveField('name')}
                            onBlur={() => setActiveField(null)}
                            required
                            placeholder="John Doe"
                            className={`pl-10 transition-all duration-300 ${
                              activeField === 'name' ? 'border-primary ring-2 ring-primary/20' : ''
                            }`}
                          />
                          <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors ${
                            activeField === 'name' ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label htmlFor="company" className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          Société
                        </label>
                        <div className="relative">
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            onFocus={() => setActiveField('company')}
                            onBlur={() => setActiveField(null)}
                            placeholder="Votre entreprise"
                            className={`pl-10 transition-all duration-300 ${
                              activeField === 'company' ? 'border-primary ring-2 ring-primary/20' : ''
                            }`}
                          />
                          <Building className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors ${
                            activeField === 'company' ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                        </div>
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label htmlFor="email" className="text-sm font-medium text-foreground block">
                          Email *
                        </label>
                        <div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setActiveField('email')}
                            onBlur={() => setActiveField(null)}
                            required
                            placeholder="votre@email.com"
                            className={`pl-10 transition-all duration-300 ${
                              activeField === 'email' ? 'border-primary ring-2 ring-primary/20' : ''
                            }`}
                          />
                          <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors ${
                            activeField === 'email' ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Smartphone className="h-4 w-4" />
                          Téléphone *
                        </label>
                        <div className="relative">
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setActiveField('phone')}
                            onBlur={() => setActiveField(null)}
                            required
                            placeholder="+261 34 11 815 03"
                            className={`pl-10 transition-all duration-300 ${
                              activeField === 'phone' ? 'border-primary ring-2 ring-primary/20' : ''
                            }`}
                          />
                          <Smartphone className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors ${
                            activeField === 'phone' ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                        </div>
                      </div>
                    </div>

                    {/* Service selection with enhanced UI */}
                    <div className="space-y-3">
                      <label htmlFor="service" className="text-sm font-medium text-foreground block">
                        Service souhaité *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {services.map((service) => (
                          <button
                            key={service.value}
                            type="button"
                            onClick={() => setFormData({...formData, service: service.value})}
                            className={`
                              p-4 rounded-xl border-2 transition-all duration-300 text-left
                              ${formData.service === service.value
                                ? 'border-primary bg-primary/10 ring-2 ring-primary/20'
                                : 'border-border bg-card hover:border-primary/30 hover:bg-primary/5'
                              }
                            `}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{service.icon}</span>
                              <span className="font-medium text-sm">{service.label}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-3">
                      <label htmlFor="message" className="text-sm font-medium text-foreground block">
                        Décrivez votre projet *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        required
                        placeholder="Parlez-nous de vos besoins, objectifs, délais..."
                        rows={6}
                        className={`transition-all duration-300 ${
                          activeField === 'message' ? 'border-primary ring-2 ring-primary/20' : ''
                        }`}
                      />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Minimum 50 caractères</span>
                        <span>{formData.message.length}/500</span>
                      </div>
                    </div>

                    {/* Submit button */}
                    <Button 
                      type="submit" 
                      size="xl"
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/20"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Envoyer ma demande
                          <ChevronRight className="h-4 w-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </>
                      )}
                      
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </Button>

                    {/* Privacy note */}
                    <p className="text-xs text-muted-foreground text-center">
                      En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                      Nous ne partageons jamais vos données avec des tiers.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Response time indicator */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Réponse rapide garantie
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Notre équipe s'engage à vous répondre dans les 24 heures ouvrées
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Informations de contact
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Plusieurs façons de nous contacter
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`
                        block p-4 rounded-xl border border-border/50
                        bg-gradient-to-br from-white/5 to-white/0
                        hover:border-primary/30 hover:shadow-lg
                        transition-all duration-300 group
                      `}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`
                          p-3 rounded-xl bg-gradient-to-br ${info.color}
                          group-hover:scale-110 transition-transform duration-300
                        `}>
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {info.title}
                          </h4>
                          <p className="text-sm text-muted-foreground whitespace-pre-line mb-2">
                            {info.content}
                          </p>
                          <div className="flex items-center gap-1 text-primary text-sm font-medium">
                            <span>{info.action}</span>
                            <ChevronRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Social & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Questions fréquentes
                  </h4>
                  <div className="space-y-3">
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-foreground list-none">
                        <span>Quel est le délai de réponse ?</span>
                        <ChevronRight className="h-4 w-4 transform group-open:rotate-90 transition-transform" />
                      </summary>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Nous répondons à toutes les demandes dans les 24 heures ouvrées.
                      </p>
                    </details>
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-foreground list-none">
                        <span>Proposez-vous des consultations gratuites ?</span>
                        <ChevronRight className="h-4 w-4 transform group-open:rotate-90 transition-transform" />
                      </summary>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Oui, la première consultation est toujours gratuite et sans engagement.
                      </p>
                    </details>
                  </div>
                </CardContent>
              </Card>

              {/* CTA for immediate action */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/20">
                <h4 className="font-bold text-foreground mb-2">
                  Besoin d'une réponse immédiate ?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Appelez-nous directement pour un échange rapide.
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <a href="tel:+261341181503">
                    <Phone className="h-4 w-4 mr-2" />
                    Appeler maintenant
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;