import { Layout } from "@/components/layout/Layout";
import { PricingSection } from "@/components/home/PricingSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long is each session?",
    answer: "Each counseling session is 45 minutes long, giving you ample time to discuss your concerns and work with your therapist on solutions.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept JazzCash, EasyPaisa, and all major debit/credit cards. Payment is required before your session begins.",
  },
  {
    question: "Can I reschedule my session?",
    answer: "Yes, you can reschedule your session up to 24 hours before the scheduled time at no extra cost.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Full refunds are available for cancellations made 24+ hours in advance. Cancellations within 24 hours are eligible for rescheduling only.",
  },
  {
    question: "Are the sessions confidential?",
    answer: "Absolutely. All sessions are completely confidential and protected by end-to-end encryption. We follow strict privacy protocols.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
              Affordable Care
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Simple, Honest Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Quality mental health support shouldn't be a luxury. We believe in 
              transparent, affordable pricing for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <PricingSection />

      {/* FAQs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
                Questions?
              </span>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 shadow-soft animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button variant="outline" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
