import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Shield, Lock } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Mental Health Assessment", href: "/assessment" },
    { label: "Counseling Sessions", href: "/book-session" },
    { label: "Conditions We Treat", href: "/conditions" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "FAQs", href: "/faqs" },
    { label: "Crisis Resources", href: "/crisis" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-trust-navy text-primary-foreground">
      {/* Trust Banner */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-glow" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary-glow" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary-glow" />
              <span>Licensed Professionals</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-calm flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">
                MindCare
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Making mental health support approachable, private, affordable, and safe for everyone seeking help.
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>alisufyian553@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+92 325 7231681</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Bahawalpur, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 MindCare. All rights reserved.</p>
            <p>
              If you're in crisis, please call{" "}
              <a href="tel:0800-007-8888" className="text-primary-glow hover:underline">
                0800-007-8888
              </a>{" "}
              (Pakistan Mental Health Helpline)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
