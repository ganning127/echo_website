"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { getRecaptchaToken } from "@/lib/recaptcha";

type FormData = {
  // Background Information
  name: string;
  role: string;
  email: string;
  heardAbout: string;
  impactYears: string[];
  // Personal Information
  city: string;
  state: string;
  zipcode: string;
  country: string;
  travelType: string;
  travelTimeMeasurement: string;
  travelAmount: string;
  lifeAfterProgram: string;
  standoutMoments: string;
  finalThoughts: string;
  openToInterview: string;
  hasPicturesVideos: string;
  // Legal
  agreeToTerms: boolean;
};

const initialFormData: FormData = {
  name: "",
  role: "",
  email: "",
  heardAbout: "",
  impactYears: [],
  city: "",
  state: "",
  zipcode: "",
  country: "",
  travelType: "",
  travelTimeMeasurement: "",
  travelAmount: "",
  lifeAfterProgram: "",
  standoutMoments: "",
  finalThoughts: "",
  openToInterview: "",
  hasPicturesVideos: "",
  agreeToTerms: false,
};

const roleOptions = [
  "Parent",
  "Teacher",
  "Student",
  "Business/Organization",
  "Other",
];

const heardAboutOptions = [
  "Social Media",
  "School/Teacher",
  "Friend or Family",
  "Healthcare Provider",
  "Web Search",
  "Community Event",
  "Other",
];

const yearOptions = [
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
];

const travelTypeOptions = ["Car", "Plane", "Train", "Bus", "Other"];
const travelTimeOptions = ["Minutes", "Hours", "Days"];

const countryOptions = [
  "United States",
  "Canada",
  "Mexico",
  "United Kingdom",
  "Australia",
  "Other",
];

