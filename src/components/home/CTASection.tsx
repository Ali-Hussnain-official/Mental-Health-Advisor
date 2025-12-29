import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-trust-navy to-primary" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-calm-green/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-8">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6 max-w-3xl mx-auto">
              Your Journey to Better Mental Health Starts Here
            </h2>

            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Don't wait to get the help you deserve. Take our free assessment today 
              and take the first step towards a happier, healthier you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated"
                asChild
              >
                <Link to="/assessment">
                  Take Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
                asChild
              >
                <Link to="/book-session">Talk to a Therapist</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
