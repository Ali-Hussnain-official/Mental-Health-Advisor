import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, Target, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "We approach every interaction with empathy, understanding, and genuine care for your wellbeing.",
  },
  {
    icon: Shield,
    title: "Privacy & Trust",
    description: "Your privacy is sacred. We maintain strict confidentiality and use industry-leading security.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Mental health support should be available to everyone, regardless of background or circumstance.",
  },
  {
    icon: Target,
    title: "Evidence-Based",
    description: "Our approaches are grounded in proven therapeutic methods and continuous research.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-primary-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
              About MindCare
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Making Mental Health Care Accessible to Everyone
            </h1>
            <p className="text-lg text-muted-foreground">
              We believe that everyone deserves access to quality mental health support. 
              Our mission is to break down barriers and make professional help available, 
              affordable, and stigma-free.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MindCare was founded with a simple but powerful vision: to make mental 
                  health support accessible to everyone in Pakistan. We understand that 
                  seeking help can be daunting, which is why we've created a platform 
                  that prioritizes your comfort, privacy, and wellbeing.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of licensed professionals is committed to providing 
                  compassionate, judgment-free support. Whether you're dealing with 
                  everyday stress or more complex challenges, we're here to help you 
                  on your journey to better mental health.
                </p>
              </div>
              <div className="bg-primary-light rounded-3xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-display font-bold text-primary">10K+</div>
                    <div className="text-muted-foreground">Users Helped</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-display font-bold text-primary">95%</div>
                    <div className="text-muted-foreground">Satisfaction Rate</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-display font-bold text-primary">24/7</div>
                    <div className="text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              These principles guide everything we do at MindCare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl border border-border p-6 shadow-soft text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-light mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-8">
              Take the first step towards better mental health today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="calm" size="lg" asChild>
                <Link to="/assessment">
                  Take Free Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/book-session">Book a Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
