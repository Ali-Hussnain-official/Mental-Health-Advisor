import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export function PricingSection() {
  const features = [
    "One-on-one private session",
    "Licensed professional therapist",
    "45-minute video consultation",
    "End-to-end encrypted",
    "Session notes & follow-up",
    "Flexible rescheduling",
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-primary-light/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
            Affordable Care
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground">
            Quality mental health support shouldn't break the bank. We offer affordable 
            sessions with no hidden fees.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-3xl shadow-elevated border border-border overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-calm-green p-8 text-center">
              <h3 className="text-primary-foreground/80 font-medium mb-2">
                Per Session
              </h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-primary-foreground/80 text-2xl">Rs.</span>
                <span className="text-6xl font-display font-bold text-primary-foreground">500</span>
              </div>
              <p className="text-primary-foreground/70 mt-2 text-sm">
                45-minute counseling session
              </p>
            </div>

            {/* Features */}
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="calm" size="xl" className="w-full" asChild>
                <Link to="/book-session">
                  Book Your Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              {/* Payment Methods */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Payment Methods Accepted
                </p>
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <span className="px-3 py-1.5 rounded-full bg-muted">JazzCash</span>
                  <span className="px-3 py-1.5 rounded-full bg-muted">EasyPaisa</span>
                  <span className="px-3 py-1.5 rounded-full bg-muted">Debit/Credit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            First-time users can take our{" "}
            <Link to="/assessment" className="text-primary font-medium hover:underline">
              free mental health assessment
            </Link>{" "}
            before booking.
          </p>
        </div>
      </div>
    </section>
  );
}
