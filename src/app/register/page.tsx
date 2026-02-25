"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { getRecaptchaToken } from "@/lib/recaptcha";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  ageGroup: string;
  role: string;
  heardFrom: string;
  interests: string[];
  comments: string;
};

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  ageGroup: "",
  role: "",
  heardFrom: "",
  interests: [],
  comments: "",
};

const ageGroups = [
  "Under 5",
  "5-7 years",
  "8-10 years",
  "11-13 years",
  "14+ years",
  "Adult/Parent",
];

const roles = [
  "Parent/Guardian",
  "Student",
  "Teacher/Educator",
  "Healthcare Professional",
  "School Administrator",
  "Other",
];

const heardFromOptions = [
  "Social Media",
  "School/Teacher",
  "Friend or Family",
  "Healthcare Provider",
  "Web Search",
  "Community Event",
  "Other",
];

const interestOptions = [
  "Heart Health Education",
  "Nutrition & Eating Well",
  "Physical Activity & Movement",
  "Mindfulness & Mental Wellness",
  "Sleep & Rest",
  "Echo Explorers Program",
  "Volunteer Opportunities",
];

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState("");
  const [direction, setDirection] = useState(1);

  const totalSteps = 8;

  const updateField = useCallback(
    <K extends keyof FormData>(field: K, value: FormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const toggleInterest = useCallback((interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  }, []);

  const nextStep = useCallback(() => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      const recaptchaToken = await getRecaptchaToken("registration");

      const response = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Submission failed");
      }

      setIsComplete(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = (): boolean => {
    switch (currentStep) {
      case 0:
        return true; // Welcome screen
      case 1:
        return formData.fullName.trim().length >= 2;
      case 2:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      case 3:
        return formData.phone.length >= 10 || formData.phone === "";
      case 4:
        return formData.ageGroup !== "";
      case 5:
        return formData.role !== "";
      case 6:
        return formData.heardFrom !== "";
      case 7:
        return true; // Interests and comments are optional
      default:
        return true;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && canProceed()) {
      if (currentStep === totalSteps - 1) {
        handleSubmit();
      } else {
        nextStep();
      }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  if (isComplete) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen bg-gradient-to-br from-[#013161] via-[#1876D0] to-[#329D3C] flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-12 max-w-lg text-center shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-[#329D3C] rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <h1 className="text-4xl text-[#013161] mb-4">
              Thank You, {formData.fullName.split(" ")[0]}!
            </h1>
            <p className="text-gray-600 text-lg mb-8 font-body">
              Your registration has been received. We&apos;re excited to have
              you join the ECHO community! Check your email for next steps.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#013161] text-white px-8 py-4 rounded-xl font-heading text-xl hover:bg-[#1876D0] transition-colors"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div
        className="min-h-screen bg-gradient-to-br from-[#013161] via-[#1876D0] to-[#329D3C] flex flex-col"
        onKeyDown={handleKeyDown}
      >
        {/* Progress Bar */}
        <div className="w-full bg-white/20 h-2">
          <motion.div
            className="h-full bg-[#FFD87A]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Step Counter */}
        <div className="text-white/80 text-center pt-6 font-body">
          {currentStep + 1} of {totalSteps}
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                {/* Step 0: Welcome */}
                {currentStep === 0 && (
                  <div className="text-center">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h1 className="text-5xl md:text-6xl text-white mb-6">
                        Welcome to ECHO!
                      </h1>
                      <p className="text-white/90 text-xl mb-8 font-body">
                        Let&apos;s get you registered for our heart-healthy
                        community. This will only take a couple of minutes.
                      </p>
                      <div className="flex justify-center gap-2 mb-8">
                        {[...Array(5)].map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="text-3xl"
                          >
                            {[][i]}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Step 1: Name */}
                {currentStep === 1 && (
                  <div>
                    <label className="block text-white text-3xl md:text-4xl mb-6">
                      What&apos;s your name?
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      autoFocus
                      className="w-full bg-transparent border-b-4 border-white/50 focus:border-[#FFD87A] text-white text-2xl py-4 outline-none placeholder:text-white/40 font-body transition-colors"
                    />
                  </div>
                )}

                {/* Step 2: Email */}
                {currentStep === 2 && (
                  <div>
                    <label className="block text-white text-3xl md:text-4xl mb-6">
                      What&apos;s your email?
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                      autoFocus
                      className="w-full bg-transparent border-b-4 border-white/50 focus:border-[#FFD87A] text-white text-2xl py-4 outline-none placeholder:text-white/40 font-body transition-colors"
                    />
                    <p className="text-white/60 text-sm mt-3 font-body">
                      We&apos;ll use this to send you updates and resources.
                    </p>
                  </div>
                )}

                {/* Step 3: Phone */}
                {currentStep === 3 && (
                  <div>
                    <label className="block text-white text-3xl md:text-4xl mb-6">
                      Phone number{" "}
                      <span className="text-white/60 text-xl">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                      autoFocus
                      className="w-full bg-transparent border-b-4 border-white/50 focus:border-[#FFD87A] text-white text-2xl py-4 outline-none placeholder:text-white/40 font-body transition-colors"
                    />
                  </div>
                )}

                {/* Step 4: Age Group */}
                {currentStep === 4 && (
                  <div>
                    <label className="block text-white text-3xl md:text-4xl mb-6">
                      What age group?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {ageGroups.map((age) => (
                        <motion.button
                          key={age}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => updateField("ageGroup", age)}
                          className={`p-4 rounded-xl text-lg font-body transition-all ${
                            formData.ageGroup === age
                              ? "bg-[#FFD87A] text-[#013161] font-semibold"
                              : "bg-white/20 text-white hover:bg-white/30"
                          }`}
                        >
                          {age}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Role */}
                {currentStep === 5 && (
                  <div>
                    <label className="block text-white text-3xl md:text-4xl mb-6">
                      What best describes you?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {roles.map((role) => (
                        <motion.button
                          key={role}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => updateField("role", role)}
                          className={`p-4 rounded-xl text-lg font-body transition-all ${
                            formData.role === role
                              ? "bg-[#FFD87A] text-[#013161] font-semibold"
                              : "bg-white/20 text-white hover:bg-white/30"
                          }`}
                        >
                          {role}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 6: How they heard */}
                {currentStep === 6 && (
                  <div>
                    <label className="block text-white text-3xl md:text-4xl mb-6">
                      How did you hear about ECHO?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {heardFromOptions.map((option) => (
                        <motion.button
                          key={option}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => updateField("heardFrom", option)}
                          className={`p-4 rounded-xl text-lg font-body transition-all ${
                            formData.heardFrom === option
                              ? "bg-[#FFD87A] text-[#013161] font-semibold"
                              : "bg-white/20 text-white hover:bg-white/30"
                          }`}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 7: Interests & Comments */}
                {currentStep === 7 && (
                  <div>
                    <label className="block text-white text-3xl md:text-4xl mb-4">
                      What interests you?
                    </label>
                    <p className="text-white/70 mb-6 font-body">
                      Select all that apply (optional)
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {interestOptions.map((interest) => (
                        <motion.button
                          key={interest}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => toggleInterest(interest)}
                          className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
                            formData.interests.includes(interest)
                              ? "bg-[#FFD87A] text-[#013161] font-semibold"
                              : "bg-white/20 text-white hover:bg-white/30"
                          }`}
                        >
                          {interest}
                        </motion.button>
                      ))}
                    </div>

                    <label className="block text-white text-xl mb-3">
                      Anything else you&apos;d like us to know?
                    </label>
                    <textarea
                      value={formData.comments}
                      onChange={(e) => updateField("comments", e.target.value)}
                      placeholder="Questions, comments, or special requests..."
                      rows={3}
                      className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body resize-none focus:ring-2 focus:ring-[#FFD87A]"
                    />
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-300 text-center mt-4 font-body"
                  >
                    {error}
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-xl font-body text-lg transition-all ${
                  currentStep === 0
                    ? "opacity-0 pointer-events-none"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                ← Back
              </motion.button>

              {currentStep === totalSteps - 1 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  disabled={isSubmitting || !canProceed()}
                  className={`px-8 py-3 rounded-xl font-heading text-xl transition-all ${
                    canProceed()
                      ? "bg-[#FFD87A] text-[#013161] hover:bg-[#ffe5a3]"
                      : "bg-white/20 text-white/50 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit ✓"
                  )}
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`px-8 py-3 rounded-xl font-heading text-xl transition-all ${
                    canProceed()
                      ? "bg-[#FFD87A] text-[#013161] hover:bg-[#ffe5a3]"
                      : "bg-white/20 text-white/50 cursor-not-allowed"
                  }`}
                >
                  {currentStep === 0 ? "Let's Start →" : "Continue →"}
                </motion.button>
              )}
            </div>

            {/* Keyboard hint */}
            <p className="text-center text-white/40 text-sm mt-6 font-body">
              Press <kbd className="px-2 py-1 bg-white/20 rounded">Enter</kbd>{" "}
              to continue
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


