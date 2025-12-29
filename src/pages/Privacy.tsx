import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, FileText, Users, Mail } from "lucide-react";

const sections = [
  {
    icon: Shield,
    title: "Information We Collect",
    content: `We collect information you provide directly, including:
    • Personal details (name, email, phone number)
    • Demographic information (age, gender)
    • Health-related information provided during assessments
    • Session notes and communication with therapists
    
    We also automatically collect certain technical information when you use our platform, such as device information and usage patterns.`,
  },
  {
    icon: Lock,
    title: "How We Protect Your Data",
    content: `Your privacy and security are our top priorities:
    • All data is encrypted using industry-standard AES-256 encryption
    • We use secure HTTPS connections for all communications
    • Access to personal data is strictly limited to authorized personnel
    • Regular security audits and penetration testing
    • Compliant with international data protection standards`,
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: `We use your information to:
    • Provide and improve our mental health services
    • Match you with appropriate therapists
    • Communicate important updates and reminders
    • Process payments and manage your account
    • Conduct research to improve mental health care (anonymized data only)
    
    We never sell your personal information to third parties.`,
  },
  {
    icon: FileText,
    title: "Your Rights",
    content: `You have the right to:
    • Access your personal data at any time
    • Request correction of inaccurate information
    • Request deletion of your account and data
    • Withdraw consent for data processing
    • Export your data in a portable format
    • Lodge complaints with relevant authorities`,
  },
  {
    icon: Users,
    title: "Sharing Information",
    content: `We only share your information when:
    • You explicitly consent to sharing
    • Required by law or legal process
    • Necessary to protect safety (in crisis situations)
    • With service providers who help us operate (under strict confidentiality)
    
    Your therapy sessions and personal health information are never shared without your explicit consent.`,
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: `If you have questions about this Privacy Policy or your data:
    
    Email: privacy@mindcare.pk
    Phone: +92 300 1234567
    Address: Lahore, Pakistan
    
    We respond to all privacy inquiries within 48 hours.`,
  },
];

const Privacy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-primary-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
              Your Privacy Matters
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              We take your privacy seriously. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-soft animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl text-foreground mb-3">
                      {section.title}
                    </h2>
                    <div className="text-muted-foreground whitespace-pre-line leading-relaxed text-sm">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              By using MindCare, you agree to this Privacy Policy. 
              For questions, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