export default function StorySubmissionPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [direction, setDirection] = useState(1);

  const sections = [
    "Background Information",
    "Personal Information",
    "Your Story",
    "Additional Questions",
    "Legal & Submit",
  ];

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleYear = (year: string) => {
    setFormData((prev) => ({
      ...prev,
      impactYears: prev.impactYears.includes(year)
        ? prev.impactYears.filter((y) => y !== year)
        : [...prev.impactYears, year],
    }));
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
      const recaptchaToken = await getRecaptchaToken("contact_story");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "story",
          recaptchaToken,
          ...formData,
        }),
      });

      if (!res.ok) {
        console.error("Story submission failed:", await res.text());
        alert(
          "Something went wrong submitting your story. Please try again."
        );
        return;
      }

      setIsComplete(true);
    } catch (err) {
      console.error("Story submission error:", err);
      alert(
        "Something went wrong submitting your story. Please try again."
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
          formData.role !== "" &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        );
      case 1:
        return formData.city !== "" && formData.country !== "";
      case 2:
        return formData.lifeAfterProgram.trim().length >= 10;
      case 3:
        return true;
      case 4:
        return formData.agreeToTerms;
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
              Your story has been submitted. We appreciate you sharing your ECHO
              Explorers experience with us!
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
          <h2 className="text-2xl text-white mb-1">Story Submission</h2>
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
                {/* Section 0: Background Information */}
                {currentSection === 0 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl text-white mb-6">
                      Background Information
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
                        I&apos;m a... <span className="text-[#FFD87A]">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {roleOptions.map((role) => (
                          <button
                            key={role}
                            onClick={() => updateField("role", role)}
                            className={`px-4 py-2 rounded-xl font-body transition-all ${
                              formData.role === role
                                ? "bg-[#FFD87A] text-[#013161] font-semibold"
                                : "bg-white/20 text-white hover:bg-white/30"
                            }`}
                          >
                            {role}
                          </button>
                        ))}
                      </div>
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
                    </div>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        How did you learn about the program?
                      </label>
                      <select
                        value={formData.heardAbout}
                        onChange={(e) =>
                          updateField("heardAbout", e.target.value)
                        }
                        className="w-full bg-white/20 rounded-xl text-white p-4 outline-none font-body focus:ring-2 focus:ring-[#FFD87A] [&>option]:text-[#013161]"
                      >
                        <option value="">Select an option</option>
                        {heardAboutOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        What year(s) did ECHO Explorers have an impact on you?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {yearOptions.map((year) => (
                          <button
                            key={year}
                            onClick={() => toggleYear(year)}
                            className={`px-3 py-2 rounded-lg text-sm font-body transition-all ${
                              formData.impactYears.includes(year)
                                ? "bg-[#FFD87A] text-[#013161] font-semibold"
                                : "bg-white/20 text-white hover:bg-white/30"
                            }`}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 1: Personal Information */}
                {currentSection === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl text-white mb-6">
                      Personal Information
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-lg mb-2">
                          City <span className="text-[#FFD87A]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => updateField("city", e.target.value)}
                          placeholder="City"
                          className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body focus:ring-2 focus:ring-[#FFD87A]"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-lg mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          value={formData.state}
                          onChange={(e) => updateField("state", e.target.value)}
                          placeholder="State/Province"
                          className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body focus:ring-2 focus:ring-[#FFD87A]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-lg mb-2">
                          Zipcode
                        </label>
                        <input
                          type="text"
                          value={formData.zipcode}
                          onChange={(e) =>
                            updateField("zipcode", e.target.value)
                          }
                          placeholder="Zipcode"
                          className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body focus:ring-2 focus:ring-[#FFD87A]"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-lg mb-2">
                          Country <span className="text-[#FFD87A]">*</span>
                        </label>
                        <select
                          value={formData.country}
                          onChange={(e) =>
                            updateField("country", e.target.value)
                          }
                          className="w-full bg-white/20 rounded-xl text-white p-4 outline-none font-body focus:ring-2 focus:ring-[#FFD87A] [&>option]:text-[#013161]"
                        >
                          <option value="">Select a country</option>
                          {countryOptions.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        How far did you travel to our program?
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-white/70 text-sm mb-1">
                            Travel Type
                          </label>
                          <select
                            value={formData.travelType}
                            onChange={(e) =>
                              updateField("travelType", e.target.value)
                            }
                            className="w-full bg-white/20 rounded-xl text-white p-3 outline-none font-body focus:ring-2 focus:ring-[#FFD87A] [&>option]:text-[#013161]"
                          >
                            <option value="">Type</option>
                            {travelTypeOptions.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-white/70 text-sm mb-1">
                            Amount
                          </label>
                          <input
                            type="number"
                            value={formData.travelAmount}
                            onChange={(e) =>
                              updateField("travelAmount", e.target.value)
                            }
                            placeholder="Amount"
                            className="w-full bg-white/20 rounded-xl text-white p-3 outline-none placeholder:text-white/40 font-body focus:ring-2 focus:ring-[#FFD87A]"
                          />
                        </div>
                        <div>
                          <label className="block text-white/70 text-sm mb-1">
                            Measurement
                          </label>
                          <select
                            value={formData.travelTimeMeasurement}
                            onChange={(e) =>
                              updateField(
                                "travelTimeMeasurement",
                                e.target.value
                              )
                            }
                            className="w-full bg-white/20 rounded-xl text-white p-3 outline-none font-body focus:ring-2 focus:ring-[#FFD87A] [&>option]:text-[#013161]"
                          >
                            <option value="">Unit</option>
                            {travelTimeOptions.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 2: Your Story */}
                {currentSection === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl text-white mb-6">Your Story</h2>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        Tell us about your life after our ECHO Explorer program.
                        How has your heart health been to date?{" "}
                        <span className="text-[#FFD87A]">*</span>
                      </label>
                      <textarea
                        value={formData.lifeAfterProgram}
                        onChange={(e) =>
                          updateField("lifeAfterProgram", e.target.value)
                        }
                        placeholder="Share your journey with us..."
                        rows={5}
                        className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body resize-none focus:ring-2 focus:ring-[#FFD87A]"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        Were there any particular moments or experiences at ECHO
                        Explorers that stood out to you or your family?
                      </label>
                      <textarea
                        value={formData.standoutMoments}
                        onChange={(e) =>
                          updateField("standoutMoments", e.target.value)
                        }
                        placeholder="Share any memorable moments..."
                        rows={4}
                        className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body resize-none focus:ring-2 focus:ring-[#FFD87A]"
                      />
                    </div>
                  </div>
                )}

                {/* Section 3: Additional Questions */}
                {currentSection === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl text-white mb-6">
                      Additional Questions
                    </h2>

                    <div>
                      <label className="block text-white text-lg mb-2">
                        Any final thoughts or comments you would like to share?
                      </label>
                      <textarea
                        value={formData.finalThoughts}
                        onChange={(e) =>
                          updateField("finalThoughts", e.target.value)
                        }
                        placeholder="Any additional comments..."
                        rows={3}
                        className="w-full bg-white/20 rounded-xl text-white p-4 outline-none placeholder:text-white/40 font-body resize-none focus:ring-2 focus:ring-[#FFD87A]"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-lg mb-3">
                        Would you be open to more communication or a video/phone
                        interview from ECHO?
                      </label>
                      <div className="flex gap-3">
                        {["Yes", "No", "Maybe"].map((option) => (
                          <button
                            key={option}
                            onClick={() =>
                              updateField("openToInterview", option)
                            }
                            className={`px-6 py-3 rounded-xl font-body transition-all ${
                              formData.openToInterview === option
                                ? "bg-[#FFD87A] text-[#013161] font-semibold"
                                : "bg-white/20 text-white hover:bg-white/30"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-lg mb-3">
                        Do you have pictures and/or videos from the days of you
                        or your child(ren) in the ECHO Explorers program?
                      </label>
                      <div className="flex gap-3">
                        {[
                          "Yes, I can share",
                          "Yes, but cannot share",
                          "No",
                        ].map((option) => (
                          <button
                            key={option}
                            onClick={() =>
                              updateField("hasPicturesVideos", option)
                            }
                            className={`px-4 py-3 rounded-xl font-body text-sm transition-all ${
                              formData.hasPicturesVideos === option
                                ? "bg-[#FFD87A] text-[#013161] font-semibold"
                                : "bg-white/20 text-white hover:bg-white/30"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 4: Legal & Submit */}
                {currentSection === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl text-white mb-6">
                      Legal Disclaimer
                    </h2>

                    <div className="bg-white/10 rounded-xl p-6">
                      <p className="text-white/80 font-body text-sm mb-4">
                        By submitting this form, you agree to allow ECHO to use
                        your story and any submitted photos/videos for
                        promotional purposes. Your personal information will be
                        kept confidential and will only be used to contact you
                        regarding your submission.
                      </p>
                      <p className="text-white/80 font-body text-sm">
                        We respect your privacy and will never share your
                        personal information with third parties without your
                        explicit consent.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <button
                        onClick={() =>
                          updateField("agreeToTerms", !formData.agreeToTerms)
                        }
                        className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-all ${
                          formData.agreeToTerms
                            ? "bg-[#FFD87A]"
                            : "bg-white/20 hover:bg-white/30"
                        }`}
                      >
                        {formData.agreeToTerms && (
                          <svg
                            className="w-4 h-4 text-[#013161]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </button>
                      <label className="text-white font-body cursor-pointer">
                        I agree to the terms and conditions{" "}
                        <span className="text-[#FFD87A]">*</span>
                      </label>
                    </div>

                    <p className="text-white/50 font-body text-xs text-center">
                      This form is protected by reCAPTCHA.
                    </p>
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
                    "Submit Story ✓"
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

