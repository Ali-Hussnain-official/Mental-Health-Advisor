import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Users, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-serene-blue-light to-warm-cream">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse-gentle" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-serene-blue/8 rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span>Your mental health matters</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Find Peace of Mind with{" "}
            <span className="bg-gradient-to-r from-primary to-calm-green bg-clip-text text-transparent">
              Professional Support
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Take the first step towards better mental health. Get personalized assessments, 
            connect with licensed therapists, and receive the support you deserve — 
            all in a safe, confidential space.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/assessment">
                Start Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/book-session">Book a Session</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <span>Licensed Therapists</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span>10,000+ Users Helped</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
