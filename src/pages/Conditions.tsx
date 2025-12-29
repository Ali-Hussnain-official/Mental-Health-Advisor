import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Brain, 
  Activity, 
  Zap, 
  AlertCircle, 
  Utensils,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const conditions = [
  {
    id: "depression",
    icon: Cloud,
    title: "Depression",
    description: "Depression is more than just feeling sad. It's a persistent condition that affects how you feel, think, and handle daily activities.",
    symptoms: [
      "Persistent sad, anxious, or empty mood",
      "Loss of interest in activities once enjoyed",
      "Decreased energy and fatigue",
      "Difficulty concentrating or making decisions",
      "Changes in sleep patterns",
      "Changes in appetite or weight",
      "Feelings of worthlessness or guilt",
      "Thoughts of death or suicide",
    ],
    howWeHelp: [
      "Cognitive Behavioral Therapy (CBT)",
      "Supportive counseling sessions",
      "Identifying triggers and coping strategies",
      "Building healthy daily routines",
      "Medication guidance if needed",
    ],
    color: "from-serene-blue to-primary",
    bgColor: "bg-serene-blue-light",
  },
  {
    id: "anxiety-disorders",
    icon: Activity,
    title: "Anxiety Disorders",
    description: "Anxiety disorders involve more than temporary worry or fear. For people with anxiety disorders, the anxiety does not go away and can get worse over time.",
    symptoms: [
      "Excessive worry about everyday matters",
      "Restlessness or feeling on edge",
      "Difficulty controlling worry",
      "Physical symptoms like racing heart",
      "Avoidance of triggering situations",
      "Sleep problems",
      "Panic attacks",
      "Irrational fears",
    ],
    howWeHelp: [
      "Exposure therapy techniques",
      "Relaxation and breathing exercises",
      "Identifying anxiety triggers",
      "Building coping mechanisms",
      "Mindfulness-based interventions",
    ],
    color: "from-primary to-calm-green",
    bgColor: "bg-primary-light",
  },
  {
    id: "stress",
    icon: Zap,
    title: "Stress",
    description: "While some stress is normal, chronic stress can take a serious toll on your mental and physical health, affecting your quality of life.",
    symptoms: [
      "Feeling overwhelmed or unable to cope",
      "Difficulty relaxing or quieting the mind",
      "Low self-esteem and feelings of worthlessness",
      "Irritability and mood swings",
      "Physical symptoms like headaches",
      "Changes in eating habits",
      "Procrastination and avoidance",
      "Social withdrawal",
    ],
    howWeHelp: [
      "Stress management techniques",
      "Time management strategies",
      "Work-life balance counseling",
      "Relaxation training",
      "Building resilience skills",
    ],
    color: "from-calm-green to-primary",
    bgColor: "bg-calm-green-light",
  },
  {
    id: "bipolar-disorder",
    icon: Brain,
    title: "Bipolar Disorder",
    description: "Bipolar disorder causes unusual shifts in mood, energy, activity levels, and concentration that can make day-to-day life difficult.",
    symptoms: [
      "Episodes of unusually high energy (mania)",
      "Periods of deep depression",
      "Decreased need for sleep during manic episodes",
      "Racing thoughts and rapid speech",
      "Impulsive decision-making",
      "Mood swings between extremes",
      "Difficulty maintaining relationships",
      "Changes in activity levels",
    ],
    howWeHelp: [
      "Mood monitoring and awareness",
      "Psychoeducation about the condition",
      "Developing early warning systems",
      "Lifestyle management strategies",
      "Coordination with medical care",
    ],
    color: "from-gentle-lavender to-serene-blue",
    bgColor: "bg-gentle-lavender",
  },
  {
    id: "schizophrenia",
    icon: AlertCircle,
    title: "Schizophrenia",
    description: "Schizophrenia is a serious mental illness that affects how a person thinks, feels, and behaves. With proper treatment, many people can manage their symptoms.",
    symptoms: [
      "Hallucinations (hearing or seeing things)",
      "Delusions (false beliefs)",
      "Disorganized thinking and speech",
      "Difficulty with concentration",
      "Reduced emotional expression",
      "Social withdrawal",
      "Difficulty with daily functioning",
      "Memory and attention problems",
    ],
    howWeHelp: [
      "Supportive therapy sessions",
      "Family education and support",
      "Coping skills development",
      "Social skills training",
      "Coordination with medical treatment",
    ],
    color: "from-primary to-trust-navy",
    bgColor: "bg-accent",
  },
  {
    id: "eating-disorders",
    icon: Utensils,
    title: "Eating Disorders",
    description: "Eating disorders are serious mental health conditions marked by severe disturbances in eating behaviors and related thoughts and emotions.",
    symptoms: [
      "Preoccupation with weight, food, and dieting",
      "Restricting food intake severely",
      "Binge eating episodes",
      "Purging behaviors",
      "Distorted body image",
      "Excessive exercise",
      "Social withdrawal during meals",
      "Physical symptoms from malnutrition",
    ],
    howWeHelp: [
      "Cognitive behavioral therapy for eating disorders",
      "Developing healthy relationship with food",
      "Body image work",
      "Nutritional counseling support",
      "Family involvement when appropriate",
    ],
    color: "from-warm-cream to-primary",
    bgColor: "bg-warm-cream",
  },
];

const Conditions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-primary-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
              Understanding Mental Health
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Conditions We Treat
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Our licensed therapists are trained to help you navigate various mental health 
              challenges with compassion, expertise, and evidence-based approaches.
            </p>
            <Button variant="calm" size="lg" asChild>
              <Link to="/assessment">
                Take Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Conditions Detail */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {conditions.map((condition, index) => (
              <div
                key={condition.id}
                id={condition.id}
                className={`scroll-mt-24 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Info Card */}
                  <div className={`${condition.bgColor} rounded-3xl p-8 lg:p-10 animate-fade-up`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${condition.color} flex items-center justify-center mb-6`}>
                      <condition.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
                      {condition.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {condition.description}
                    </p>
                    <Button variant="calm" asChild>
                      <Link to="/book-session">
                        Get Help for {condition.title}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Symptoms & Help */}
                  <div className="space-y-8">
                    {/* Symptoms */}
                    <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-soft">
                      <h3 className="font-semibold text-lg text-foreground mb-4">
                        Common Symptoms
                      </h3>
                      <ul className="grid gap-3">
                        {condition.symptoms.map((symptom, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="w-2 h-2 rounded-full bg-destructive" />
                            </div>
                            <span className="text-muted-foreground text-sm">{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How We Help */}
                    <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-soft">
                      <h3 className="font-semibold text-lg text-foreground mb-4">
                        How We Can Help
                      </h3>
                      <ul className="grid gap-3">
                        {condition.howWeHelp.map((help, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm">{help}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-muted-foreground mb-8">
              Take our free mental health assessment to help identify your needs 
              and get personalized recommendations.
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

export default Conditions;
