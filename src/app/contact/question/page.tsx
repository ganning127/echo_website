"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { getRecaptchaToken } from "@/lib/recaptcha";

type FormData = {
  name: string;
  email: string;
  questionSummary: string;
  questionDetail: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  questionSummary: "",
  questionDetail: "",
};

export default function QuestionPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [direction, setDirection] = useState(1);

  const sections = ["Your Information", "Your Question"];

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextSection = () => {
    setDirection(1);
    setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
  };

  const prevSection = () => {
    setDirection(-1);
    setCurrentSection((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setIsSubmitting(true);
    try {
      const recaptchaToken = await getRecaptchaToken("contact_question");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "question",
          recaptchaToken,
          ...formData,
        }),
      });

      if (!res.ok) {
        console.error("Question submission failed:", await res.text());
        alert(
          "Something went wrong submitting your question. Please try again."
        );
        return;
      }

      setIsComplete(true);
    } catch (err) {
      console.error("Question submission error:", err);
      alert(
        "Something went wrong submitting your question. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = (): boolean => {
    switch (currentSection) {
      case 0:
        return (
          formData.name.trim().length >= 2 &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        );
      case 1:
        return (
          formData.questionSummary.trim().length >= 5 &&
          formData.questionDetail.trim().length >= 20
        );
      default:
        return true;
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
              Thank You, {formData.name.split(" ")[0]}!
            </h1>
            <p className="text-gray-600 text-lg mb-8 font-body">
              Your question has been submitted. Our team will review it and get
              back to you as soon as possible.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#013161] text-white px-8 py-4 rounded-xl font-heading text-xl hover:bg-[#1876D0] transition-colors"
            >
              Back to Contact
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
      <div className="min-h-screen bg-gradient-to-br from-[#013161] via-[#1876D0] to-[#329D3C] flex flex-col">
        {/* Progress Bar */}
        <div className="w-full bg-white/20 h-2">
          <motion.div
            className="h-full bg-[#FFD87A]"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentSection + 1) / sections.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Section Indicator */}
        <div className="text-center pt-6">
          <h2 className="text-2xl text-white mb-1">Question Submission</h2>
          <div className="text-white/80 font-body">
            <span className="text-[#FFD87A]">{sections[currentSection]}</span>
            <span className="text-white/50">
              {" "}
              — {currentSection + 1} of {sections.length}
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center p-4 py-8">
          <div className="w-full max-w-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSection}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                {/* Section 0: Your Information */}
                {currentSection === 0 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl text-white mb-6">
                      Your Information
                    </h2>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        Name <span className="text-[#FFD87A]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body focus:ring-2 focus:ring-[#FFD87A]"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        Email <span className="text-[#FFD87A]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body focus:ring-2 focus:ring-[#FFD87A]"
                      />
                      <p className="text-white/60 text-sm mt-2 font-body">
                        We&apos;ll use this email to respond to your question.
                      </p>
                    </div>
                  </div>
                )}

                {/* Section 1: Your Question */}
                {currentSection === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl text-white mb-6">Your Question</h2>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        Please summarize your question{" "}
                        <span className="text-[#FFD87A]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.questionSummary}
                        onChange={(e) =>
                          updateField("questionSummary", e.target.value)
                        }
                        placeholder="Brief summary of your question"
                        className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body focus:ring-2 focus:ring-[#FFD87A]"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        Please provide a detailed description of why you are
                        interested in having this question answered{" "}
                        <span className="text-[#FFD87A]">*</span>
                      </label>
                      <textarea
                        value={formData.questionDetail}
                        onChange={(e) =>
                          updateField("questionDetail", e.target.value)
                        }
                        placeholder="Provide context and details about your question..."
                        rows={6}
                        className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body resize-none focus:ring-2 focus:ring-[#FFD87A]"
                      />
                      <p className="text-white/60 text-sm mt-2 font-body">
                        The more detail you provide, the better we can help you!
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSection}
                disabled={currentSection === 0}
                className={`px-6 py-3 rounded-xl font-body text-lg transition-all ${
                  currentSection === 0
                    ? "opacity-0 pointer-events-none"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                ← Back
              </motion.button>

              {currentSection === sections.length - 1 ? (
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
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
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
                    "Submit Question ✓"
                  )}
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextSection}
                  disabled={!canProceed()}
                  className={`px-8 py-3 rounded-xl font-heading text-xl transition-all ${
                    canProceed()
                      ? "bg-[#FFD87A] text-[#013161] hover:bg-[#ffe5a3]"
                      : "bg-white/20 text-white/50 cursor-not-allowed"
                  }`}
                >
                  Continue →
                </motion.button>
              )}
            </div>

            {/* Back to Contact */}
            <div className="text-center mt-6">
              <Link
                href="/contact"
                className="text-white/60 hover:text-white/80 font-body text-sm transition-colors"
              >
                ← Back to Contact Options
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

