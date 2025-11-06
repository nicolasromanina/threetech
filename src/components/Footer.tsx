const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">Threetech</h3>
            <p className="text-secondary-foreground/80 text-sm">
              Vos solutions informatiques et électroniques sur mesure
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Création de sites web
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Développement logiciel
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Ingénierie électronique
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Produits</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Centre d'alarmes
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Contrôleur de ronde
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Carte de développement
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Ambohipo, 101 Antananarivo</li>
              <li>
                <a href="tel:+261341181503" className="hover:text-accent transition-colors">
                  +261 34 11 815 03
                </a>
              </li>
              <li>
                <a href="mailto:nicolasromanina@gmail.com" className="hover:text-accent transition-colors">
                  nicolasromanina@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Threetech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
