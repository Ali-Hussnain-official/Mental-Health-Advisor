import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, UserCheck, Calendar, MessageCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Take Assessment",
    description: "Complete a quick, confidential questionnaire to help us understand your needs and concerns.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Get Matched",
    description: "Based on your responses, we'll recommend a licensed therapist who specializes in your area of concern.",
  },
  {
    icon: Calendar,
    step: "03",
    title: "Book Session",
    description: "Choose a convenient time slot and book your first counseling session with your matched therapist.",
  },
  {
    icon: MessageCircle,
    step: "04",
    title: "Start Healing",
    description: "Connect with your therapist through secure video calls or chat and begin your journey to wellness.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
            Simple Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Getting started with MindCare is easy. Follow these simple steps to connect 
            with professional mental health support.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="text-center">
                {/* Icon */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary-light flex items-center justify-center group-hover:bg-primary transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="calm" size="lg" asChild>
            <Link to="/assessment">
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
