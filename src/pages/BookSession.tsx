import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle, ArrowRight, User, Shield, Video } from "lucide-react";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
];

const therapist = {
  name: "Dr. Sarah Ahmed",
  title: "Clinical Psychologist",
  experience: "8+ years experience",
  specialties: ["Depression", "Anxiety", "Stress Management", "Relationship Issues"],
  bio: "Dr. Sarah Ahmed is a licensed clinical psychologist with over 8 years of experience helping individuals navigate mental health challenges. She specializes in cognitive-behavioral therapy and has helped hundreds of clients achieve better mental wellness.",
};

const BookSession = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date;
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  };

  const handleConfirm = () => {
    setStep(3);
  };

  if (step === 3) {
    return (
      <Layout>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center animate-scale-in">
              <div className="w-20 h-20 rounded-full bg-calm-green-light mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-calm-green" />
              </div>
              <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
                Session Confirmed!
              </h1>
              <p className="text-muted-foreground mb-8">
                Your counseling session has been scheduled. You'll receive a confirmation 
                email with meeting details shortly.
              </p>

              <div className="bg-card rounded-2xl border border-border p-6 mb-8 text-left">
                <h3 className="font-semibold text-foreground mb-4">Session Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{therapist.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      {selectedDate && formatDate(selectedDate)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{selectedTime}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Video Call (45 minutes)</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Fee: Rs. 500 (payable before session)
              </p>

              <Button variant="calm" size="lg" className="w-full">
                Proceed to Payment
                <ArrowRight className="w-4 h-4" />
              </Button>
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
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
              Book Your Session
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Schedule a Counseling Session
            </h1>
            <p className="text-muted-foreground">
              Choose a convenient time for your private, one-on-one session with our therapist.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Therapist Card */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl border border-border p-6 shadow-soft sticky top-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-calm-green flex items-center justify-center text-2xl font-display font-bold text-primary-foreground">
                      SA
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{therapist.name}</h3>
                      <p className="text-sm text-muted-foreground">{therapist.title}</p>
                      <p className="text-xs text-primary">{therapist.experience}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {therapist.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {therapist.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="text-xs px-3 py-1 rounded-full bg-primary-light text-primary"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Licensed & Verified</span>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-soft">
                  {/* Step 1: Select Date */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Select a Date
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                      {dates.map((date) => (
                        <button
                          key={date.toISOString()}
                          onClick={() => {
                            setSelectedDate(date);
                            setStep(2);
                          }}
                          className={`p-3 rounded-xl text-center transition-all duration-200 border-2 ${
                            selectedDate?.toDateString() === date.toDateString()
                              ? "border-primary bg-primary-light"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="text-xs text-muted-foreground">
                            {date.toLocaleDateString("en-US", { weekday: "short" })}
                          </div>
                          <div className="font-semibold text-foreground">
                            {date.getDate()}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {date.toLocaleDateString("en-US", { month: "short" })}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Select Time */}
                  {selectedDate && (
                    <div className="mb-8 animate-fade-up">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        Select a Time
                      </h3>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-xl text-center transition-all duration-200 border-2 ${
                              selectedTime === time
                                ? "border-primary bg-primary-light text-foreground"
                                : "border-border hover:border-primary/50 text-muted-foreground"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Summary & Confirm */}
                  {selectedDate && selectedTime && (
                    <div className="animate-fade-up">
                      <div className="bg-muted/50 rounded-xl p-4 mb-6">
                        <h4 className="font-medium text-foreground mb-2">Session Summary</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p><strong>Date:</strong> {formatDate(selectedDate)}</p>
                          <p><strong>Time:</strong> {selectedTime}</p>
                          <p><strong>Duration:</strong> 45 minutes</p>
                          <p><strong>Fee:</strong> Rs. 500</p>
                        </div>
                      </div>

                      <Button variant="calm" size="lg" className="w-full" onClick={handleConfirm}>
                        Confirm Booking
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookSession;
