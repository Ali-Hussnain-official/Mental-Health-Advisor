import { Shield, Lock, Eye, Heart } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Licensed Professionals",
    description: "All our therapists are certified mental health professionals with years of experience.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Your conversations and data are protected with industry-standard encryption.",
  },
  {
    icon: Eye,
    title: "Complete Privacy",
    description: "Your information is never shared. We follow strict confidentiality protocols.",
  },
  {
    icon: Heart,
    title: "Judgment-Free Space",
    description: "A safe, supportive environment where you can express yourself freely.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
            Your Safety First
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Why Trust MindCare
          </h2>
          <p className="text-muted-foreground">
            We're committed to providing a safe, secure, and supportive environment 
            for your mental health journey.
          </p>
        </div>

        {/* Trust Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-light mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
