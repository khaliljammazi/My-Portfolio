"use client";

import { profile } from "@/data/profile";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";

const contactEmail = profile.email;

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
};

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
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const steps = [
    { id: 1, title: "Personal Info", icon: User },
    { id: 2, title: "Project Details", icon: MessageSquare },
    { id: 3, title: "Review & Send", icon: Send },
  ];

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contactEmail);
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 1800);
  };

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
    setIsLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setIsSubmitted(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isStepComplete = (stepId: number) => {
    if (stepId === 1) return Boolean(formData.name && formData.email);
    if (stepId === 2) return Boolean(formData.subject && formData.message);
    return false;
  };

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Let&apos;s Work Together
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-[hsl(var(--muted-foreground))]">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something focused, polished, and genuinely useful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="contact-intro-card mb-8"
        >
          <div>
            <span className="contact-intro-badge">{profile.availability}</span>
            <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              Best fit for product websites, frontend-heavy apps, interactive experiences, and full-stack builds that need both polish and dependable execution.
            </p>
          </div>
          <a href="/resume.pdf" download className="contact-download-cv">
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-10 grid gap-3 sm:grid-cols-4"
        >
          <button onClick={copyEmail} className="contact-quick-link text-left" aria-live="polite">
            <span className="contact-quick-icon">{emailCopied ? <Check /> : <Copy />}</span>
            <span>
              <strong>{emailCopied ? "Email copied" : "Copy my email"}</strong>
              <small>{contactEmail}</small>
            </span>
          </button>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-quick-link">
            <span className="contact-quick-icon">
              <Linkedin />
            </span>
            <span>
              <strong>LinkedIn</strong>
              <small>Professional profile</small>
            </span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-quick-link">
            <span className="contact-quick-icon">
              <Github />
            </span>
            <span>
              <strong>GitHub</strong>
              <small>Code and experiments</small>
            </span>
          </a>
          <a href="/resume.pdf" download className="contact-quick-link">
            <span className="contact-quick-icon">
              <Download />
            </span>
            <span>
              <strong>Download CV</strong>
              <small>PDF resume</small>
            </span>
          </a>
        </motion.div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[hsl(var(--muted-foreground))]">
          <span className="inline-flex items-center gap-2">
            <i className="size-2 animate-pulse rounded-full bg-emerald-500" />
            {profile.availability}
          </span>
          <span>{profile.responseTime}</span>
        </div>

        {!isSubmitted ? (
          <>
            <div className="mb-12">
              <div className="relative flex items-center justify-between">
                <div className="absolute top-5 right-0 left-0 -z-10 h-0.5 bg-[hsl(var(--border))]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {steps.map((step) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.id;
                  const isComplete = currentStep > step.id || isStepComplete(step.id);

                  return (
                    <div key={step.id} className="relative flex flex-col items-center gap-2 bg-[hsl(var(--background))] px-2">
                      <motion.div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                          isActive
                            ? "scale-110 border-transparent bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] text-white"
                            : isComplete
                              ? "border-transparent bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] text-white"
                              : "border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))]"
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {isComplete && !isActive ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
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

            <motion.div
              className="min-h-[400px] rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8 md:p-12"
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
                    <h3 className="mb-6 text-2xl font-bold text-[hsl(var(--foreground))]">Personal Information</h3>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-[hsl(var(--foreground))]">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(event) => updateFormData("name", event.target.value)}
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-4 py-3 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:ring-2 focus:ring-[var(--secondary)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-[hsl(var(--foreground))]">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(event) => updateFormData("email", event.target.value)}
                        placeholder="Enter your email address"
                        className="w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-4 py-3 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:ring-2 focus:ring-[var(--secondary)] focus:outline-none"
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
                    <h3 className="mb-6 text-2xl font-bold text-[hsl(var(--foreground))]">Project Details</h3>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-[hsl(var(--foreground))]">Project Subject *</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(event) => updateFormData("subject", event.target.value)}
                        placeholder="Brief description of your project"
                        className="w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-4 py-3 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:ring-2 focus:ring-[var(--secondary)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <label className="text-sm font-medium text-[hsl(var(--foreground))]">Project Description *</label>
                        <span
                          className={`text-xs tabular-nums ${
                            formData.message.length > 450 ? "text-red-500" : "text-[hsl(var(--muted-foreground))]"
                          }`}
                        >
                          {formData.message.length}/500
                        </span>
                      </div>
                      <textarea
                        value={formData.message}
                        onChange={(event) => updateFormData("message", event.target.value.slice(0, 500))}
                        placeholder="Tell me more about your project requirements, goals, and timeline"
                        rows={4}
                        className="w-full resize-none rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-4 py-3 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:ring-2 focus:ring-[var(--secondary)] focus:outline-none"
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[hsl(var(--foreground))]">Budget Range</label>
                        <select
                          value={formData.budget}
                          onChange={(event) => updateFormData("budget", event.target.value)}
                          className="w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-4 py-3 text-[hsl(var(--foreground))] focus:ring-2 focus:ring-[var(--secondary)] focus:outline-none"
                        >
                          <option value="">Select budget range</option>
                          <option value="< $5k">Under $5,000</option>
                          <option value="$5k - $10k">$5,000 - $10,000</option>
                          <option value="$10k - $25k">$10,000 - $25,000</option>
                          <option value="> $25k">Over $25,000</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[hsl(var(--foreground))]">Timeline</label>
                        <select
                          value={formData.timeline}
                          onChange={(event) => updateFormData("timeline", event.target.value)}
                          className="w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-4 py-3 text-[hsl(var(--foreground))] focus:ring-2 focus:ring-[var(--secondary)] focus:outline-none"
                        >
                          <option value="">Select timeline</option>
                          <option value="1-2 weeks">1-2 weeks</option>
                          <option value="1 month">1 month</option>
                          <option value="2-3 months">2-3 months</option>
                          <option value="3+ months">3+ months or more</option>
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
                    <h3 className="mb-6 text-2xl font-bold text-[hsl(var(--foreground))]">Review Your Information</h3>

                    <div className="space-y-4 rounded-lg bg-[hsl(var(--muted))] p-6">
                      <div>
                        <p className="mb-1 text-sm text-[hsl(var(--muted-foreground))]">Name</p>
                        <p className="font-medium text-[hsl(var(--foreground))]">{formData.name}</p>
                      </div>
                      <div>
                        <p className="mb-1 text-sm text-[hsl(var(--muted-foreground))]">Email</p>
                        <p className="font-medium text-[hsl(var(--foreground))]">{formData.email}</p>
                      </div>
                      <div>
                        <p className="mb-1 text-sm text-[hsl(var(--muted-foreground))]">Subject</p>
                        <p className="font-medium text-[hsl(var(--foreground))]">{formData.subject}</p>
                      </div>
                      <div>
                        <p className="mb-1 text-sm text-[hsl(var(--muted-foreground))]">Message</p>
                        <p className="text-[hsl(var(--foreground))]">{formData.message}</p>
                      </div>
                      {formData.budget && (
                        <div>
                          <p className="mb-1 text-sm text-[hsl(var(--muted-foreground))]">Budget</p>
                          <p className="font-medium text-[hsl(var(--foreground))]">{formData.budget}</p>
                        </div>
                      )}
                      {formData.timeline && (
                        <div>
                          <p className="mb-1 text-sm text-[hsl(var(--muted-foreground))]">Timeline</p>
                          <p className="font-medium text-[hsl(var(--foreground))]">{formData.timeline}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8 border-t border-[hsl(var(--border))] pt-6">
                {submitError && (
                  <p className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500">
                    {submitError}
                  </p>
                )}
                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1 || isLoading}
                    className="flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-[hsl(var(--foreground))] transition-all hover:bg-[hsl(var(--muted))] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>

                  {currentStep < steps.length ? (
                    <button
                      onClick={nextStep}
                      disabled={!isStepComplete(currentStep)}
                      className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] px-6 py-3 font-medium text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] px-6 py-3 font-medium text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                      <Send className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))]"
            >
              <Check className="h-10 w-10 text-white" />
            </motion.div>
            <h3 className="mb-4 text-3xl font-bold text-[hsl(var(--foreground))]">Message Sent Successfully!</h3>
            <p className="mb-8 text-[hsl(var(--muted-foreground))]">Thank you for reaching out. I&apos;ll get back to you as soon as I can.</p>
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
              className="rounded-lg bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] px-6 py-3 font-medium text-white transition-transform hover:scale-105"
            >
              Send Another Message
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
