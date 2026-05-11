"use client";

import { motion } from "motion/react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const contactOptions = [
  /* {
    title: "Story Submission",
    description: "Share your ECHO Explorers experience and how our program has impacted your life.",
    href: "/contact/story-submission",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    
  },
  
  {
    title: "Question Submission",
    description: "Have a question about ECHO? Submit it here and we'll get back to you.",
    href: "/contact/question",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },*/
  {
    title: "Contact Us",
    description: "Drop us a line! We'd love to hear from you.",
    href: "/contact/general",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Partner With Us",
    description: "Reach out to us to bring ECHO to your community.",
    href: "/contact/partner",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  
];

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-[#013161] via-[#1876D0] to-[#329D3C] flex flex-col lg:pt-24 pt-0">
        {/* Header */}
        <div className="text-center pt-12 pb-8 px-4">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl text-white mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-xl font-body max-w-2xl mx-auto"
          >
            Choose how you&apos;d like to connect with the ECHO team
          </motion.p>
        </div>

        {/* Widget Grid */}
        <div className="flex-1 flex items-start justify-center p-4 pb-12">
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Link href={option.href}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl cursor-pointer group transition-all hover:bg-white/20 h-full"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-[#FFD87A] rounded-2xl flex items-center justify-center mb-6 text-[#013161] group-hover:bg-[#ffe5a3] transition-colors">
                        {option.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl text-white mb-3">
                        {option.title}
                      </h2>
                      <p className="text-white/70 font-body text-lg">
                        {option.description}
                      </p>
                      <div className="mt-6 flex items-center text-[#FFD87A] font-heading text-lg group-hover:translate-x-2 transition-transform">
                        Get Started
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


