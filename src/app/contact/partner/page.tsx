"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

type FormData = {
  firstName: string;
  lastName: string;
  organization: string;
  email: string;
  phone: string;
  participants: string;
  gradeLevel: string;
  requestedDate: string;
  requestedTime: string;
  presentation: string;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  organization: "",
  email: "",
  phone: "",
  participants: "",
  gradeLevel: "",
  requestedDate: "",
  requestedTime: "",
  presentation: "",
};

const presentationOptions = ["ECHO Explorers", "ECHO Heroes"];

const gradeLevelOptions = [
  "Pre-K",
  "Kindergarten",
  "1st Grade",
  "2nd Grade",
  "3rd Grade",
  "4th Grade",
  "5th Grade",
  "6th Grade",
  "Middle School (7-8)",
  "High School (9-12)",
  "Mixed Ages",
  "Adult Group",
];

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "Flexible",
];

export default function PartnerPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [direction, setDirection] = useState(1);

  const sections = [
    "Contact Information",
    "Organization Details",
    "Schedule Request",
  ];

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "partner",
          ...formData,
        }),
      });

      if (!res.ok) {
        console.error("Partner contact submission failed:", await res.text());
        alert(
          "Something went wrong submitting your request. Please try again."
        );
        return;
      }

      setIsComplete(true);
    } catch (err) {
      console.error("Partner contact submission error:", err);
      alert(
        "Something went wrong submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = (): boolean => {
    switch (currentSection) {
      case 0:
        return (
          formData.firstName.trim().length >= 2 &&
          formData.lastName.trim().length >= 2 &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        );
      case 1:
        return (
          formData.organization.trim().length >= 2 &&
          formData.participants !== "" &&
          formData.gradeLevel !== ""
        );
      case 2:
        return (
          formData.requestedDate !== "" &&
          formData.requestedTime !== "" &&
          formData.presentation !== ""
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
              Thank You, {formData.firstName}!
            </h1>
            <p className="text-gray-600 text-lg mb-8 font-body">
              Your partnership request has been submitted. Our team will review
              your request and get back to you within 2-3 business days.
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
          <h2 className="text-2xl text-white mb-1">Partner With Us</h2>
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
                {/* Section 0: Contact Information */}
                {currentSection === 0 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl text-white mb-6">
                      Contact Information
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-lg mb-2">
                          First Name <span className="text-[#FFD87A]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            updateField("firstName", e.target.value)
                          }
                          placeholder="First Name"
                          className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body focus:ring-2 focus:ring-[#FFD87A]"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-lg mb-2">
                          Last Name <span className="text-[#FFD87A]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            updateField("lastName", e.target.value)
                          }
                          placeholder="Last Name"
                          className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body focus:ring-2 focus:ring-[#FFD87A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        Contact Email <span className="text-[#FFD87A]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="you@organization.com"
                        className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body focus:ring-2 focus:ring-[#FFD87A]"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        Contact Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                        className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body focus:ring-2 focus:ring-[#FFD87A]"
                      />
                    </div>
                  </div>
                )}

                {/* Section 1: Organization Details */}
                {currentSection === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl text-white mb-6">
                      Organization Details
                    </h2>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        School/Organization{" "}
                        <span className="text-[#FFD87A]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          updateField("organization", e.target.value)
                        }
                        placeholder="Organization name"
                        className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body focus:ring-2 focus:ring-[#FFD87A]"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        # of Participants{" "}
                        <span className="text-[#FFD87A]">*</span>
                      </label>
                      <input
                        type="number"
                        value={formData.participants}
                        onChange={(e) =>
                          updateField("participants", e.target.value)
                        }
                        placeholder="Estimated number of participants"
                        className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body focus:ring-2 focus:ring-[#FFD87A]"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        Grade/Age Level <span className="text-[#FFD87A]">*</span>
                      </label>
                      <select
                        value={formData.gradeLevel}
                        onChange={(e) =>
                          updateField("gradeLevel", e.target.value)
                        }
                        className="w-full bg-white/20 rounded-xl text-white p-4 outline-none font-body focus:ring-2 focus:ring-[#FFD87A] [&>option]:text-[#013161]"
                      >
                        <option value="">Select grade/age level</option>
                        {gradeLevelOptions.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Section 2: Schedule Request */}
                {currentSection === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl text-white mb-6">
                      Schedule Request
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-lg mb-2">
                          Requested Date{" "}
                          <span className="text-[#FFD87A]">*</span>
                        </label>
                        <input
                          type="date"
                          value={formData.requestedDate}
                          onChange={(e) =>
                            updateField("requestedDate", e.target.value)
                          }
                          className="w-full bg-white/20 rounded-xl text-white p-4 outline-none font-body focus:ring-2 focus:ring-[#FFD87A] [color-scheme:dark]"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-lg mb-2">
                          Requested Time{" "}
                          <span className="text-[#FFD87A]">*</span>
                        </label>
                        <select
                          value={formData.requestedTime}
                          onChange={(e) =>
                            updateField("requestedTime", e.target.value)
                          }
                          className="w-full bg-white/20 rounded-xl text-white p-4 outline-none font-body focus:ring-2 focus:ring-[#FFD87A] [&>option]:text-[#013161]"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-lg mb-3">
                        Choose Your Presentation{" "}
                        <span className="text-[#FFD87A]">*</span>
                      </label>
                      <div className="space-y-3">
                        {presentationOptions.map((presentation) => (
                          <button
                            key={presentation}
                            onClick={() =>
                              updateField("presentation", presentation)
                            }
                            className={`w-full p-4 rounded-xl font-body text-left transition-all flex items-center gap-4 ${
                              formData.presentation === presentation
                                ? "bg-[#FFD87A] text-[#013161] font-semibold"
                                : "bg-white/20 text-white hover:bg-white/30"
                            }`}
                          >
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                formData.presentation === presentation
                                  ? "border-[#013161]"
                                  : "border-white/50"
                              }`}
                            >
                              {formData.presentation === presentation && (
                                <div className="w-3 h-3 rounded-full bg-[#013161]" />
                              )}
                            </div>
                            {presentation}
                          </button>
                        ))}
                      </div>
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
                    "Submit Request ✓"
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

