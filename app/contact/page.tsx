"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Mail, User, MessageSquare, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
};

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Project Details", icon: MessageSquare },
  { id: 3, title: "Review & Send", icon: Send },
];

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  const isStepComplete = (stepId: number) => {
    if (stepId === 1) return formData.name && formData.email;
    if (stepId === 2) return formData.subject && formData.message;
    return false;
  };

  return (
    <main className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-transparent">
            Let's Work Together
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Have a project in mind? Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        {!isSubmitted ? (
          <>
            {/* Stepper */}
            <div className="mb-12">
              <div className="flex items-center justify-between relative">
                {/* Progress Line */}
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-[hsl(var(--border))] -z-10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Steps */}
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.id;
                  const isComplete = currentStep > step.id || isStepComplete(step.id);

                  return (
                    <div key={step.id} className="flex flex-col items-center gap-2 relative bg-[hsl(var(--background))] px-2">
                      <motion.div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] border-transparent text-white scale-110"
                            : isComplete
                            ? "bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] border-transparent text-white"
                            : "bg-[hsl(var(--card))] border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]"
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {isComplete && !isActive ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                      </motion.div>
                      <span
                        className={`text-xs font-medium transition-colors ${
                          isActive || isComplete ? "text-[var(--secondary)]" : "text-[hsl(var(--muted-foreground))]"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Content */}
            <motion.div
              className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-8 md:p-12 min-h-[400px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-6">Tell me about yourself</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-6">Project Information</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => updateFormData("subject", e.target.value)}
                        placeholder="Website Development"
                        className="w-full px-4 py-3 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                        Project Description *
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => updateFormData("message", e.target.value)}
                        placeholder="Tell me about your project..."
                        rows={4}
                        className="w-full px-4 py-3 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] resize-none"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => updateFormData("budget", e.target.value)}
                          className="w-full px-4 py-3 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] text-[hsl(var(--foreground))]"
                        >
                          <option value="">Select budget</option>
                          <option value="< $5k">{"< $5,000"}</option>
                          <option value="$5k - $10k">$5,000 - $10,000</option>
                          <option value="$10k - $25k">$10,000 - $25,000</option>
                          <option value="> $25k">{"> $25,000"}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                          Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => updateFormData("timeline", e.target.value)}
                          className="w-full px-4 py-3 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] text-[hsl(var(--foreground))]"
                        >
                          <option value="">Select timeline</option>
                          <option value="1-2 weeks">1-2 weeks</option>
                          <option value="1 month">1 month</option>
                          <option value="2-3 months">2-3 months</option>
                          <option value="3+ months">3+ months</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-6">Review Your Information</h3>
                    
                    <div className="space-y-4 bg-[hsl(var(--muted))] rounded-lg p-6">
                      <div>
                        <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Name</p>
                        <p className="text-[hsl(var(--foreground))] font-medium">{formData.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Email</p>
                        <p className="text-[hsl(var(--foreground))] font-medium">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Subject</p>
                        <p className="text-[hsl(var(--foreground))] font-medium">{formData.subject}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Message</p>
                        <p className="text-[hsl(var(--foreground))]">{formData.message}</p>
                      </div>
                      {formData.budget && (
                        <div>
                          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Budget</p>
                          <p className="text-[hsl(var(--foreground))] font-medium">{formData.budget}</p>
                        </div>
                      )}
                      {formData.timeline && (
                        <div>
                          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Timeline</p>
                          <p className="text-[hsl(var(--foreground))] font-medium">{formData.timeline}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-[hsl(var(--border))]">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>

                {currentStep < steps.length ? (
                  <button
                    onClick={nextStep}
                    disabled={!isStepComplete(currentStep)}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] text-white hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] text-white hover:scale-105 transition-transform"
                  >
                    Submit
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">Message Sent!</h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-8">
              Thank you for reaching out! I'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setFormData({
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                  budget: "",
                  timeline: "",
                });
              }}
              className="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] text-white hover:scale-105 transition-transform"
            >
              Send Another Message
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
