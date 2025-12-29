import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Over the past 2 weeks, how often have you felt down, depressed, or hopeless?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 2,
    question: "How often have you had little interest or pleasure in doing things?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 3,
    question: "How often have you felt nervous, anxious, or on edge?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 4,
    question: "How often have you been unable to stop or control worrying?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 5,
    question: "How would you rate your stress levels in daily life?",
    options: [
      { value: 0, label: "Very low" },
      { value: 1, label: "Manageable" },
      { value: 2, label: "High" },
      { value: 3, label: "Overwhelming" },
    ],
  },
  {
    id: 6,
    question: "How is your sleep quality?",
    options: [
      { value: 0, label: "Good, I sleep well" },
      { value: 1, label: "Sometimes disturbed" },
      { value: 2, label: "Often disturbed" },
      { value: 3, label: "Very poor, rarely restful" },
    ],
  },
  {
    id: 7,
    question: "Do you have thoughts of harming yourself?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Rarely, passing thoughts" },
      { value: 2, label: "Sometimes" },
      { value: 3, label: "Often" },
    ],
  },
];

type RiskLevel = "low" | "medium" | "high";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateRisk = (): RiskLevel => {
    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const maxScore = questions.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    // Check for critical response (self-harm question)
    if (answers[7] >= 2) return "high";
    
    if (percentage < 30) return "low";
    if (percentage < 60) return "medium";
    return "high";
  };

  const getRiskDetails = (risk: RiskLevel) => {
    switch (risk) {
      case "low":
        return {
          icon: CheckCircle,
          color: "text-calm-green",
          bgColor: "bg-calm-green-light",
          title: "Low Risk",
          description: "Based on your responses, your current mental health appears stable. However, it's always good to maintain healthy habits and check in with yourself regularly.",
          recommendations: [
            "Continue practicing self-care and healthy habits",
            "Maintain social connections and support systems",
            "Consider mindfulness or meditation practices",
            "Return for another assessment if you notice changes",
          ],
        };
      case "medium":
        return {
          icon: AlertTriangle,
          color: "text-primary",
          bgColor: "bg-primary-light",
          title: "Moderate Concern",
          description: "Your responses suggest you may be experiencing some challenges with your mental health. Speaking with a professional could help you develop coping strategies.",
          recommendations: [
            "Consider booking a session with our therapist",
            "Practice stress-reduction techniques",
            "Reach out to trusted friends or family",
            "Monitor your symptoms and note any changes",
          ],
        };
      case "high":
        return {
          icon: AlertCircle,
          color: "text-destructive",
          bgColor: "bg-destructive/10",
          title: "Urgent Attention Recommended",
          description: "Based on your responses, we strongly recommend speaking with a mental health professional as soon as possible. You don't have to face this alone.",
          recommendations: [
            "Book a session with our therapist today",
            "If you're in crisis, call 0800-007-8888",
            "Reach out to someone you trust immediately",
            "Remember: seeking help is a sign of strength",
          ],
        };
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[questions[currentQuestion]?.id];

  if (showResults) {
    const risk = calculateRisk();
    const details = getRiskDetails(risk);
    const IconComponent = details.icon;

    return (
      <Layout>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-3xl shadow-elevated border border-border p-8 lg:p-12 animate-scale-in">
                {/* Result Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${details.bgColor} mb-6`}>
                    <IconComponent className={`w-10 h-10 ${details.color}`} />
                  </div>
                  <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
                    {details.title}
                  </h1>
                  <p className="text-muted-foreground leading-relaxed">
                    {details.description}
                  </p>
                </div>

                {/* Recommendations */}
                <div className="bg-muted/50 rounded-2xl p-6 mb-8">
                  <h3 className="font-semibold text-foreground mb-4">Our Recommendations</h3>
                  <ul className="space-y-3">
                    {details.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">{index + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="calm" size="lg" className="flex-1" onClick={() => navigate("/book-session")}>
                    Book a Session
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1" onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                  }}>
                    Retake Assessment
                  </Button>
                </div>

                {/* Privacy Note */}
                <p className="text-center text-sm text-muted-foreground mt-6">
                  Your responses are confidential and will not be shared without your consent.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
                Mental Health Assessment
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Let's Understand Your Needs
              </h1>
              <p className="text-muted-foreground">
                Answer these questions honestly. There are no right or wrong answers. 
                Your responses help us guide you to the right support.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-calm-green transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-card rounded-3xl shadow-elevated border border-border p-8 lg:p-10 animate-fade-up">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3 mb-8">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                      currentAnswer === option.value
                        ? "border-primary bg-primary-light text-foreground"
                        : "border-border hover:border-primary/50 hover:bg-muted/50 text-muted-foreground"
                    }`}
                  >
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
                <Button
                  variant="calm"
                  onClick={handleNext}
                  disabled={currentAnswer === undefined}
                >
                  {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Privacy Note */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              Your responses are completely confidential and secure.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Assessment;
