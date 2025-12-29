import { Link } from "react-router-dom";
import { 
  Cloud, 
  Brain, 
  Activity, 
  Zap, 
  AlertCircle, 
  Utensils,
  ArrowRight 
} from "lucide-react";

const conditions = [
  {
    icon: Cloud,
    title: "Depression",
    description: "Persistent feelings of sadness, hopelessness, and loss of interest in daily activities.",
    color: "from-serene-blue to-primary",
    bgColor: "bg-serene-blue-light",
  },
  {
    icon: Activity,
    title: "Anxiety Disorders",
    description: "Excessive worry, fear, or nervousness that interferes with daily life and relationships.",
    color: "from-primary to-calm-green",
    bgColor: "bg-primary-light",
  },
  {
    icon: Zap,
    title: "Stress",
    description: "Overwhelming pressure from work, relationships, or life circumstances affecting wellbeing.",
    color: "from-calm-green to-primary",
    bgColor: "bg-calm-green-light",
  },
  {
    icon: Brain,
    title: "Bipolar Disorder",
    description: "Episodes of emotional highs (mania) and lows (depression) affecting mood and energy.",
    color: "from-gentle-lavender to-serene-blue",
    bgColor: "bg-gentle-lavender",
  },
  {
    icon: AlertCircle,
    title: "Schizophrenia",
    description: "A complex condition affecting thoughts, perceptions, and behavior requiring specialized care.",
    color: "from-primary to-trust-navy",
    bgColor: "bg-accent",
  },
  {
    icon: Utensils,
    title: "Eating Disorders",
    description: "Unhealthy eating behaviors and attitudes toward food, weight, and body image.",
    color: "from-warm-cream to-primary",
    bgColor: "bg-warm-cream",
  },
];

export function ConditionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
            How We Can Help
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Conditions We Support
          </h2>
          <p className="text-muted-foreground">
            Our licensed therapists are trained to help you navigate various mental health 
            challenges with compassion and expertise.
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, index) => (
            <Link
              key={condition.title}
              to={`/conditions#${condition.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <div
                className={`p-6 rounded-2xl ${condition.bgColor} border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elevated h-full animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${condition.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <condition.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {condition.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {condition.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/conditions"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View all conditions we treat
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
